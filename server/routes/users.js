const express = require('express')
const router = express.Router()
const User = require('./../models/users')
const svgCaptcha = require('svg-captcha')
require('../util/util')

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource')
});


router.get('/isCaptchaTrue', (req, res, next) => {
  const captcha = req.param('captcha').toLowerCase()
  if (req.session.captcha.toLowerCase() !== captcha) {
    res.json({
      status: '500',
      msg: '验证码有错',
      result: ''
    })
    return
  } else {
    res.json({
      status: '200',
      msg: '验证码正确',
      result: ''
    })
  }
})

router.get('/captcha', (req, res, next) => {
  const captcha = svgCaptcha.create({
    background: "#3E96D6"
  })
  req.session.captcha = captcha.text

  res.set('Content-Type', 'image/svg+xml')
  res.json({
    status: '200',
    msg: 'OK',
    result: captcha
  })
})


router.get('/checkPwd', (req, res, next) => {
  const param = {
    userName: req.param('userName'),
    userPwd: req.param('userPwd')
  }
  User.findOne(param)
    .then(doc => {
      if (doc) {
        res.json({
          status: '200',
          msg: '密码正确',
          result: ''
        })
      }
      else {
        res.json({
          status: '500',
          msg: '密码错误',
          result: ''
        })
      }
    })
    .catch(err => {
      res.json({
        status: '404',
        msg: err.message,
        result: ''
      })
    })
})

router.get('/isRepeated', (req, res, next) => {
  const userName = req.param('userName')
  User.findOne({ userName: userName })
    .then(doc => {
      if (doc) {
        res.json({
          status: '500',
          msg: '用户已存在',
          result: ''
        })
      }
      else {
        res.json({
          status: '200',
          msg: '用户不存在，可以注册',
          result: ''
        })
      }
    })
    .catch(err => {
      res.json({
        status: '404',
        msg: err.message,
        result: ''
      })
    })
})

//注册
router.post('/signup', (req, res, next) => {
  const captcha = req.body.captcha.toLowerCase()
  console.log(captcha)
  console.log(req.session.captcha.toLowerCase())
  if (req.session.captcha.toLowerCase() !== captcha) {
    res.json({
      status: '500',
      msg: '验证码有错',
      result: ''
    })
    return
  }
  console.log('param')
  const param = {
    userName: req.body.userName,
    userPwd: req.body.userPwd
  }

  User.findOne({ userName: param.userName })
    .then(doc => {
      if (doc) {
        res.json({
          status: '400',
          msg: '用户已存在',
          result: ''
        })
      } else {
        param.userId = Math.floor(Math.random() * 1000000000) + ''
        const newUser = new User(param)
        newUser.save((err, user) => {
          if (err) {
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
    })
    .catch(err => {
      res.json({
        status: '404',
        msg: err.message,
        result: ''
      })
    })
})


//登录
router.post('/login', (req, res, next) => {
  const captcha = req.body.captcha.toLowerCase()
  console.log(captcha)
  console.log(req.session.captcha.toLowerCase())
  if (req.session.captcha.toLowerCase() !== captcha) {
    res.json({
      status: '500',
      msg: '验证码有错',
      result: ''
    })
    return
  }
  console.log('param')
  const param = {
    userName: req.body.userName,
    userPwd: req.body.userPwd
  }

  User.findOne(param)
    .then(doc => {
      if (doc) {
        res.cookie("userId", doc.userId, {
          path: '/',
          maxAge: 1000 * 60 * 60 * 24 * 7
        })
        res.cookie("userName", doc.userName, {
          path: '/',
          maxAge: 1000 * 60 * 60 * 24 * 7
        })

        req.session.user = {
          userName: doc.userName,
          userId: doc.userId
        }
        res.json({
          status: '200',
          msg: 'OK',
          result: {
            userName: doc.userName
          }
        })
      } else {
        res.json({
          status: '400',
          msg: '用户名或者密码错误',
          result: ''
        })
      }
    })
    .catch(err => {
      res.json({
        status: '404',
        msg: err.message,
        result: ''
      })
    })

})


//登出
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
  req.session.destroy((err) => {
    if (err) {
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


//检查登录
router.get("/checkLogin", (req, res, next) => {
  console.log(req.session.user)
  //  if(req.cookies.userId && req.cookies.userName && req.cookies.user) {
  if (req.session.user.userId && req.session.user.userName) {
    res.json({
      status: '200',
      msg: 'OK',
      // result: req.cookies.userName
      result: req.session.user.userName
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


//购物车列表
router.get("/cartList", (req, res, next) => {
  // const userId = req.cookies.userId
  const userId = req.session.user.userId

  User.findOne({ userId: userId })
    .then(doc => {
      if (doc) {
        res.json({
          status: '200',
          msg: 'OK',
          result: doc.cartList
        })
      } else {
        res.json({
          status: '500',
          msg: '购物车列表未找到',
          result: ''
        })
      }
    })
    .catch(err => {
      res.json({
        status: '404',
        msg: err.message,
        result: ''
      })
    })


})


//删除商品
router.post("/cartDel", (req, res, next) => {
  // const userId = req.cookies.userId,
  const userId = req.session.user.userId,
    productId = req.body.productId

  User.update({ userId: userId }, { $pull: { 'cartList': { 'productId': productId } } })
    .then(doc => {
      if (doc) {
        res.json({
          status: '200',
          msg: 'OK',
          result: 'success'
        })
      } else {
        res.json({
          status: '500',
          msg: '删除失败',
          result: ''
        })
      }
    })
    .catch(err => {
      res.json({
        status: '404',
        msg: err.message,
        result: ''
      })
    })

})


//编辑购物车
router.post("/cartEdit", (req, res, next) => {
  //const userId = req.cookies.userId,
  const userId = req.session.user.userId,
    productId = req.body.productId,
    productNum = req.body.productNum,
    checked = req.body.checked

  User.update({ userId: userId, "cartList.productId": productId },
    {
      "cartList.$.productNum": productNum,
      "cartList.$.checked": checked
    })
    .then(doc => {
      if (doc) {
        res.json({
          status: '200',
          msg: 'OK',
          result: 'success'
        })
      }
      else {
        res.json({
          status: '500',
          msg: '编辑失败',
          result: 'success'
        })
      }
    })
    .catch(err => {
      res.json({
        status: '404',
        msg: err.message,
        result: ''
      })
    })
})

//全选
router.post("/editCheckAll", (req, res, next) => {
  //const userId = req.cookies.userId,
  const userId = req.session.user.userId,
    checkAll = req.body.checkAll ? 1 : 0

  User.findOne({ userId: userId })
    .then(user => {
      if (user) {
        user.cartList.forEach((item) => {
          item.checked = checkAll;
        })
        user.save((Carterr, Cardoc) => {
          if (Carterr) {
            res.json({
              status: '404',
              msg: Carterr, message,
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
      }
    })
    .catch(err => {
      res.json({
        status: '404',
        msg: err.message,
        result: ''
      })
    })


})


//地址列表
router.get('/addressList', (req, res, next) => {
  //const userId = req.cookies.userId
  const userId = req.session.user.userId

  User.findOne({ userId: userId })
    .then(doc => {
      if (doc && doc.addressList.length) {
        res.json({
          status: '200',
          msg: 'OK',
          result: doc.addressList
        })
      } else {
        res.json({
          status: '400',
          msg: '没有地址',
          result: ''
        })
      }
    })
    .catch(err => {
      res.json({
        status: '404',
        msg: err.message,
        result: ''
      })
    })

})


//设置默认地址
router.post('/setDefault', (req, res, next) => {
  //const userId = req.cookies.userId,
  const userId = req.session.user.userId,
    addressId = req.body.addressId

  User.findOne({ userId: userId })
    .then(doc => {
      if (doc) {
        const addressList = doc.addressList
        addressList.forEach(item => {
          if (item.addressId === addressId) {
            item.isDefault = true
          }
          else {
            item.isDefault = false
          }
        })

        doc.save((addressErr, addressDoc) => {
          if (addressErr) {
            res.json({
              status: '404',
              msg: addressErr.message,
              result: ''
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
      else {
        res.json({
          status: '500',
          msg: '设置失败',
          result: ''
        })
      }
    })
    .catch(err => {
      res.json({
        status: '404',
        msg: err.message,
        result: ''
      })
    })

})


//添加地址
router.post('/addAdress', (req, res, next) => {
  const userId = req.session.user.userId,
    newAddress = req.body.newAddress,
    userName = newAddress.userName,
    streetName = newAddress.streetName,
    postCode = newAddress.postCode,
    tel = newAddress.tel
  let isDefault = newAddress.isDefault
  /*
            "addressId" : "10008",
            "userName" : "Joke",
            "streetName" : "广州市海珠区海珠国家湿地公园",
            "postCode" : "100010",
            "tel" : "13619898722",
            "isDefault" : false
  */
  User.findOne({ userId: userId })
    .then(doc => {
      console.log(doc.addressList)
      const addressId = Math.round(Math.random() * 100000) + ''
      const addressList = doc.addressList
      console.log(isDefault)
      if (isDefault) {
        console.log('isDefaualt')
        addressList.forEach(address => {
          console.log(address.isDefault)
          address.isDefault = false
        })
      } else {
        if (addressList.length === 0) {
          isDefault = true
        }
      }
      addressList.push({
        userName,
        addressId,
        streetName: streetName,
        postCode: postCode,
        tel: tel,
        isDefault: isDefault
      })
      doc.save((AddressErr, AddressDoc) => {
        if (AddressErr) {
          res.json({
            status: '404',
            msg: AddressErr.message,
            result: ''
          })
        }
        else {
          res.json({
            status: '200',
            msg: 'OK',
            result: 'success'
          })
        }
      })

      console.log(doc.addressList)
    })
    .catch(err => {
      res.json({
        status: '400',
        msg: err.message,
        result: ''
      })
    })
})


//删除地址
router.post('/delAddress', (req, res, next) => {
  //const userId = req.cookies.userId,
  const userId = req.session.user.userId,
    addressId = req.body.addressId

  User.update({ userId: userId }, { $pull: { 'addressList': { 'addressId': addressId } } })
    .then(doc => {
      if (doc) {
        res.json({
          status: '200',
          msg: 'OK',
          result: 'success'
        })
      } else {
        res.json({
          status: '500',
          msg: '删除失败',
          result: ''
        })
      }
    })
    .catch(err => {
      res.json({
        status: '404',
        msg: err.message,
        result: ''
      })
    })
})


//支付【并无实际支付功能，为创建订单功能】
router.post("/payMent", (req, res, next) => {
  //const userId = req.cookies.userId,
  const userId = req.session.user.userId,
    addressId = req.body.addressId
  orderTotal = req.body.orderTotal

  User.findOne({ userId: userId })
    .then(doc => {
      if (doc && doc.addressList.length) {
        let address = {}, goodsList = []
        doc.addressList.forEach(item => {
          if (item.addressId = addressId) {
            address = item;
          }
        })
        doc.cartList.filter(item => {
          if (item.checked === 1) {
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
          if (orderErr) {
            res.json({
              status: '404',
              msg: orderErr.message,
              result: ''
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
          status: '400',
          msg: '订单创建失败',
          result: ''
        })
      }
    })
    .catch(err => {
      res.json({
        status: '404',
        msg: err.message,
        result: ''
      })
    })



})


//订单确认
router.get("/orderDetail", (req, res, next) => {
  //const userId = req.cookies.userId,
  const userId = req.session.user.userId,
    orderId = req.param("orderId")
  User.findOne({ userId: userId })
    .then(userInfo => {
      if (userInfo) {
        const orderList = userInfo.orderList
        if (orderList.length > 0) {
          let orderTotal = 0
          orderList.forEach(item => {
            if (item.orderId == orderId) {
              orderTotal = item.orderTotal
            }
          })
          if (orderTotal > 0) {
            res.json({
              status: '200',
              msg: 'OK',
              result: {
                orderId: orderId,
                orderTotal: orderTotal
              }
            })
          }
          else {
            res.json({
              status: '404',
              msg: '无此订单',
              result: ''
            })
          }

        }
        else {
          res.json({
            status: '404',
            msg: '当前用户未创建订单',
            result: ''
          })
        }
      }
      else {
        res.json({
          status: '500',
          msg: '订单确认失败',
          result: ''
        })
      }
    })
    .catch(err => {
      res.json({
        status: '404',
        msg: err.message,
        result: ''
      })
    })
})


//获得购物车数量
router.get("/getCartCount", (req, res, next) => {
  // if(req.cookies && req.cookies.userId) {
  if (req.session.user && req.session.user.userId) {
    //  const userId = req.cookies.userId
    const userId = req.session.user.userId

    User.findOne({ userId: userId })
      .then(doc => {
        if (doc) {
          const cartList = doc.cartList
          let cartCount = 0
          cartList.map(item => {
            cartCount += parseInt(item.productNum)
          })
          res.json({
            status: '200',
            msg: 'OK',
            result: cartCount
          })
        }
      })
      .catch(err => {
        res.json({
          status: '404',
          msg: err.message,
          result: ''
        })
      })
  }
})


//订单列表
router.get('/orderList', (req, res, next) => {
    const userId = req.session.user.userId,
          page = req.param("page"),
          pageSize = req.param("pageSize"),
          skip = (page - 1) * pageSize
    
    User.findOne({userId: userId})
        .then(doc => {
          if(doc && doc.orderList) {
            let orderList = doc.orderList
            orderList  = orderList.slice(skip, skip + parseInt(pageSize))
            res.json({
              status: '200',
              msg: 'OK',
              result: {
                count: orderList.length,
                list: orderList
              }
            })
          }else {
             res.json({
              status: '500',
              msg: '找不到订单列表',
              result: ''
            })
          }
        })
        .catch(err => {
           res.json({
            status: '404',
            msg: err.message,
            result: ''
          })
        })
})



//删除订单
router.post('/delOrder', (req, res, next) => {
  const userId = req.session.user.userId,
        orderId = req.body.orderId

  User.update({userId: userId}, { $pull: { 'orderList' : { 'orderId': orderId } } })
      .then(doc => {
        /*console.log(doc)*/
        if(doc) {
            res.json({
              status: '200',
              msg: 'OK',
              result: doc
            })
          }else {
             res.json({
              status: '500',
              msg: '删除订单失败',
              result: ''
            })
          }
      })
      .catch(err => {
          res.json({
          status: '404',
          msg: err.message,
          result: ''
        })
      })
})



module.exports = router;
