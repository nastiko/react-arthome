import {Outlet} from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import {useEffect, useState} from "react";
import Context from "../Context";

export default function RootLayout() {
    const [isOpenBasket, setIsOpenBasket] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const storedFavouriteItems = JSON.parse(localStorage.getItem("favoriteItems")) || [];

    const [cartItems, setCartItems] = useState(storedItems);
    const [favouriteItems, setFavouriteItems] = useState(storedFavouriteItems);
    const [isFavouriteIcon, setIsFavouriteIcon] = useState(false);


    const onAddToCart = (obj) => {
        setCartItems(prev => [...prev, obj]);
    }

    const ifExists = (obj) => {
        if (favouriteItems.find((item) => item.id === obj.id)) {
            setFavouriteItems(prev => prev.filter((item) => item.id !== obj.id));
            setIsFavouriteIcon(false);
        } else {
            setFavouriteItems(prev => [...prev, obj]);
            setIsFavouriteIcon(true);
        }
    }

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem("favoriteItems", JSON.stringify(favouriteItems));
    }, [favouriteItems]);

    const value = {
        cartItems,
        setCartItems,
        onAddToCart,
        favouriteItems,
        setFavouriteItems,
        isFavouriteIcon,
        ifExists,
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
                        <Header/>
                        <main>
                            <Outlet/>
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