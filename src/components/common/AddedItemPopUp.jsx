import {motion} from "framer-motion";
import {ContextNotificationList} from "../../contextProvider/PopUpAddedToBasketContext";

// icons
import {IoCheckmark, IoCloseSharp} from "react-icons/io5";
import {useContext} from "react";

const indicatorLine = {
    hidden: {width: '100%', backgroundColor: '#dcb14a'},
    visible: {width: 0, backgroundColor: '#f4f5f7'},
}

export default function AddedItemPopUp({uuid, name}) {
    const {notificationList, removeNotificationItem} = useContext(ContextNotificationList);
    const notification = notificationList[uuid];
    if(!notification) return null;

    const IndicatorMotion = ({children}) => {
        return (
            <motion.div
                variants={indicatorLine}
                style={{
                    width: '100%',
                    height: 4,
                    backgroundColor: '#dcb14a',
                    position: 'absolute',
                    bottom: 0,
                    left: 0
                }}
                transition={{duration: 7.5, ease: "linear"}}
                animate={notification ? {width: 0, backgroundColor: '#f4f5f7'} : {width: '100%', backgroundColor: '#dcb14a'}}
            >
                {children}
            </motion.div>
        )
    }

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
                    <IndicatorMotion/>
                </div>
            </motion.div>
        </>
    )
}