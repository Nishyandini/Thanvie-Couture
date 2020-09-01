const Product = require('../models/product')

exports.saveProductDetails = (req, res) => {
    console.log("Product Body :" , req.body)
    const product = new Product(req.body)
    product.save((err, productDetails) => {
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        res.json({
            productDetails
        })
    })  
}

exports.getProductDetails = (req, res) => {
    Product.find({}, (err, productArray) => {
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        res.json({
            productArray
        })
    })
}