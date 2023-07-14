// 连接数据库（mongodb的服务端）
const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017'
const dbName = 'comment2'

// 开始连接
mongoose.connect(`${url}/${dbName}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const conn = mongoose.connection

conn.on('error',err=>{
    console.error('mongoose 连接错误',err)
})

module.exports = mongoose