const mongoose = require('mongoose')
const Schema =  mongoose.Schema
mongoose.Promise = global.Promise

const productSchema = new Schema({
    "productId": String,
    "productName": String,
    "salePrice": Number,
    "productImage": String,
    "checked": Number,
    "productNum": Number
})


module.exports = mongoose.model('Good', productSchema)
