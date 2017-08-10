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

router.get("/cartList", (req, res, next) => {
   const userId = req.cookies.userId
   User.findOne({userId:userId}, (err, doc) => {
     if(err) {
         res.json({
            status: '404',
            msg: err.message,
            result: ''
          })
     } else {
       if(doc) {
         res.json({
           status: '200',
           msg: 'OK',
           result: doc.cartList
         })
       }
     }
   })
})

router.post("/cartDel", (req, res, next) => {
  const userId = req.cookies.userId,
        productId = req.body.productId
  User.update({ userId: userId }, {$pull:{'cartList': {'productId':productId}}}, (err, doc) => {
    if(err) {
      res.json({
        status: '404',
        msg: err.message,
        result: ''
      })
    } else {
      res.json({
        status: '200',
        msg: 'OK',
        result: 'success'
      })
    }
  })

})


router.post("/cartEdit",(req, res, next) => {
    const userId = req.cookies.userId,
          productId = req.body.productId,
          productNum = req.body.productNum,
          checked = req.body.checked
    User.update({ userId: userId, "cartList.productId": productId },
    {
     "cartList.$.productNum": productNum,
     "cartList.$.checked": checked
    }, (err, doc) => {
        if(err) {
          res.json({
            status: '404',
            msg: err.message,
            result: ''
          })
        } else {
          res.json({
            status: '200',
            msg: 'OK',
            result: 'success'
          })
        }
    })  
})


router.post("/editCheckAll", (req, res, next) => {
  const userId = req.cookies.userId,
      checkAll = req.body.checkAll ? 1 : 0
  User.findOne({userId:userId}, (err, user) => {
    if(err){
      res.json({
        status:'404',
        msg:err.message,
        result:''
      });
    }else{
      if(user){
        user.cartList.forEach((item)=>{
          item.checked = checkAll;
        })
        user.save((Carterr, Cardoc) => {
            if(Carterr){
              res.json({
                status:'404',
                msg:Carterr,message,
                result:''
              })
            }else{
              res.json({
                status:'200',
                msg:'OK',
                result:'success'
              })
            }
        })
      }
    }
  })
})

module.exports = router;
