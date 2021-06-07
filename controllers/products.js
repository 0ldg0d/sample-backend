const path =  require('path');
const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
};

exports.postAddProduct = (req, res) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  
  const product = new Product({
    title : title,
    price : price,
    imageUrl : imageUrl
  });

  product.save().then(result => {
    console.log("Created Product");
  })
  .catch(err => {
    console.log(err);
  });

};

exports.getProducts = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
};