import Footer from "../components/common/Footer";
import CartContext from "../contextProvider/CartContext";
import FavouritesCartContext from "../contextProvider/FavouritesCartContext";
import BasketMenuContext from "../contextProvider/BasketMenuContext";
import PopUpAddedToBasketContext from "../contextProvider/PopUpAddedToBasketContext";
import CheckoutModelContext from "../contextProvider/CheckoutModelContext";
import MainContent from "../components/common/MainContent";

export default function RootLayout() {

    return (
        <>
            <BasketMenuContext>
                <CartContext>
                    <FavouritesCartContext>
                        <PopUpAddedToBasketContext>
                            <CheckoutModelContext>
                                <div className={`flex h-screen flex-col justify-between`}>
                                    <MainContent />
                                    <Footer
                                        link1="Term & Condition"
                                        link2="Policy"
                                        link3="Contact Us"
                                        author="© 2024 Anastasia Hrynkevich."
                                        text="Follow us on social"
                                    />
                                </div>
                            </CheckoutModelContext>
                        </PopUpAddedToBasketContext>
                    </FavouritesCartContext>
                </CartContext>
            </BasketMenuContext>
        </>
    )
}