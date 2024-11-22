import {IoBagHandleOutline, IoCloseSharp} from "react-icons/io5";

export default function BasketOffCanvas({isOpenBasket, setIsOpenBasket}) {
    return (
        <>
            <div onClick={() => setIsOpenBasket(!isOpenBasket)} className="relative cursor-pointer group z-10">
                <IoBagHandleOutline className="text-[24px] group-hover:text-[#dcb14a]"/>
                <span className="text-[12px] group-hover:text-[#ffffff] bg-[#dcb14a] rounded-full absolute -bottom-[9px] -right-[9px] px-1.5">1</span>
            </div>

            {/*Right Offcanvas Basket*/}
            <div className={`fixed w-full h-full inset-0 z-30 ${isOpenBasket ? 'transition-all opacity-100 duration-500 translate-x-0' : 'transition-all opacity-0 duration-500 translate-x-full'}`}>
                {/*Offcanvas navbar*/}
                <nav className={`flex flex-col right-0 w-full sm:w-[400px] fixed top-0 py-5 px-[30px] h-full overflow-auto ${isOpenBasket ? 'bg-[#ffffff]' : ''}`}>
                    <div className="flex justify-between items-center p-4">
                        <h2 className="text-[25px] leading-[30px]">Your cart</h2>
                        <IoCloseSharp onClick={() => setIsOpenBasket(!isOpenBasket)} className="text-[25px] text-[#cacaca]"/>
                    </div>
                    {/*list of products*/}
                    <nav className="flex flex-col px-5 prose prose-a:text-base prose-a:font-normal prose-a:capitalize prose-a:no-underline prose-a:mb-4">
                        Products here
                    </nav>
                </nav>
            </div>
            {/* End Offcanvas Basket*/}
        </>
    )
}