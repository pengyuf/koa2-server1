const router = require('koa-router')()

router.prefix('/api/users')

const { loginCtl } = require('../control/userControl')

router.post('/login', loginCtl)

router.get('/test', async (ctx, next) => {
    ctx.body = 'user test'
})

module.exports = router