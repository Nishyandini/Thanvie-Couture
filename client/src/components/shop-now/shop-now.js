import React, { useEffect, useState } from 'react';
import './shop-now.css';
import '../../helper/helper.css';

const ShopNow = () => {

    const [products, setProducts] = useState();
    const [wishList, setWishList] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const apiRequestOptions = () => {
        let token = localStorage.getItem("token")
        if (token != null) {
            token = JSON.parse(token).token
            console.log(token)
        }

        const requestOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
        };
        return requestOptions;
    }

    const addorRemoveItem = (productId, isWishList) => {

        let productdetails = {
            "productId": productId
        }
        let requestOptions = apiRequestOptions()

        requestOptions.method = 'POST'
        requestOptions.body = JSON.stringify(productdetails)

        let url = "http://localhost:8000/";
        if (isWishList) {
            url = wishList.includes(productId) ? url.concat("removeFromWishList") : url.concat("addtoWishList");

            fetch(url, requestOptions)
                .then((response) => response.json())
                .then((data) => setWishList(data.wishList.wish_list))
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
        else {
            url = cartItems.includes(productId) ? url.concat("removeFromCartItems") : url.concat("addToCartItems");

            fetch(url, requestOptions)
                .then((response) => response.json())
                .then((data) => setCartItems(data.cartItems.cart_items))
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }

    useEffect(() => {
        console.log("use effect")
        fetch('http://localhost:8000/getProductDetails')
            .then((response) => response.json())
            .then((data) => setProducts(data.productArray))
            .catch((error) => {
                console.error('Error:', error);
            });

        let requestOptions = apiRequestOptions()
        requestOptions.method = 'GET'

        fetch('http://localhost:8000/getUserWishList', requestOptions)
            .then((response) => response.json())
            .then((data) => setWishList(data.wishList.wish_list))
            .catch((error) => {
                console.error('Error:', error);
            });

        fetch('http://localhost:8000/getUserCartItems', requestOptions)
            .then((response) => response.json())
            .then((data) => setCartItems(data.cartItems.cart_items))
            .catch((error) => {
                console.error('Error:', error);
            });


        console.log("Wish List", wishList)
        console.log("cart", cartItems)


    }, []);

    return (
        <div className="page-layout">
            <h1 className="collection-title"> Designer Wear </h1>
            <div className="collections-group">
                {
                    products && products.map((val, index) => (
                        <div key={index} className="collection">
                            <img src={val.mainImageUrl} className="image" alt="designer sarees" />
                            <div className="image-footer">
                                <i
                                    style={wishList.includes(val._id) ? { color: "crimson" } : {}}
                                    className="fa fa-heart fa-2x heart-icon"
                                    onClick={() => { addorRemoveItem(val._id, true) }}>
                                </i>
                                <i className="fa fa-inr fa-2x rate" aria-hidden="true">{val.price}</i>
                                <i
                                    style={cartItems.includes(val._id) ? { color: "crimson" } : {}}
                                    className="fa fa-shopping-cart fa-2x cart-icon"
                                    onClick={() => { addorRemoveItem(val._id, false) }}>
                                </i>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default ShopNow;