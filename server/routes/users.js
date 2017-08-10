const express = require('express')
const router = express.Router()
const User = require('./../models/users')


/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});


router.post('/login', (req, res, next) => {
   const param = {
     userName: req.body.userName,
     userPwd: req.body.userPwd
   }
   User.findOne(param, (err, doc) => {
     if(err) {
       res.json({
         status: '404',
         msg: err.message
       })
     } else {
       if(doc) {
         res.cookie("userId", doc.userId, {
           path: '/',
           maxAge: 1000 * 60 * 60
         })
         res.cookie("userName", doc.userName, {
           path: '/',
           maxAge: 1000 * 60 * 60
         })
         //req.session.user = doc
         res.json({
           status: '200',
           msg: 'OK',
           result: {
             userName: doc.userName
           }
         })
       }
     }
   })
})


router.post('/logout', (req, res, next) => {
  res.cookie("userId", "", {
    path: "/",
    maxAge: -1
  })
  res.json({
    status: "200",
    msg: "OK",
    result: ""
  })
})

router.get("/checkLogin", (req, res, next) => {
  if(req.cookies.userId) {
    res.json({
      status: '200',
      msg: 'OK',
      result: req.cookies.userName
    })
  }
  else {
    res.json({
      status: '404',
      msg: '未登录',
      result: ''
    })
  }
})


module.exports = router;
