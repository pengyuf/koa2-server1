const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')
const comments = require('./routes/comments')

// error handler
onerror(app)

// middlewares 中间件
app.use(bodyparser({ // request body 转换
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public')) // 静态文件服务

app.use(views(__dirname + '/views', { // 服务端模板引擎
  extension: 'pug'
}))

// logger 打印当前请求所花费的时间
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 模拟登录
// app.use(async (ctx, next) => {
//   const query = ctx.query
//   if (query.username == 'peng') {
//     await next() // 执行下一个中间件
//   } else {
//     // 登录失败
//     ctx.body = '登录失败'
//   }
// })

// routes 注册路由
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(comments.routes(), comments.allowedMethods())
// allowedMethods 对404或者返回是空的情况的一种补充

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
