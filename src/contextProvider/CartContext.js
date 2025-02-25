import {createContext, useEffect, useState} from "react";

export const ContextCart = createContext();

export default function CartContext({ children }) {

    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const [cartItems, setCartItems] = useState(storedItems);
    const [isQty, setIsQty] = useState(1);


    const onAddToCart = (obj) => {
        const existingCartItems = cartItems.some((item) => item.id === obj.id);

        if(existingCartItems) {
            obj.quantity = setIsQty(prev => prev + 1);
            setCartItems(prev => [...prev]);
        } else {
            setCartItems(prev => [...prev, obj]);
        }


        console.log(obj);
    }

    //qty
    /*const increaseItem = () => {
        setIsQty(prev => prev === stock_quantity ? stock_quantity : prev + 1);
    }

    const decreaseItem = () => {
        setIsQty(prev => prev <= 1 ? 1 : prev - 1);
    }*/

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <ContextCart.Provider
            value={{
                cartItems,
                setCartItems,
                isQty,
                setIsQty,
                onAddToCart
            }}>
            { children }
        </ContextCart.Provider>
    )
}