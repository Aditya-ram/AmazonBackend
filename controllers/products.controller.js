const { CartProduct } = require("../models/cart.model");
const { HomeAppliances } = require("../models/homeappliances.model");
const { Product } = require("../models/products.model");

function getProducts(req,res){
    Product.find({})
    .then((response)=>{
        res.json({Message:"Products are here", response:response});
    })
}

function getAppliances(req,res){
    HomeAppliances.find({})
    .then((response)=>{
        console.log(response);
        res.json({Message:"Home appliances are here", response:response});
    })
}

function sendCartProducts(req,res){
    console.log(req.body);
    CartProduct.create(req.body)
    .then(()=>{
        console.log("Cart item is created");
        res.json({Message:"Home appliances are here"});
    })
}
module.exports = {getProducts,getAppliances, sendCartProducts}