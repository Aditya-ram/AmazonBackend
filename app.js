var express = require("express");
const { dbConfig } = require("./configurations/dbConfig");
var app = express();
var dotenv = require("dotenv");
var cors = require('cors');
const { Product } = require("./models/products.model");
const { getProducts } = require("./controllers/products.controller");
var {productsRouter} = require("./routers/router.js");
var PORT = process.env.PORT;
app.use(cors());

dotenv.config();
app.use("/products",productsRouter);

app.get('/',(req,res)=>{
    res.json({message:"You are in backend"})
})


app.listen(PORT, () => {
  dbConfig();
  console.log(`The server is listening at ${PORT}`);
});
