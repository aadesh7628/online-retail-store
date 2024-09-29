import tv from '../assets/images/appliances/tvv.png'
import fridge from '../assets/images/appliances/fridge.png'
import oven from '../assets/images/appliances/oven.png'
import stove from '../assets/images/appliances/stove.png'
import fan from '../assets/images/appliances/Fan-2.png'
import bulb from '../assets/images/appliances/bulb.png'
import airfryer from '../assets/images/appliances/airfryerrr.png'
import ac from '../assets/images/appliances/ac.png'

export const appliancesProduct = [
    {
        id: 17,
        name: 'TV',
        price: 115000,
        image: tv,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 18,
        name: 'Fridge',
        price: 75000,
        image: fridge,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 19,
        name: 'Oven',
        price: 50000,
        image: oven,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 20,
        name: 'Stove',
        price: 35000,
        image: stove,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 21,
        name: 'Fans',
        price: 5000,
        image: fan,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 22,
        name: 'Light-Bulb',
        price: 50,
        image: bulb,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 23,
        name: 'Fryer',
        price: 19000,
        image: airfryer,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 24,
        name: 'Air-Conditioner',
        price: 78000,
        image: ac,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
];

function getRandomProducts(products, count) {
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

export const randomaApplianceProducts = getRandomProducts(appliancesProduct, 4);
