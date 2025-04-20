var mongoose = require('mongoose');
let cartSchema = new mongoose.Schema({
    username:String,
    id:String,
    name:String,
    price:Number,
    quantity:Number,
    imageUrl:String
})
const CartProduct = mongoose.model("carts",cartSchema);
module.exports = {CartProduct}