import d1 from '../assets/images/dresses/gown.png'
import d2 from '../assets/images/dresses/lehenga.png'
import d3 from '../assets/images/dresses/pants.png'
import d4 from '../assets/images/dresses/tubetop.png'
import d5 from '../assets/images/dresses/tmen1.png'
import d6 from '../assets/images/dresses/tmen2.png'
import d7 from '../assets/images/dresses/t3.png'
import d8 from '../assets/images/dresses/t4.png'

export const dressProduct = [
    {
        id: 33,
        name: 'Gown',
        price: 4500,
        image: d1,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 34,
        name: 'Lehenga',
        price: 45000,
        image: d2,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 35,
        name: 'Women-Pants',
        price: 500,
        image: d3,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 36,
        name: 'Tubetop',
        price: 5000,
        image: d4,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 37,
        name: 'Men-casual',
        price: 400,
        image: d5,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 38,
        name: 'Casual-Tshirt',
        price: 677,
        image: d6,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 39,
        name: 'Unisex-tshirt',
        price: 499,
        image: d7,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 40,
        name: 'Colorful-tees',
        price: 599,
        image: d8,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
];

function getRandomProducts(products, count) {
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

export const randomDressProducts = getRandomProducts(dressProduct, 4);