import {createContext, useState} from "react";

export const ContextBasketMenu = createContext();

export default function BasketMenuContext({ children }) {

    const [isOpenBasket, setIsOpenBasket] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return (
        <ContextBasketMenu.Provider
            value={{
                isOpenBasket,
                setIsOpenBasket,
                isOpenMenu,
                setIsOpenMenu
            }}>
            { children }
        </ContextBasketMenu.Provider>
    )
}