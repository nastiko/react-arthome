import {Outlet} from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import {useEffect, useState} from "react";
import Context from "../Context";

export default function RootLayout() {
    const [isOpenBasket, setIsOpenBasket] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const [cartItems, setCartItems] = useState(storedItems);
    //const [removeCartItems, setRemoveCartItems] = useState(storedItems);

    console.log('storedItems', storedItems);


    const onAddToCart = (obj) => {
        setCartItems(prev => [...prev, obj]);
    }

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

   /* const onRemoveCartItem = (obj) => {
        if(cartItems.length > 0) {
            console.log('obj', obj);
            localStorage.removeItem("cartItems", JSON.stringify(obj));
            //console.log(cartItems);
        }
    }*/

    const value = {
        cartItems,
        onAddToCart,
        //removeCartItems,
        //onRemoveCartItem,
        isOpenBasket,
        setIsOpenBasket,
        isOpenMenu,
        setIsOpenMenu
    }

    return (
        <>
            <Context.Provider value={value}>
                <div className={`flex h-screen flex-col justify-between`}>
                    <div>
                        <Header />
                        <main>
                            <Outlet />
                        </main>
                    </div>
                    <Footer
                        link1="Term & Condition"
                        link2="Policy"
                        link3="Contact Us"
                        author="© 2024 Anastasia Hrynkevich."
                        text="Follow us on social"
                    />
                </div>
            </Context.Provider>
        </>
    )
}