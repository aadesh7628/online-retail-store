import React from 'react'
import './Home.css'
import Products from '../Components/Products/Products'
import { appliancesProduct } from '../Category/appliancesProduct'
function Appliances() {
    return (
        <div>
            <div className='category'>
                <h1>Appliances</h1>
                <div>
                    {appliancesProduct.map((product) =>
                        <Products data={product} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Appliances;