const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const productSchema = new Schema({
    "productId": String,
    "productName": String,
    "salePrice": Number,
    "productImage": String,
    "checked": Number,
    "productNum": Number
})


module.exports = mongoose.model('Good', productSchema)
