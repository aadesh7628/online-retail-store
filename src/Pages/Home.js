import React from 'react'
import { Link } from "react-router-dom";
import './Home.css'
import { CaretDoubleRight } from "phosphor-react";
import Products from '../Components/Products/Products'
import { randomMobileProducts } from '../Category/mobilesProduct'
import { randomChairProducts } from '../Category/chairsProduct'
import { randomaApplianceProducts } from '../Category/appliancesProduct'
import { randomGroceryProducts } from '../Category/groceriesProduct'
import { randomDressProducts } from '../Category/dressProduct'
function Home() {
    return (
        <div>
            <div className='category'>
                <h1>Mobiles</h1>
                <div>
                    {randomMobileProducts.map((product) =>
                        <Products data={product} />
                    )}
                    <Link to="/mobiles"><button className='viewMore'><CaretDoubleRight size={32} /></button></Link>
                </div>
            </div>
            <div className='category'>
                <h1>Chairs</h1>
                <div>
                    {randomChairProducts.map((product) =>
                        <Products data={product} />
                    )}
                    <Link to="/chairs"><button className='viewMore'><CaretDoubleRight size={32} /></button></Link>
                </div>
            </div>
            <div className='category'>
                <h1>Appliances</h1>
                <div>
                    {randomaApplianceProducts.map((product) =>
                        <Products data={product} />
                    )}
                    <Link to="/appliances"><button className='viewMore'><CaretDoubleRight size={32} /></button></Link>
                </div>
            </div>
            <div className='category'>
                <h1>Groceries</h1>
                <div>
                    {randomGroceryProducts.map((product) =>
                        <Products data={product} />
                    )}
                    <Link to="/grocery"><button className='viewMore'><CaretDoubleRight size={32} /></button></Link>
                </div>
            </div>
            <div className='category'>
                <h1>Dresses</h1>
                <div>
                    {randomDressProducts.map((product) =>
                        <Products data={product} />
                    )}
                    <Link to="/dress"><button className='viewMore'><CaretDoubleRight size={32} /></button></Link>
                </div>
            </div>
        </div>
    )
}

export default Home