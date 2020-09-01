const express = require('express')
const router = express.Router()

const {loginUser, getUserWishList, getUserCartItems, addtoWishList, removeFromWishList, addToCartItems, removeFromCartItems} = require('../controllers/user');
const { isAuthenticated } = require('../auth');

router.post('/loginUser', loginUser);
router.get('/getUserWishList', isAuthenticated, getUserWishList);
router.get('/getUserCartItems', isAuthenticated, getUserCartItems);
router.post('/addtoWishList' , isAuthenticated, addtoWishList);
router.post('/removeFromWishList' , isAuthenticated, removeFromWishList);
router.post('/addToCartItems' , isAuthenticated, addToCartItems);
router.post('/removeFromCartItems' , isAuthenticated, removeFromCartItems)

module.exports = router;