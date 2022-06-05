import { toText } from 'hast-util-to-text';
import { visit } from 'unist-util-visit';

const IGNORED_TAGS = ['h1'];
const collectText =
    ({ text = [] }) =>
    (tree) => {
        visit(tree, 'element', (node) => {
            if (!IGNORED_TAGS.includes(node.tagName)) {
                text.push(toText(node));
            }
        });
    };

export default collectText;
