import React, {useContext} from "react";
import {motion} from "framer-motion";
import AddedItemPopUp from "./AddedItemPopUp";
import {ContextNotificationList} from "../../contextProvider/PopUpAddedToBasketContext";
import {ContextBasketMenu} from "../../contextProvider/BasketMenuContext";

export default function PopUpNotification() {
    const {notificationList} = useContext(ContextNotificationList);
    const {isOpenBasket} = useContext(ContextBasketMenu);

    return (
        <>
            <div className={`fixed top-2.5 right-0 ${isOpenBasket ? 'z-[9]' : 'z-10'}`}>
                {Object.keys(notificationList) && Object.keys(notificationList).map((key) => {
                    return (
                        <motion.div
                            key={notificationList[key].uuid}
                            initial={{transform: "translateX(-100px)"}}
                            animate={{transform: "translateX(0px)"}}
                            transition={{type: "spring"}}
                        >
                            <AddedItemPopUp
                                uuid={notificationList[key].uuid}
                                id={notificationList[key].id}
                                name={notificationList[key].name}
                            />
                        </motion.div>
                    )
                })
                }
            </div>
        </>
    )
}