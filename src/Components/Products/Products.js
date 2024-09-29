import React, { useContext } from 'react'
import './Products.css'
import iconCart from '../../assets/images/iconCart.png'
import { ShopContext } from '../../context/shop-context'
function Products(props) {
    const { id, name, price, image } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id];
    return (
        <div className='productCont'>
            <div className='productBox'>
                <img src={image} alt='err' className='productImg'></img>
                <h3 className='productName'>{name}</h3>
                <div className='productBuy'>
                    <span className='price'> &#8377; {price.toLocaleString('en-IN')}</span>
                    <button className='carticon' onClick={() => addToCart(id)}>
                        <img src={iconCart} alt='err'></img>
                        Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Products