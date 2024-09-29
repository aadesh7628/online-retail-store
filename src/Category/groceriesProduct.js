import g1 from '../assets/images/groceries/toordal.png'
import g2 from '../assets/images/groceries/greengram.png'
import g3 from '../assets/images/groceries/minappappu.jpg'
import g4 from '../assets/images/groceries/besan.jpg'
import g5 from '../assets/images/groceries/oil.jpg'
import g6 from '../assets/images/groceries/Main-onion.jpg'
import g7 from '../assets/images/groceries/chilli.png'
import g8 from '../assets/images/groceries/garlic.jpg'

export const groceriesProduct = [
    {
        id: 25,
        name: 'Toor Dal',
        price: 50,
        image: g1,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 26,
        name: 'Green gram',
        price: 100,
        image: g2,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 27,
        name: 'Mung bean',
        price: 200,
        image: g3,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 28,
        name: 'Besan',
        price: 150,
        image: g4,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 29,
        name: 'Olive Oil',
        price: 400,
        image: g5,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 30,
        name: 'Onions',
        price: 200,
        image: g6,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 31,
        name: 'Chilli',
        price: 100,
        image: g7,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 32,
        name: 'Garlic',
        price: 200,
        image: g8,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    }
];

function getRandomProducts(products, count) {
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

export const randomGroceryProducts = getRandomProducts(groceriesProduct, 4);
