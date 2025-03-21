import {ContextNotificationList} from "../../contextProvider/PopUpAddedToBasketContext";

// icons
import {IoCheckmark, IoCloseSharp} from "react-icons/io5";
import {useContext} from "react";

export default function AddedItemPopUp({uuid, name}) {
    const {removeNotificationItem} = useContext(ContextNotificationList);

    return (
        <>
            <div className="flex justify-between bg-[#f4f5f7] border-[1px] border-[#dddddd] rounded-md px-5 py-2.5 mb-2.5 mr-5">
                <div>
                    <div className="flex items-center gap-x-2">
                        <IoCheckmark className="text-[20px] text-[#dcb14a]"/>
                        <p className="text-[16px] font-medium">Success</p>
                    </div>
                    <p className="text-[14px] text-[#666666]">The "{name}" was added in the basket</p>
                </div>
                <div>
                    <IoCloseSharp onClick={() => removeNotificationItem(uuid)} className="text-[20px] text-[#cacaca] cursor-pointer"/>
                </div>
            </div>

        </>
    )
}