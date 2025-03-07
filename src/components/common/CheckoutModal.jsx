import React, {useContext} from "react";
import {ContextCheckoutModel} from "../../contextProvider/CheckoutModelContext";

//icons
import {IoCloseSharp} from "react-icons/io5";

export default function CheckoutModal() {
    const {setOpenModal} = useContext(ContextCheckoutModel);

    return (
        <>
            <div className="bg-opacity-50 bg-[#000000] w-full h-full fixed top-0 left-0 z-20"></div>
            <div className="w-full h-full flex justify-center items-center absolute inset-0 z-30">
                <div className="w-1/4 bg-[#ffffff] px-5 pt-5 pb-10">
                    <div className="flex justify-end">
                        <IoCloseSharp onClick={() => setOpenModal(false)} className="text-[25px] text-[#cacaca] cursor-pointer"/>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-[48px] font-medium mb-2">Thank you</h1>
                        <p className="text-[20px]">Your order was completed successfully.</p>
                    </div>
                </div>
            </div>
        </>
    )
}