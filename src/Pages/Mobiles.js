import React from 'react'
import './Home.css'
import Products from '../Components/Products/Products'
import { mobilesProduct } from '../Category/mobilesProduct'
function Mobiles() {
    return (
        <div>
            <div className='category'>
                <h1>Mobiles</h1>
                <div>
                    {mobilesProduct.map((product) =>
                        <Products data={product} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Mobiles;