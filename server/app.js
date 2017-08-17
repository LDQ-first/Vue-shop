var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var index = require('./routes/index');
var users = require('./routes/users');
var goods = require('./routes/goods');


const session = require('express-session')
const mongoStore = require('connect-mongo')(session)

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'recommand 128 bytes random string', // 建议使用 128 个字符的随机字符串  
 //作为服务器端生成session  cookie的签名 ，防止篡改 ,
  //通过设置的 secret 字符串，来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改。
 name: 'user',         
 // cookie的名字 保存 session 的字段名称,返回客户端的key的名称，默认为connect.sid,也可以自己设置。
 resave:  false,
 //强制保存session即使它并没有变化 （默认： true）
 //saveUninitialized:
 //初始化session时是否保存到存储。默认为true， 但是(后续版本)有可能默认失效，所以最好手动添加。
cookie:  { maxAge: 60 * 1000 * 60 * 24 * 7 },
//session cookie设置 设置返回到前端key的属性，默认值为{ path: ‘/’, httpOnly: true, secure: false, maxAge: null }。
//genid - 生成新session ID的函数 （默认使用uid2库）
 //rolling: false,
 //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
//proxy: true,
// 当设置了secure cookies（通过”x-forwarded-proto” header ）时信任反向代理。当设定为true时，
//”x-forwarded-proto” header 将被使用。
//当设定为false时，所有headers将被忽略。当该属性没有被设定时，将使用Express的trust proxy。
saveUninitialized: false,
// 强制将未初始化的session存储。当新建了一个session且未设定属性或值时，它就处于
//未初始化状态。在设定一个cookie前，这对于登陆验证，减轻服务端存储压力，权限控制是有帮助的。（默认：true）
// unset
// 控制req.session是否取消（例如通过 delete，或者将它的值设置为null）。这可以使session保持存储
// 状态但忽略修改或删除的请求（默认：keep）
//session存储实例
  store: new mongoStore({
  //  db: 'VueShop',
    url: 'mongodb://localhost:27017/shopdb',
    collection: 'sessions'
  })
}))
app.use(express.static(path.join(__dirname, 'public')));



app.use((req, res, next) => {
    /*if(req.cookies.userId) {
      next()
    }*/
    if(req.session.user) {
      next()
    }
    else {
      if( req.path === '/users/signup' || req.path === '/users/captcha' || req.path === '/goods/list' ||
       req.originalUrl === '/users/login' || req.originalUrl === '/users/logout') {
        next()
      }
      else {
        res.json({
          status: '10001',
          msg: '当前未登录',
          result: ''
        })
      }
    }
})

//配置一级路由
app.use('/', index);
app.use('/goods', goods);
app.use('/users', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
