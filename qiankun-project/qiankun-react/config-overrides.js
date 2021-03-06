module.exports = {
    devServer: (configFunction) => {

        return function (proxy, allowedHost) {
            const config = configFunction(proxy, allowedHost);
            config.headers = {
                'Access-Control-Allow-Origin': '*'
            }
            return config;
        }
    },
    webpack: (config) => {
        config.output.library = 'reactApp',
        config.output.libraryTarget = 'umd',
        config.output.publicPath= '//localhost:20000/';
        return config;
    }
}