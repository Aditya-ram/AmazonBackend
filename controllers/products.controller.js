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

function getFromCart(req,res){
    console.log(req.body);
    CartProduct.find({})
    .then((response)=>{
        console.log("Cart items are here");
        res.json({Message:"Cart items are here", response:response});
    })
}
function removeFromCart(req,res){
    console.log("req body is", req.body);
    CartProduct.deleteOne({id:req.body.id})
    .then(()=>{
        console.log("Cart item is removed");
        res.json({Message:"Item is removed"});
    })
}

function getSignupData(req,res){
    console.log(req.body);
    CartProduct.create(req.body)
    .then(()=>{
        console.log("Cart item is created");
        res.json({Message:"Home appliances are here"});
    })
}



module.exports = {getProducts,getAppliances, sendCartProducts,getFromCart,removeFromCart}