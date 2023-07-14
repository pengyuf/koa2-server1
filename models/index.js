const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
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

const User = mongoose.model('users', UserSchema)

module.exports = {
    User
}