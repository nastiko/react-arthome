import {IoBagHandleOutline, IoCloseSharp} from "react-icons/io5";
import {useContext} from "react";
import AddToCart from "./AddToCart";
import Context from "../../Context";

export default function BasketOffCanvas() {
    const value = useContext(Context);
    const handleOpenMenu = () => {
        value.setIsOpenBasket(true);
        value.setIsOpenMenu(false);
    }

    document.body.style.overflow = value.isOpenBasket ? 'hidden' : '';

    return (
        <>
            <div>
                <div onClick={handleOpenMenu} className="relative cursor-pointer group z-10">
                    <IoBagHandleOutline className={`${value.isOpenBasket ? '' : 'group-hover:text-[#dcb14a]'} text-[24px]`}/>
                    <span className={`${value.isOpenBasket ? 'bg-[#000000] bg-opacity-50' : 'bg-[#dcb14a] group-hover:text-[#ffffff]'} text-[12px] rounded-full absolute -bottom-[9px] -right-[9px] px-1.5`}>{value.cartItems?.length > 0 ? value.cartItems.length : 0}</span>
                </div>

                {/*Right Offcanvas Basket*/}
                <div>
                    {value.isOpenBasket && (
                        <div onClick={() => value.setIsOpenBasket(false)} className="bg-[#000000] bg-opacity-50 w-full h-full fixed top-0 left-0 z-20"></div>
                    )}
                    {/*Offcanvas navbar*/}
                    <nav className={`flex flex-col w-full sm:w-[400px] h-full fixed z-30 top-0 right-0 py-5 pl-5 
                                    ${value.isOpenBasket ? 'transition-all opacity-100 duration-500 translate-x-0 bg-[#ffffff]' : 'transition-all opacity-0 duration-500 translate-x-full'}`}>
                        <div className="flex justify-between items-center py-4 pr-5">
                            <h2 className="text-[25px] leading-[30px]">Your cart</h2>
                            <IoCloseSharp onClick={() => value.setIsOpenBasket(false)} className="text-[25px] text-[#cacaca] cursor-pointer hover:text-[#ff00ff]"/>
                        </div>
                        {/*list of products*/}
                        <nav className="flex flex-col gap-y-8 overflow-auto my-[30px]
                                        prose prose-a:text-base prose-a:font-normal prose-a:capitalize prose-a:no-underline">
                            {value.cartItems?.length > 0 ? (
                                value.cartItems.map((obj) =>
                                    <AddToCart
                                        key={obj.id}
                                        {...obj}
                                        setIsOpenBasket={value.setIsOpenBasket}
                                    />
                                )
                            ) : <h6>Your basket is empty</h6>
                            }
                        </nav>
                    </nav>
                </div>
                {/* End Offcanvas Basket*/}
            </div>
        </>
    )
}