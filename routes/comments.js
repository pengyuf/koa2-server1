const router = require('koa-router')()

router.prefix('/api')

router.get('/list', async (ctx, next) => {
    const query = ctx.query  // req 功能
    ctx.body = '测试路由' // res 功能
})

router.post('/create', async (ctx, next) => {
    const body = ctx.request.body // 数据
    ctx.body = 'create'
})

module.exports = router