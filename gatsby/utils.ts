// Replacing '/' would result in empty string which is invalid
// eslint-disable-next-line no-multi-assign

const replacePath = (path) => (path === '/' ? path : path.replace(/\/$/, ''));
module.exports = replacePath;
