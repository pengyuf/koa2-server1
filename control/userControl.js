const { User } = require('../models')

const loginCtl = async (ctx) => {
    let { username, password } = ctx.request.body

    await User.findOne({ username, password }).then(res => {
        if (res) {
            ctx.body = {
                code: 200,
                msg: '登录成功'
            }
        } else {
            ctx.body = {
                code: 300,
                msg: '用户名或者密码错误'
            }
        }
    }).catch(err => {
        ctx.body = {
            code: 500,
            msg: err
        }
    })
}

module.exports = {
    loginCtl
}