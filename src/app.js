const Koa = require('koa')
const {koaBody} = require('koa-body')
const cors = require('@koa/cors')
const json = require('koa-json')
const router = require('./routes')
const helmet = require('koa-helmet')
const static = require('koa-static')
const path = require('path')


const app = new Koa()
app.use(static(path.join(__dirname, '../public')));
app.use(helmet());
app.use(koaBody({}));
app.use(cors());
app.use(json({ pretty: false, param: "pretty" }));
app.use(router());

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})