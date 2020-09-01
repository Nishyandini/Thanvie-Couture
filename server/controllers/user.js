const User = require('../models/user');
const { generateToken } = require('../auth');
const { use } = require('../routes/user');

exports.loginUser = (req, res) => {
    console.log("User Body:", req.body)
    let responseUser = {};
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }

        if (user != null && user.length != 0) {
            let token = generateToken({ "id": user.id, "email": user.email })
            res.json({
                token
            })
        }
        else {
            const user = new User(req.body)
            user.save((err, user) => {
                if (err) {
                    return res.status(400).json({
                        error: err
                    })
                }
                let token = generateToken({ "id": user.id, "email": user.email })
                res.json({
                    token
                })
            })
        }
    });

}

exports.getUserWishList = async (req, res) => {
    try {
        const user = await findById(req.jwt.id);
        let wishList = {
            wish_list: user.wish_list_items
        }
        res.json({
            wishList
        })
    } catch (error) {
        console.log(error)
    }
}

exports.getUserCartItems = async (req, res) => {
    try {
        const user = await findById(req.jwt.id);
        let cartItems = {
            cart_items: user.cart_items
        }
        res.json({
            cartItems
        })
    } catch (error) {
        console.log(error)
    }
}

exports.addtoWishList = async (req, res) => {
    try {
        
        const user = await findByIdAndUpdate(req.jwt.id,  true, { "wish_list_items": req.body.productId, } );
        let wishList = {
            wish_list: user.wish_list_items
        }
        res.json({
            wishList
        })
    } catch (error) {
        console.log(error)
    }
}

exports.removeFromWishList = async (req, res) => {
    try {
        const user = await findByIdAndUpdate(req.jwt.id,false, { "wish_list_items": req.body.productId, });
        let wishList = {
            wish_list: user.wish_list_items
        }
        res.json({
            wishList
        })
    } catch (error) {
        console.log(error)
    }
}

exports.addToCartItems = async (req, res) => {
    try {
        const user = await findByIdAndUpdate(req.jwt.id,true, { "cart_items": req.body.productId, });
        let cartItems = {
            cart_items: user.cart_items
        }
        res.json({
            cartItems
        })
    } catch (error) {
        console.log(error)
    }
}

exports.removeFromCartItems = async (req, res) => {
    try {
        const user = await findByIdAndUpdate(req.jwt.id,false, { "cart_items": req.body.productId, });
        let cartItems = {
            cart_items: user.cart_items
        }
        res.json({
            cartItems
        })
    } catch (error) {
        console.log(error)
    }
}

async function findById(id) {
    return new Promise((resolve, reject) => {
        User.findById(id, function (err, user) {
            if (err) {
                reject(err)
            }
            else {
                resolve(user)
            }
        });
    })
}

async function findByIdAndUpdate(userId, toAdd, fieldJson) {
    return new Promise((resolve, reject) => {
        let queryField = toAdd ? "$addToSet" : "$pull";
        const data = {}
        data[queryField] = fieldJson
        User.findByIdAndUpdate(userId, data, { new: true },
            function (err, user) {
                if (err) {
                    reject(err)
                }
                else {

                    resolve(user)
                }
            });
    })
}
