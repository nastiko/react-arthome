import {IoBagHandleOutline, IoCloseSharp} from "react-icons/io5";
import React, {useContext} from "react";
import AddToCart from "../addToCart/AddToCart";
import {ContextBasketMenu} from "../../contextProvider/BasketMenuContext";
import {ContextCart} from "../../contextProvider/CartContext";
import {ContextCheckoutModel} from "../../contextProvider/CheckoutModelContext";

export default function BasketOffCanvas() {
    const {isOpenBasket, setIsOpenBasket, setIsOpenMenu} = useContext(ContextBasketMenu);
    const {cartItems, totalItemsInBasket, calcSubTotal} = useContext(ContextCart);
    const {handleModal} = useContext(ContextCheckoutModel);

    const handleOpenMenu = () => {
        setIsOpenBasket(true);
        setIsOpenMenu(false);
    }

    document.body.style.overflow = isOpenBasket ? 'hidden' : '';

    return (
        <>
            <div>
                <div onClick={handleOpenMenu} className="relative cursor-pointer group z-10">
                    <IoBagHandleOutline className={`${isOpenBasket ? '' : 'group-hover:text-[#dcb14a]'} text-[24px]`}/>
                    <span className={`${isOpenBasket ? 'bg-[#000000] bg-opacity-50' : 'bg-[#dcb14a] group-hover:text-[#ffffff]'} text-[12px] rounded-full absolute -bottom-[9px] -right-[9px] px-1.5`}>{cartItems?.length > 0 ? totalItemsInBasket() : 0}</span>
                </div>

                {/*Right Offcanvas Basket*/}
                <div>
                    {isOpenBasket && (
                        <div onClick={() => setIsOpenBasket(false)} className="bg-[#000000] bg-opacity-50 w-full h-full fixed top-0 left-0 z-20"></div>
                    )}
                    {/*Offcanvas navbar*/}
                    <nav className={`flex flex-col w-full sm:w-[400px] h-full fixed z-30 top-0 right-0 py-5 pl-5 
                                    ${isOpenBasket ? 'transition-all opacity-100 duration-500 translate-x-0 bg-[#ffffff]' : 'transition-all opacity-0 duration-500 translate-x-full'}`}>
                        <div className="flex justify-between items-center py-4 pr-5">
                            <h2 className="text-[25px] leading-[30px]">Your cart</h2>
                            <IoCloseSharp onClick={() => setIsOpenBasket(false)} className="text-[25px] text-[#cacaca] cursor-pointer"/>
                        </div>
                        {/*list of products*/}
                        <nav className="flex flex-col gap-y-8 overflow-auto my-[30px]
                                        prose prose-a:text-base prose-a:font-normal prose-a:capitalize prose-a:no-underline">
                            {cartItems?.length > 0 ? (
                                <>
                                    <div className="h-screen flex flex-col justify-between">
                                        <div className="flex flex-col gap-y-8">
                                            {cartItems.map((obj) =>
                                                <AddToCart
                                                    key={obj.id}
                                                    {...obj}
                                                />
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-y-4 mr-5 mt-10">
                                            <div className="flex justify-between prose prose-h6:text-[24px] prose-h6:font-medium prose-h6:my-0">
                                                <h6>Subtotal:</h6>
                                                <h6>£{calcSubTotal()}</h6>
                                            </div>
                                            <div onClick={() => handleModal()} className="w-full flex justify-center items-center bg-[#000000]">
                                                <button className="text-[#ffffff] px-[42px] h-[46px] leading-[44px]">Checkout</button>
                                            </div>
                                        </div>
                                    </div>
                                </>) : <h6 className="text-[20px] font-normal">Your cart is currently empty.</h6>
                            }
                        </nav>
                    </nav>
                </div>
                {/* End Offcanvas Basket*/}
            </div>
        </>
    )
}