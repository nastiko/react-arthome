import {createContext, useContext, useState} from "react";
import {ContextBasketMenu} from "./BasketMenuContext";
import {ContextCart} from "./CartContext";

export const ContextCheckoutModel = createContext();

export default function CheckoutModelContext({children}) {
    const {setIsOpenBasket} = useContext(ContextBasketMenu);
    const {setCartItems} = useContext(ContextCart);

    const [openModal, setOpenModal] = useState(false);

    const handleModal = () => {
        setOpenModal(true);
        setIsOpenBasket(false);
        setCartItems([]);
        localStorage.removeItem("cartItems");
    }

    return (
        <ContextCheckoutModel.Provider value={{
            openModal,
            setOpenModal,
            handleModal
        }}>
            {children}
        </ContextCheckoutModel.Provider>
    )
}