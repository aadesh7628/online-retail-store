import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { UserCircle } from "phosphor-react";
import { ShopContext } from '../../context/shop-context'; 
import "./Nav.css";

export const Navbar = () => {
    const { cartItems } = useContext(ShopContext);
    const uniqueItemsCount = Object.values(cartItems).filter(item => item > 0).length;

    return (
        <div className="navbar">
            <div className="links">
                <Link to="/"> <p className="text align">Home</p> </Link>
                <div className="dropdown">
                    <button className="dropbtn">Categories
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/mobiles">Mobiles</Link>
                        <Link to="/chairs">Chairs</Link>
                        <Link to="/appliances">Appliances</Link>
                        <Link to="/dress">Dress</Link>
                        <Link to="/grocery">Grocery</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn"><UserCircle size={35} /></button>
                    <div className="dropdown-content">
                        <Link to="/login">Login</Link>
                        <Link to="/user/accountsettings">Profile</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                </div>
                <Link to="/cart">
                    <div className="cart-icon-container">
                        <p className="text"><ShoppingCart size={32} /></p>
                        {uniqueItemsCount > 0 && <span className="item-count">{uniqueItemsCount}</span>}
                    </div>
                </Link>
            </div>
        </div>
    );
};
