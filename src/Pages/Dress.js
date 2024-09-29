import React from 'react'
import './Home.css'
import Products from '../Components/Products/Products'
import { dressProduct } from '../Category/dressProduct'
function Dresses() {
    return (
        <div>
            <div className='category'>
                <h1>Dresses</h1>
                <div>
                    {dressProduct.map((product) =>
                        <Products data={product} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Dresses;