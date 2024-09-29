import React, { useContext } from "react";
import { ShopContext } from '../../context/shop-context';
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import {chairsProduct} from '../../Category/chairsProduct'
import {mobilesProduct} from '../../Category/mobilesProduct'
import { appliancesProduct } from '../../Category/appliancesProduct'
import { groceriesProduct } from '../../Category/groceriesProduct'
import { dressProduct } from '../../Category/dressProduct'
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, placeOrder } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {([...chairsProduct, ...mobilesProduct, ...appliancesProduct, ...groceriesProduct, ...dressProduct]).map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null;
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: &#8377; {totalAmount.toLocaleString('en-IN')} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          {/* <button>Checkout</button> */}
          <button onClick={() => {
            placeOrder();
            navigate("/orders");
          }}>Checkout</button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};