import React, {useContext} from "react";
import {ContextCheckoutModel} from "../../contextProvider/CheckoutModelContext";

//icons
import {IoCloseSharp} from "react-icons/io5";

export default function CheckoutModal() {
    const {openModal, setOpenModal} = useContext(ContextCheckoutModel);

    document.body.style.overflow = openModal ? 'hidden' : '';

    return (
        <>
            <div className="bg-opacity-50 bg-[#000000] w-full h-full fixed top-0 left-0 z-20"></div>
            <div className="w-full h-full flex justify-center items-center absolute inset-0 z-30 px-5 md:px-0">
                <div className="w-full md:w-1/4 bg-[#ffffff] px-5 pt-5 pb-10">
                    <div className="flex justify-end">
                        <IoCloseSharp onClick={() => setOpenModal(false)} className="text-[25px] text-[#cacaca] cursor-pointer"/>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-[32px] md:text-[48px] font-medium mb-2">Thank you</h1>
                        <p className="text-[18px] md:text-[20px] text-center">Your order was completed successfully.</p>
                    </div>
                </div>
            </div>
        </>
    )
}