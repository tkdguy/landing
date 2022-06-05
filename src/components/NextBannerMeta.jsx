import { useRouter } from 'next/router';
import getConfig from 'next/config';
import Head from 'next/head';
import React from 'react';

// copied from next-banner because of various bugs in the original component
// https://github.com/alvarlagerlof/next-banner/issues/82

export default function NextBannerMeta({ children }) {
    const { asPath, locale } = useRouter();

    const {
        publicRuntimeConfig: {
            nextBannerOptions: { domain, outputDir },
        },
    } = getConfig();

    let url = `${domain}/${outputDir}`;

    if (locale) {
        url += `/${locale}`;
    }

    url += asPath;

    // remove #anchors
    url = url.replace(/#[a-zA-Z\-]*/, '');

    // remove trailing slash (if it's there)
    url = url.replace(/\/$/, '');

    // remove index
    url = url.replace(/\/index$/, '');

    url += '.jpg';

    return (
        <>
            <Head>
                <meta property="og:image" content={url} />
            </Head>

            {children}
        </>
    );
}
