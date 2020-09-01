const express = require('express')
const router = express.Router()

const {saveProductDetails, getProductDetails} = require('../controllers/product')

router.post('/saveProduct', saveProductDetails);
router.get('/getProductDetails', getProductDetails);

module.exports = router;