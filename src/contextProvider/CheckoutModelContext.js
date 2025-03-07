import {createContext, useContext, useState} from "react";
import {ContextBasketMenu} from "./BasketMenuContext";

export const ContextCheckoutModel = createContext();

export default function CheckoutModelContext({children}) {
    const {setIsOpenBasket} = useContext(ContextBasketMenu);
    const [openModal, setOpenModal] = useState(false);

    const handleModal = () => {
        setOpenModal(true);
        setIsOpenBasket(false);

        localStorage.removeItem("cartItems");

    }

    //document.body.style.overflow = openModal ? '' : 'hidden';

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