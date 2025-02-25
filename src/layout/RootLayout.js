import {Outlet} from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import CartContext from "../contextProvider/CartContext";
import FavouritesCartContext from "../contextProvider/FavouritesCartContext";
import BasketMenuContext from "../contextProvider/BasketMenuContext";

export default function RootLayout() {

    return (
        <>
            <BasketMenuContext>
                <CartContext>
                    <FavouritesCartContext>
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
                    </FavouritesCartContext>
                </CartContext>
            </BasketMenuContext>
        </>
    )
}