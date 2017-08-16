const express = require('express')
const router = express.Router()
const User = require('./../models/users')
require('../util/util')

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});


router.post('/signup', (req, res, next) => {
  const param = {
     userName: req.body.userName,
     userPwd: req.body.userPwd
   }
   User.findOne(param, (err, doc) => {
     if(err) {
         res.json({
            status: '404',
            msg: err.message,
            result: ''
          })
     }
     else {
       if(doc) {
         res.json({
          status: '400',
          msg: '用户已存在',
          result: ''
        })
       } else {
         console.log(param)
         param.userId = Math.floor(Math.random() * 1000000000) + ''
         console.log(param)
         const newUser = new User(param)
         newUser.save((err, user) => {
           if(err) {
             res.json({
              status: '500',
              msg: '用户创建失败',
              result: ''
            })
           } else {
              res.json({
                status: '200',
                msg: '用户创建成功',
                result: param
              })
           }
         })
       }
     
     }
   })
})


router.post('/login', (req, res, next) => {
   const param = {
     userName: req.body.userName,
     userPwd: req.body.userPwd
   }
   User.findOne(param, (err, doc) => {
     if(err) {
       res.json({
          status: '404',
          msg: err.message,
          result: ''
        })
     } else {
       if(doc) {
       //  console.log(doc)
         res.cookie("userId", doc.userId, {
           path: '/',
           maxAge: 1000 * 60 * 60
         })
         res.cookie("userName", doc.userName, {
           path: '/',
           maxAge: 1000 * 60 * 60
         })
        /* res.session.userId = doc.userId*/
          // 检查 session 中的 isVisit 字段
          // 如果存在则增加一次，否则为 session 设置 isVisit 字段，并初始化为 1。
        /*  if(req.session.isVisit) {
            req.session.isVisit++;
            console.log(`第 ${req.session.isVisit} 次来此页面`)
          } else {
            req.session.isVisit = 1;
            console.log("欢迎第一次来这里")
            console.log(req.session)
          }*/
         req.session.user = doc.userName
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
   res.cookie("userName", "", {
    path: '/',
    maxAge: -1
  })
  res.cookie("user", "", {
    path: '/',
    maxAge: -1
  })
  console.log(req.session)
  req.session.destroy( (err) => {
      if(err) { 
        console.log("session销毁失败.")
      }
      else { 
        console.log("session被销毁.")
      }
  })
  console.log(req.session)
  res.json({
    status: "200",
    msg: "OK",
    result: ""
  })
})

router.get("/checkLogin", (req, res, next) => {
  if(req.cookies.userId && req.cookies.userName && req.cookies.user) {
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
      })
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


router.get('/addressList', (req, res, next) => {
  const userId = req.cookies.userId
  User.findOne({userId: userId}, (err, doc) => {
    if(err) {
      res.json({
        status:'404',
        msg:err.message,
        result:''
      })
    }
    else {
      if(doc && doc.addressList.length) {
        res.json({
          status:'200',
          msg:'OK',
          result: doc.addressList
        })
      } else {
         res.json({
          status:'400',
          msg: '没有地址',
          result:''
        })
      }
    }
  })
        
})


router.post('/setDefault', (req, res, next) => {
  const userId = req.cookies.userId,
        addressId = req.body.addressId
   User.findOne({userId: userId}, (err, doc) => {
    if(err) {
      res.json({
        status:'404',
        msg:err.message,
        result:''
      })
    }
    else {
      if(doc) {
        const addressList = doc.addressList
        addressList.forEach( item => {
          if(item.addressId === addressId) {
            item.isDefault = true
          }
          else {
            item.isDefault = false
          }
        })
      }
      doc.save((addressErr, addressDoc) => {
        if(addressErr) {
          res.json({
            status:'404',
            msg:addressErr.message,
            result:''
          })
        }
        else {
          res.json({
            status: '200',
            msg: 'OK',
            result: ''
          })
        }
      })
    }
  })
 
        
})


router.post('/delAddress', (req, res, next) => {
  const userId = req.cookies.userId,
        addressId = req.body.addressId
    User.update({ userId: userId }, {$pull:{'addressList': {'addressId':addressId}}},
     (err, doc) => {
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

router.post("/payMent", (req, res, next) => {
  const userId = req.cookies.userId,
        addressId = req.body.addressId 
        orderTotal = req.body.orderTotal 
  User.findOne({ userId: userId}, (err, doc) => {
    if(err){
      res.json({
        status:'404',
        msg:err.message,
        result:''
      })
    }else{
      if(doc &&  doc.addressList.length){
          let address = {}, goodsList = []
          doc.addressList.forEach( item => {
            if(item.addressId = addressId) {
              address = item;
            }
          })
          doc.cartList.filter( item => {
            if(item.checked === 1) {
              goodsList.push(item)
            }
          })
          
          const platform = '213'
          const r1 = Math.floor(Math.random() * 10)
          const r2 = Math.floor(Math.random() * 10)

          const sysDate = new Date().Format('yyyyMMddhhmmss')
          const createDate = new Date().Format('yyyy-MM-dd hh:mm:ss')
          const orderId = platform + r1 + sysDate + r2

          const order = {
             orderId: orderId,
             orderTotal: orderTotal,
             addressInfo: address,
             goodsList: goodsList,
             orderStatus: '1',
             createDate: createDate
          }

          doc.orderList.push(order)

          doc.save((orderErr, orderDoc) => {
            if(orderErr) {
              res.json({
                status:'404',
                msg:orderErr.message,
                result:''
              })
            }
            else {
              res.json({
                status: '200',
                msg: 'OK',
                result: {
                  orderId: order.orderId,
                  orderTotal: order.orderTotal
                }
              })
            }
          })
      }
      else {
        res.json({
          status:'400',
          msg:'没有地址',
          result:''
        })
      }
    }
  })
})


router.get("/orderDetail", (req, res, next) => {
  const userId = req.cookies.userId,
        orderId = req.param("orderId")
  User.findOne({ userId: userId }, (err, userInfo) => {
    if(err){
      res.json({
        status:'404',
        msg:err.message,
        result:''
      })
    }else{
      if(userInfo){
         const orderList =  userInfo.orderList
         if(orderList.length > 0) {
          let orderTotal = 0
           orderList.forEach( item => {
             if(item.orderId == orderId) {
               orderTotal = item.orderTotal
             }
           })
           if(orderTotal > 0) {
             res.json({
                status:'200',
                msg:'OK',
                result:{
                  orderId: orderId,
                  orderTotal: orderTotal
                }
              })
           }
           else {
              res.json({
                status:'404',
                msg:'无此订单',
                result:''
              })
           }
           
         }
         else {
           res.json({
            status:'404',
            msg:'当前用户未创建订单',
            result:''
          })
         }
         
      }
    }
  })
})

router.get("/getCartCount", (req, res, next) => {
    if(req.cookies && req.cookies.userId) {
      const userId = req.cookies.userId
      User.findOne({ userId: userId }, (err, doc) => {
        if(err) {
          res.json({
            status:'404',
            msg:err.message,
            result:''
          })
        }
        else {
          if(doc) {
            const cartList = doc.cartList
            let cartCount = 0
            cartList.map( item => {
              cartCount += parseInt(item.productNum)
            })
            res.json({
              status: '200',
              msg: 'OK',
              result: cartCount
            })
          }
        }
      })
    }
})

module.exports = router;
