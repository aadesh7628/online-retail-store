import React from 'react'
import './Home.css'
import Products from '../Components/Products/Products'
import { groceriesProduct } from '../Category/groceriesProduct'
function Grocery() {
    return (
        <div>
            <div className='category'>
                <h1>Grocery</h1>
                <div>
                    {groceriesProduct.map((product) =>
                        <Products data={product} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Grocery;