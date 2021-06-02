const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

router.get('/products');
router.get('/cart');

module.exports = router;

    