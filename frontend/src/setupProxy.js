const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
    // target: 'http://127.0.0.1:5000/',
    target: "https://ssn-oms-backend.onrender.com/",

    // "proxy": "http://127.0.0.1:5000/",
    // "proxy": "https://ssn-oms-backend.onrender.com/",
      changeOrigin: true,
    })
  );
};