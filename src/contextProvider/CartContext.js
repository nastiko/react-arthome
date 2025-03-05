import {createContext, useEffect, useState} from "react";

export const ContextCart = createContext();

export default function CartContext({children}) {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const [cartItems, setCartItems] = useState(storedItems);
    const [disabledBtn, setDisabledBtn] = useState(false);
    const [quantity, setQuantity] = useState('');

    const onAddToCart = (obj) => {
        const existingCartItems = cartItems.find((item) => item.id === obj.id);

        if (existingCartItems) {
            setCartItems(
                cartItems.map(item => {
                    if (item.id === obj.id) {
                        item.quantity = quantity + 1;
                        item.calcPriceByQnt = getItemTotal(item);
                    }
                    return item;
                })
            );
        } else {
            setCartItems(prev => [...prev,
                {
                    ...obj,
                    quantity: 1,
                    calcPriceByQnt: obj.sale_price ? Number(obj.sale_price) : Number(obj.regular_price)
                }
            ]);
        }
    }

    const getItemTotal = (item) => {
        return item.quantity * Number(item.sale_price || item.regular_price);
    }

    const handleIncreaseQty = (id) => {
        const existingCartItems = cartItems.find((item) => item.id === id);

        if (existingCartItems) {
            setCartItems(
                cartItems.map(item => {
                    if (item.id === id) {
                        item.quantity += item.stock_quantity === item.quantity ? 0 : 1;
                        item.calcPriceByQnt = getItemTotal(item);
                    }
                    return item;
                })
            );
        }
    }

    const handleDecreaseQty = (id) => {
        const existingCartItems = cartItems.find((item) => item.id === id);

        if (existingCartItems.quantity === 1) {
            setCartItems(cartItems.filter((item) => item.id !== id));
        } else {
            setCartItems(cartItems.map(item => {
                if(item.id === id) {
                    item.quantity -= item.quantity === 1 ? 0 : 1;
                    item.calcPriceByQnt = getItemTotal(item);
                }
                return item;
            }))
        }
    }

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
                disabledBtn,
                setDisabledBtn,
                totalItemsInBasket,
                calcSubTotal,
                removeCartItem
            }}>
            {children}
        </ContextCart.Provider>
    )
}