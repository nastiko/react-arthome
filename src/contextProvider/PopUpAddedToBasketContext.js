import {createContext, useEffect, useState} from "react";

export const ContextNotificationList = createContext();

export default function PopUpAddedToBasketContext({children}) {
    const storedNotificationList = JSON.parse(localStorage.getItem("notificationList")) || [];
    const [notificationList, setNotificationList] = useState(storedNotificationList);
    const [addedItemPopUp, setAddedItemPopUp] = useState(false);

    const popUpAddedToBasket = (obj) => {
        setAddedItemPopUp(true);
        setNotificationList(prev => [...prev, obj]);
    }

    const removeNotificationItem = (id) => {
        const existedItem = notificationList.some(item => item.id === id);
        if(existedItem) {
            setNotificationList(prev => prev.filter(item => item.id !== id));
        }
    }

    useEffect(() => {
        if (storedNotificationList !== null) setNotificationList([]);
    }, []);

    useEffect(() => {
        window.localStorage.setItem("notificationList", JSON.stringify(notificationList));
    }, [notificationList]);

    return (
        <ContextNotificationList.Provider
            value={{
                notificationList,
                setNotificationList,
                addedItemPopUp,
                setAddedItemPopUp,
                popUpAddedToBasket,
                removeNotificationItem
            }}
        >
            {children}
        </ContextNotificationList.Provider>
    )
}