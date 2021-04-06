const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/sellerSystem', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', console.log.bind(console,'数据库启动在 27017 端口'))