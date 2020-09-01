import React, { useState } from 'react';
import '../menu-navigation/menu-navigation.css';
import { Link } from 'react-router-dom';

const MenuNavigation = () => {

    const [displayMenu, setDisplayMenu] = useState(false);

    const displayMenuOptions = () => {
        setDisplayMenu(true);
    }

    const closeMenuOptions = () => {
        setDisplayMenu(false);
    }

    return (
        <div className="menu-section">
            <Link to='/about-us'>
                <div className="store-name montreuil-font z-index">Thanvie Couture</div>
            </Link>
            {
                displayMenu ?
                    < div className="overlay z-index">
                        <i className="fa fa-times fa-2x" onClick={closeMenuOptions}></i>
                        <div className="overlay-text" onClick={closeMenuOptions}>
                            <Link to='/'>
                                <h3> Home </h3>
                            </Link>
                            <Link to='/Login'>
                                <h3> Login / Sign Up </h3>
                            </Link>
                            <Link to='/shop-now'>
                                <h3> Shop Now </h3>
                            </Link>
                            <Link to='/about-us'>
                                <h3> About Us </h3>
                            </Link>
                            <Link to='/contact-us'>
                                <h3> Contact </h3>
                            </Link>
                        </div>
                    </div >
                    :
                    <div className="menu-bar " onClick={displayMenuOptions}>
                        <div className="bar-top bar-property scale-from-left-animation z-index"></div>
                        <div className="bar-middle bar-property z-index"></div>
                        <div className="bar-bottom bar-property scale-from-left-animation z-index"></div>
                    </div>
            }
            <div>
                <Link to='/shop-now'>
                    <i className="fa fa-shopping-cart menu-cart-icon"></i>
                </Link>
                <i className="fa fa-heart menu-heart-icon"></i>
            </div>
        </div>
    )
}

export default MenuNavigation;