import {createContext, useEffect, useState} from "react";

export const ContextNotificationList = createContext();

export default function PopUpAddedToBasketContext({children}) {
    const storedNotificationList = JSON.parse(localStorage.getItem("notificationList")) || {};
    const [notificationList, setNotificationList] = useState(storedNotificationList);
    const [addedItemPopUp, setAddedItemPopUp] = useState(false);

    const popUpAddedToBasket = (obj) => {
        setNotificationList(prev => ({...prev, [obj.uuid]: obj}));

        setTimeout(() => {
            setNotificationList(prev => {
                const updatedList = { ...prev };
                delete updatedList[obj.uuid];
                return updatedList;
            })
        }, 15000)
    }

    const removeNotificationItem = (uuid) => {
        delete notificationList[uuid];
        setNotificationList(prev => ({...prev}));
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