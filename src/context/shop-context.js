import { createContext, useState } from "react";
import { chairsProduct } from "../Category/chairsProduct";
import { mobilesProduct } from "../Category/mobilesProduct";
import { appliancesProduct } from '../Category/appliancesProduct'
import { groceriesProduct } from '../Category/groceriesProduct'
import { dressProduct } from '../Category/dressProduct'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    const products = [...chairsProduct, ...mobilesProduct, ...appliancesProduct, ...groceriesProduct, ...dressProduct];
    products.forEach((product) => {
        cart[product.id] = 0;
    });
    return cart;
};

// Function to generate a random unique code of specified length
const generateUniqueCode = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [orders, setOrders] = useState([]);

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        const allProducts = [...chairsProduct, ...mobilesProduct, ...appliancesProduct, ...groceriesProduct, ...dressProduct];
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = allProducts.find(
                    (product) => product.id === Number(item)
                );
                if (itemInfo) {
                    totalAmount += cartItems[item] * itemInfo.price;
                }
            }
        }
        return totalAmount;
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    const placeOrder = () => {
        const totalAmount = getTotalCartAmount();
        const allProducts = [...chairsProduct, ...mobilesProduct, ...appliancesProduct, ...groceriesProduct, ...dressProduct];

        const items = Object.keys(cartItems)
            .filter((itemId) => cartItems[itemId] > 0)
            .map((itemId) => {
                const product = allProducts.find((product) => product.id === Number(itemId));
                return {
                    id: product.id,
                    name: product.name,
                    quantity: cartItems[itemId],
                };
            });

        const newOrder = {
            invoiceCode: generateUniqueCode(5), // Generate a unique 5-character code
            items: items,
            totalAmount: totalAmount,
        };

        setOrders([...orders, newOrder]);

        // Reset cart
        for (const item in cartItems) {
            updateCartItemCount(0, item);
        }
    };

    const contextValue = {
        cartItems,
        addToCart,
        updateCartItemCount,
        removeFromCart,
        getTotalCartAmount,
        placeOrder,
        orders,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
