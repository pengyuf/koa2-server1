// 数据模型（规范数据格式）

const mongoose = require('./db')

// 定义Schema（数据规范）
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true, // 必需
        unique: true // 唯一
    },
    password: String,
    age: Number,
    city: String,
    gender: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true // 时间戳
})

const User = mongoose.model('user',UserSchema)

module.exports = {
    User
}