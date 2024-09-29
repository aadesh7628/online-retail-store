import imgCat2_1 from '../assets/images/category2/1.png'
import imgCat2_2 from '../assets/images/category2/2.png'
import imgCat2_3 from '../assets/images/category2/3.png'
import imgCat2_4 from '../assets/images/category2/4.png'
import imgCat2_5 from '../assets/images/category2/5.png'
import imgCat2_6 from '../assets/images/category2/6.png'
import imgCat2_7 from '../assets/images/category2/7.png'
import imgCat2_8 from '../assets/images/category2/8.png'


export const mobilesProduct = [
    {
        id: 9,
        name: 'Samsung Galaxy Z Fold6 5G AI Smartphone',
        price: 200998, 
        image: imgCat2_1,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 10,
        name: 'Samsung Galaxy S24 Ultra 5G AI Smartphone',
        price: 131999, 
        image: imgCat2_2,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 11,
        name: 'Samsung Galaxy S23 Ultra 5G AI Smartphone',
        price: 84999, 
        image: imgCat2_3,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 12,
        name: 'Pixl 9 Pro XL 5G',
        price: 124999, 
        image: imgCat2_4,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 13,
        name: 'Apple iPhone 16',
        price: 79900, 
        image: imgCat2_5,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 14,
        name: 'Apple iPhone 15',
        price: 65900, 
        image: imgCat2_6,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 15,
        name: 'Apple iPhone 15 Pro',
        price: 124200, 
        image: imgCat2_7,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
    {
        id: 16,
        name: 'Motorola razr 50 ',
        price: 64999, 
        image: imgCat2_8,
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.'
    },
];

function getRandomProducts(products, count) {
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

export const randomMobileProducts = getRandomProducts(mobilesProduct, 4);