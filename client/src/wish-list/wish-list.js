import React, { useState } from 'react';
import './wish-list.css';
import '../helper/helper.css';

import sare from '../images/saree photoshoot/1e66783b674918d3047078e4a65837e0.jpg';


const WishList = () => {
    return (
        <div className="page-layout item-page">
            <h2 className="page-title">Wish List</h2>
            <div className="flex-items">
                <div className="item box-shadow">
                    <img src={sare} className="item-img image box-shadow"></img>
                    <div className="product-details">
                        <h3 className="product-name">Product Name Product Name Product N Product Name Product Nam Product N Product Name Product Nam Product NameameProduct Name </h3>
                        <i className="fa fa-inr fa-lg" aria-hidden="true">3500</i>
                        <h3 className="item-availability">Available</h3>
                    </div>
                    <h3 className="cart-btn box-shadow">Add to cart</h3>
                    {/* <h3 className="delete-btn box-shadow">Delete</h3> */}
                    {/* <i class="fa fa-cart-plus fa-lg add-to-cart " aria-hidden="true"></i> */}
                    <i class="fa fa-trash fa-lg delete-btn" aria-hidden="true"></i>
                </div>
            </div>
            {/* <i class="fa fa-trash fa-lg add-to-cart" aria-hidden="true"></i> */}

        </div>
    )
}

export default WishList;