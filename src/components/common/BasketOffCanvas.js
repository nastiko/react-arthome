import {IoBagHandleOutline, IoCloseSharp} from "react-icons/io5";
import {useContext} from "react";
import AddToCart from "./AddToCart";
import {ContextBasketMenu} from "../../contextProvider/BasketMenuContext";
import {ContextCart} from "../../contextProvider/CartContext";

export default function BasketOffCanvas() {
    const basketMenuContext = useContext(ContextBasketMenu);
    const cartContext = useContext(ContextCart);

    const handleOpenMenu = () => {
        basketMenuContext.setIsOpenBasket(true);
        basketMenuContext.setIsOpenMenu(false);
    }

    document.body.style.overflow = basketMenuContext.isOpenBasket ? 'hidden' : '';

    return (
        <>
            <div>
                <div onClick={handleOpenMenu} className="relative cursor-pointer group z-10">
                    <IoBagHandleOutline className={`${basketMenuContext.isOpenBasket ? '' : 'group-hover:text-[#dcb14a]'} text-[24px]`}/>
                    <span className={`${basketMenuContext.isOpenBasket ? 'bg-[#000000] bg-opacity-50' : 'bg-[#dcb14a] group-hover:text-[#ffffff]'} text-[12px] rounded-full absolute -bottom-[9px] -right-[9px] px-1.5`}>{cartContext.cartItems?.length > 0 ? cartContext.cartItems.length : 0}</span>
                </div>

                {/*Right Offcanvas Basket*/}
                <div>
                    {basketMenuContext.isOpenBasket && (
                        <div onClick={() => basketMenuContext.setIsOpenBasket(false)} className="bg-[#000000] bg-opacity-50 w-full h-full fixed top-0 left-0 z-20"></div>
                    )}
                    {/*Offcanvas navbar*/}
                    <nav className={`flex flex-col w-full sm:w-[400px] h-full fixed z-30 top-0 right-0 py-5 pl-5 
                                    ${basketMenuContext.isOpenBasket ? 'transition-all opacity-100 duration-500 translate-x-0 bg-[#ffffff]' : 'transition-all opacity-0 duration-500 translate-x-full'}`}>
                        <div className="flex justify-between items-center py-4 pr-5">
                            <h2 className="text-[25px] leading-[30px]">Your cart</h2>
                            <IoCloseSharp onClick={() => basketMenuContext.setIsOpenBasket(false)} className="text-[25px] text-[#cacaca] cursor-pointer"/>
                        </div>
                        {/*list of products*/}
                        <nav className="flex flex-col gap-y-8 overflow-auto my-[30px]
                                        prose prose-a:text-base prose-a:font-normal prose-a:capitalize prose-a:no-underline">
                            {cartContext.cartItems?.length > 0 ? (
                                cartContext.cartItems.map((obj) =>
                                    <AddToCart
                                        key={obj.id}
                                        {...obj}
                                        setIsOpenBasket={basketMenuContext.setIsOpenBasket}
                                    />
                                )
                            ) : <h6 className="text-[20px] font-normal">Your cart is currently empty.</h6>
                            }
                        </nav>
                    </nav>
                </div>
                {/* End Offcanvas Basket*/}
            </div>
        </>
    )
}