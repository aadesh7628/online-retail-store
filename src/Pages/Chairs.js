import React from 'react'
import './Home.css'
import Products from '../Components/Products/Products'
import { chairsProduct } from '../Category/chairsProduct'
function Chairs() {
    return (
        <div>
            <div className='category'>
                <h1>Chairs</h1>
                <div>
                    {chairsProduct.map((product) =>
                        <Products data={product} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Chairs;