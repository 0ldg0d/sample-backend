const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/add-product', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
}); 

router.post('/add-prodcut', (req, res) => {
    res.redirect('/');
})

router.get('/', (req, res) => {

    res.redirect('/');
    res.redirect('');
});
module.exports = router;