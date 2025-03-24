import React, {createContext, useEffect, useState} from "react";
import {motion} from "framer-motion";

export const ContextNotificationList = createContext();

const indicatorLine = {
    hidden: {width: '100%', backgroundColor: '#dcb14a'},
    visible: {width: 0, backgroundColor: '#f4f5f7'},
}

export const IndicatorMotion = ({notification}) => {
    return (
        <motion.div
            variants={indicatorLine}
            style={{
                width: '100%',
                height: 4,
                backgroundColor: '#dcb14a',
                position: 'absolute',
                bottom: 0,
                left: 0,
            }}
            transition={{duration: 7.5, ease: "linear"}}
            animate={notification && {width: 0, backgroundColor: '#f4f5f7'}}
        />
    );
}

export default function PopUpAddedToBasketContext({children}) {
    const storedNotificationList = JSON.parse(localStorage.getItem("notificationList")) || {};
    const [notificationList, setNotificationList] = useState(storedNotificationList);
    const [addedItemPopUp, setAddedItemPopUp] = useState(false);

    const popUpAddedToBasket = (obj) => {
        setNotificationList(prev => ({...prev, [obj.uuid]: obj,}));

        setTimeout(() => {
            setNotificationList(prev => {
                const updatedList = {...prev};
                delete updatedList[obj.uuid];
                return updatedList;
            });
        }, 7500);
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