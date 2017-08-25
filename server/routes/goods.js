const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Goods = require('../models/goods.js')
mongoose.Promise = global.Promise

/*mongoose.connect('mongodb://localhost:27017/shopdb')*/

var env = process.env.NODE_ENV || 'development'
console.log(env)
if(env === 'development') {
    mongoose.connect('mongodb://localhost:27017/shopdb')
}
else {
 mongoose.connect('mongodb://ldqvip.vueshop:ldq88715586$tdN@127.0.0.1:21321/shopdb')
}


mongoose.connection.on('connected', () => {
    console.log("MongoDB connected success")
})
mongoose.connection.on('error', () => {
    console.log("MongoDB connected fail")
})
mongoose.connection.on('disconnected', () => {
    console.log("MongoDB connected disconnected")
})


router.get('/list', (req, res, next) => {
   const sort = req.param("sort")
   const page = req.param("page")
   const pageSize = req.param("pageSize")
   const priceChecked = req.param("priceChecked")
   let params = {}
   let priceGt = '', priceLte = ''
   if(priceChecked !== 'all') {
       switch(priceChecked) {
            case '0': priceGt = 0; priceLte=500; break;
            case '1': priceGt = 500; priceLte=1000; break;
            case '2': priceGt = 1000; priceLte=2000; break;
            case '3': priceGt = 2000; priceLte=4000; break;
        }
        params = {
            salePrice: {
                $gt: priceGt,
                $lte: priceLte
            }
        }
        console.log(params)
   }
   
   const skip = (page - 1) * pageSize;
   const goodsModel = Goods.find(params).skip(skip).limit(parseInt(pageSize))

   goodsModel.sort({'salePrice': sort})

   goodsModel.exec((err, doc) => {
       if(err) {
           res.json({
               status: '404',
               msg: err.message
           })
       }
       else {
           res.json({
               status: '200',
               msg: 'OK',
               result: {
                   count: doc.length,
                   list: doc
               }
           })
       }
   })
})


//添加购物车
router.post("/addCart", (req, res, next) => {
    //const userId = req.cookies.userId,
    const userId = req.session.user.userId,
          productId = req.body.productId
    const User = require('../models/users.js')

     User.findOne({ userId:userId })
         .then(doc => {
             if(doc) {
                let goodsItem = '';
                doc.cartList.forEach((item, idex) => {
                    if(item.productId == productId) {
                        goodsItem = item
                        item.productNum++ 
                    }
                })
                if(goodsItem) {            
                    doc.save()
                        .then(doc=> {
                            res.json({
                                status: '200',
                                msg: 'OK',
                                result: 'success'
                            })
                        })
                       .catch(err => {
                            res.json({
                                status: "404",
                                msg: err.message
                            })
                       })
                     
                }
                else {
                    Goods.findOne({productId:productId})
                         .then(goodsDoc => {
                              if(goodsDoc) {
                                goodsDoc.productNum = 1
                                goodsDoc.checked = 1
                                doc.cartList.push(goodsDoc)
                                
                                doc.save()
                                    .then(doc=> {
                                        res.json({
                                            status: '200',
                                            msg: 'OK',
                                            result: 'success'
                                        })
                                    })
                                    .catch(err => {
                                        res.json({
                                            status: "404",
                                            msg: err.message
                                        })
                                   })
                                
                            }
                         })
                         .catch(err => {
                            res.json({
                                status: "404",
                                msg: err.message
                            })
                         })
                }
            }
            else {
                res.json({
                    status: "404",
                    msg: err.message
                })
            }
         })
         .catch(err => {
              res.json({
                status: "404",
                msg: err.message
            })
         })
})



router.get('/priceDetail', (req, res, next) => {
    const productId = req.param('productId')
    Goods.findOne({productId: productId})
         .then(doc => {
             if(doc) {
                  res.json({
                    status: "200",
                    msg: 'OK',
                    result: doc
                })
             }
             else {
                 res.json({
                    status: "500",
                    msg: '查找失败'
                })
             }
         })
         .catch(err => {
              res.json({
                status: "404",
                msg: err.message
            })
         })
})


module.exports = router