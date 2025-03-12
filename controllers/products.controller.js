const { Product } = require("../models/products.model");

function getProducts(req,res){
    Product.find({})
    .then((response)=>{
        res.json({Message:"Products are here", response:response});
    })
}
module.exports = {getProducts}