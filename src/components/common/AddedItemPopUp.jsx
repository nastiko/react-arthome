import React, {memo} from "react";
import {motion} from "framer-motion";
import {ContextNotificationList} from "../../contextProvider/PopUpAddedToBasketContext";
import {IndicatorMotion} from "../../contextProvider/PopUpAddedToBasketContext";

// icons
import {IoCheckmark, IoCloseSharp} from "react-icons/io5";
import {useContext} from "react";

function AddedItemPopUp({uuid, name}) {
    const {notificationList, removeNotificationItem} = useContext(ContextNotificationList);
    const notification = notificationList[uuid];
    if (!notification) return null;

    return (
        <>
            <motion.div
                key={uuid}
                initial="hidden"
                animate="visible"
                className="flex justify-between bg-[#f4f5f7] border-[1px] border-[#dddddd] rounded-md relative px-5 py-2.5 mb-2.5 mr-5">
                <div>
                    <div className="flex items-center gap-x-2">
                        <IoCheckmark className="text-[20px] text-[#dcb14a]"/>
                        <p className="text-[16px] font-medium">Success</p>
                    </div>
                    <p className="text-[14px] text-[#666666]">The "{name}" was added in the basket</p>
                </div>
                <div>
                    <IoCloseSharp onClick={() => removeNotificationItem(uuid)}
                                  className="text-[20px] text-[#cacaca] cursor-pointer"/>
                </div>
                <div className="w-full h-[4px] bg-[#f4f5f7] rounded-md absolute left-0 bottom-0">
                    <IndicatorMotion notification={notification} />
                </div>
            </motion.div>
        </>
    )
}

export default memo(AddedItemPopUp);