const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = (app)=> {
    app.use('/api', 
    createProxyMiddleware({ 
        target: 'http://www.chawo.com/mobile', 
        changeOrigin: true ,
        pathRewrite:{
            "/api":""
        } 
    }));
}