const path = require('path')
module.exports = {
    devServer: {
        host: 'localhost',
        hot: true,
        open: true,
        port: 8000, 
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, 'src'),
                pages: path.resolve(__dirname, 'src/pages'),
                store: path.resolve(__dirname, 'src/store'),
                components:path.resolve(__dirname,'src/components')
            },  
       }
    }
}