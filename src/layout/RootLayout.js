import {Outlet} from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import {useState} from "react";

export default function RootLayout() {
    const [isOpenBasket, setIsOpenBasket] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const onAddToCart = (obj) => {
        setCartItems(prev => [...prev, obj]);
    }

    return (
        <>
            <div className={`flex h-screen flex-col justify-between`}>
                <div>
                    <Header isOpenBasket={isOpenBasket}
                            setIsOpenBasket={setIsOpenBasket}
                            isOpenMenu={isOpenMenu}
                            setIsOpenMenu={setIsOpenMenu}
                            cartItems={cartItems}
                    />
                    <main>
                        <Outlet context={{onAddToCart}}/>
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
        </>
    )
}