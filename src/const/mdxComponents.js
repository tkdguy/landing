import Alert from '../components/Alert';
import Details from '../components/Details';
import Redirect from '../components/Redirect';
import NavTile from '../components/NavTile';
import NavTiles from '../components/NavTiles';
import ReactPlayer from 'react-player';
import InternalLink from '../components/InternalLink';
import { useEffect, useRef, useState } from 'react';
import copy from 'copy-to-clipboard';
import { CheckIcon, ClipboardIcon } from '@heroicons/react/solid';
import classNames from 'classnames';

export const mdxComponents = {
    Alert,
    Details,
    Redirect,
    NavTile,
    NavTiles,
    Player: (props) => <ReactPlayer {...props} style={{ maxWidth: '100%' }} />,
    a: (props) => <InternalLink {...props} />,
    pre: ({ children, ...rest }) => {
        const pre = useRef(null);
        const [copied, setCopied] = useState(false);
        useEffect(() => {
            if (copied) {
                setTimeout(() => setCopied(false), 2000);
            }
        }, [copied]);

        return (
            <div className="relative group">
                <pre {...rest} ref={pre}>
                    {children}
                </pre>
                <button
                    className={`bg-gray-700 opacity-0 transition-all duration-300 group-hover:opacity-100 text-gray-300 py-3 px-4 rounded-lg hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 absolute right-4 top-4 ${classNames(
                        {
                            'bg-green-500 hover:bg-green-500': copied,
                        }
                    )}`}
                    onClick={() => {
                        setCopied(true);
                        copy(pre.current.innerText);
                    }}
                >
                    {copied ? (
                        <CheckIcon className="text-white w-4 h-4" />
                    ) : (
                        <ClipboardIcon className="text-white w-4 h-4" />
                    )}
                </button>
            </div>
        );
    },
};
