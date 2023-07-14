const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors')

const mongoose = require('./db')

const index = require('./routes/index')
const user = require('./routes/user')

mongoose()

// error handler
onerror(app)

// 允许跨域
app.use(cors())

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


// routes 注册路由
// allowedMethods 对404或者返回是空的情况的一种补充
app.use(index.routes(), index.allowedMethods())
app.use(user.routes(), user.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
