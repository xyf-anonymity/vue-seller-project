const path = require('path')
// const data = require('./src/mock/data')
module.exports = {
    lintOnSave:'warning',
    devServer: {
        host: 'localhost',
        hot: true,
        open: true,
        port: 8000, 
        before: function (app) {
            app.get('/test', function (req, res) {
                res.json({
                    status: 0,
                    data:'empty'
                });
            });
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, 'src'),
                pages: path.resolve(__dirname, 'src/pages'),
                store: path.resolve(__dirname, 'src/store'),
                components:path.resolve(__dirname,'src/components')
            },  
        },
    }
}