// const proxy = require('http-proxy-middleware');
const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:3001',
            changeOrigin: true,
        })
    );
    app.use(
        '/auth/google',
        createProxyMiddleware({
            target: 'http://localhost:3001',
            changeOrigin: true,
        })
    );
    
    app.use(
        '/auth/google/callback',
        createProxyMiddleware({
            target: 'http://localhost:3001',
            changeOrigin: true,
        })
    );
    // app.use(proxy('/auth/google', { target: 'http://localhost:5000/' }));
    // app.use(proxy('/auth/google/callback', { target: 'http://localhost:5000/' }));
}; 