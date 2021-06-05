const path =  require('path');
const products = [];

exports.getAddProduct = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
};

exports.postAddProduct = (req, res) => {
    products.push({title: req.body.title});
    res.redirect('/');
};

exports.getProducts = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
};