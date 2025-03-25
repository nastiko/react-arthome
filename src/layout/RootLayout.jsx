import {
    Footer,
    CartContext,
    FavouritesCartContext,
    MainContent,
    BasketMenuContext,
    PopUpAddedToBasketContext,
    CheckoutModelContext
} from "./index"

export default function RootLayout() {

    return (
        <>
            <BasketMenuContext>
                <CartContext>
                    <FavouritesCartContext>
                        <PopUpAddedToBasketContext>
                            <CheckoutModelContext>
                                <div className={`flex h-screen flex-col justify-between`}>
                                    <MainContent/>
                                    <Footer
                                        link1="Term & Condition"
                                        link2="Policy"
                                        link3="Contact Us"
                                        author="© 2025 Anastasia Hrynkevich"
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