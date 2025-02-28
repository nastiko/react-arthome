import {createContext, useEffect, useState} from "react";

export const ContextCart = createContext();

export default function CartContext({ children }) {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const [cartItems, setCartItems] = useState(storedItems);

    const onAddToCart = (obj) => {
        const existingCartItems = cartItems.find((item) => item.id === obj.id);

        if(existingCartItems) {
            setCartItems(
                cartItems.map(item => {
                    return item.id === obj.id ?
                        {...existingCartItems,
                            quantity: existingCartItems.quantity + 1,
                        }
                        : item;
                })
            );
        } else {
            setCartItems(prev => [...prev, {...obj, quantity: 1}]);
        }
    }

    const totalItemsBasket = (obj) => {
        let totalItemsBasket = 0;

        if(cartItems?.length > 0) {
            cartItems.map((item) => totalItemsBasket += item.quantity);
        } else {
            obj.quantity = 0;
        }

        return totalItemsBasket;
    }

   /* const calcPriceByQnt = () => {
        let totalPriceByQnt = 0;
        if(obj.quantity > 1) {
            totalPriceByQnt = obj.sale_price ? obj.quantity * obj.sale_price : obj.quantity * obj.regular_price;
        } else {
            totalPriceByQnt = obj.sale_price ? obj.sale_price : obj.regular_price;
        }
        return totalPriceByQnt;
    }*/

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <ContextCart.Provider
            value={{
                cartItems,
                setCartItems,
                onAddToCart,
                totalItemsBasket,
            }}>
            { children }
        </ContextCart.Provider>
    )
}