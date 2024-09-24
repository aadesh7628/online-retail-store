import React from 'react'
import './Home.css'
import Products from '../Components/Products/Products'
import { category1 } from '../Category/category1'
import { category2 } from '../Category/category2'
function Home() {
    return (
        <div>
            <div className='category'>
                <h1>Mobiles</h1>
                <div>
                    {category2.map((product) =>
                        <Products data={product} />
                    )}
                </div>
            </div>
            <div className='category'>
                <h1>Chairs</h1>
                <div>
                    {category1.map((product) =>
                        <Products data={product} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home