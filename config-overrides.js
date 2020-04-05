const { override, fixBabelImports ,addDecoratorsLegacy,addWebpackAlias} = require('customize-cra');
const {resolve} = require('path')
module.exports = override(
    addWebpackAlias({
        '@': resolve('src')
    }),
    addDecoratorsLegacy(),//装饰器
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
);