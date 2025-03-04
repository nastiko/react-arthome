import {createContext, useEffect, useState} from "react";

export const ContextCart = createContext();

export default function CartContext({children}) {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const [cartItems, setCartItems] = useState(storedItems);

    const onAddToCart = (obj) => {
        const existingCartItems = cartItems.find((item) => item.id === obj.id);

        if (existingCartItems) {
            setCartItems(
                cartItems.map(item => {
                    return item.id === obj.id ?
                        {
                            ...item,
                            quantity: item.quantity + 1,
                            calcPriceByQnt: getItemTotal(item),
                        }
                        : item;
                })
            );
        } else {
            setCartItems(prev => [...prev,
                {
                    ...obj,
                    quantity: 1,
                    calcPriceByQnt: obj.sale_price ? Number(obj.sale_price) : Number(obj.regular_price)
                }]
            );
        }
    }

    const getItemTotal = (item) => {
        return item.sale_price ? (item.quantity + 1) * Number(item.sale_price) : (item.quantity + 1) * Number(item.regular_price);
    };

    const handleIncreaseQty = (id) => {
        const existingCartItems = cartItems.filter((item) => item.id === id);
        if (existingCartItems) {
            setCartItems(cartItems.map(item =>
                item.id === id ?
                    {
                        ...item,
                        quantity: item.quantity + 1,
                        calcPriceByQnt: getItemTotal(item),
                    }
                    : item
            ));
        }
    }

    const handleDecreaseQty = (id) => {
        const existingCartItems = cartItems.find((item) => item.id === id);

        if (existingCartItems.quantity === 1) {
            setCartItems(
                cartItems.filter((item) => item.id !== id)
            );
        } else {
            setCartItems(
                cartItems.map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            quantity: item.quantity - 1,
                            calcPriceByQnt: item.sale_price ? (item.quantity - 1) * Number(item.sale_price) : (item.quantity - 1) * Number(item.regular_price),

                        }
                        : item
                )
            );
        }
    }

    /*const checkStockQty = () => {

    }*/

    const totalItemsInBasket = (obj) => {
        let totalItemsBasket = 0;

        if (cartItems?.length > 0) {
            cartItems.map((item) => totalItemsBasket += item.quantity);
        } else {
            obj.quantity = 0;
        }

        return totalItemsBasket;
    }

    const calcSubTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.calcPriceByQnt, 0);
    }

    const removeCartItem = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    }

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);


    return (
        <ContextCart.Provider
            value={{
                cartItems,
                setCartItems,
                onAddToCart,
                handleIncreaseQty,
                handleDecreaseQty,
                totalItemsInBasket,
                calcSubTotal,
                removeCartItem
            }}>
            {children}
        </ContextCart.Provider>
    )
}