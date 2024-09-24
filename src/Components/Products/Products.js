import React from 'react'
import './Products.css'
import iconCart from 'E:/Projects/CAPSTONE PROJECT/online-retail-store/src/assets/images/iconCart.png'
function Products(props) {
    const { id, name, price, image } = props.data;
    return (
        <div className='productCont'>
            <div className='productBox'>
                <img src={image} alt='err' className='productImg'></img>
                <h3 className='productName'>{name}</h3>
                <div className='productBuy'>
                    <span className='price'> &#8377;{price}</span>
                    <button>
                        <img src={iconCart} alt='err'></img>
                        Add to Cart
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Products