import {IoBagHandleOutline, IoCloseSharp} from "react-icons/io5";
import {NavLink} from "react-router-dom";
import AddToCart from "./AddToCart";

export default function BasketOffCanvas({isOpenBasket, setIsOpenBasket, setIsOpenMenu, items = []}) {
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
                    <span className={`${isOpenBasket ? 'bg-[#000000] bg-opacity-50' : 'bg-[#dcb14a] group-hover:text-[#ffffff]'} text-[12px] rounded-full absolute -bottom-[9px] -right-[9px] px-1.5`}>{items.length > 0 ? items.length : 0}</span>
                </div>

                {/*Right Offcanvas Basket*/}
                <div>
                    {isOpenBasket && (
                        <div onClick={() => setIsOpenBasket(false)} className="bg-[#000000] bg-opacity-50 w-full h-full fixed top-0 left-0 z-20"></div>
                    )}
                    {/*Offcanvas navbar*/}
                    <nav className={`flex flex-col w-full sm:w-[400px] h-full fixed z-30 top-0 right-0 py-5 px-[30px] 
                                    ${isOpenBasket ? 'transition-all opacity-100 duration-500 translate-x-0 bg-[#ffffff]' : 'transition-all opacity-0 duration-500 translate-x-full'}`}>
                        <div className="flex justify-between items-center p-4">
                            <h2 className="text-[25px] leading-[30px]">Your cart</h2>
                            <IoCloseSharp onClick={() => setIsOpenBasket(false)} className="text-[25px] text-[#cacaca] cursor-pointer hover:text-[#ff00ff]"/>
                        </div>
                        {/*list of products*/}
                        <nav className="flex flex-col px-5 prose prose-a:text-base prose-a:font-normal prose-a:capitalize prose-a:no-underline prose-a:mb-4">
                            <NavLink onClick={() => setIsOpenBasket(false)} to={""}>
                                {items.length > 0 ? (
                                    items.map((obj) =>
                                        <AddToCart
                                            key={obj.id}
                                            {...obj}
                                        />
                                    )
                                ) : <h6>Your basket is empty</h6>
                                }
                            </NavLink>
                        </nav>
                    </nav>
                </div>
                {/* End Offcanvas Basket*/}

            </div>
        </>
    )
}