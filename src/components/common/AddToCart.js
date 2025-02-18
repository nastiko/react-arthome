import {NavLink} from "react-router-dom";
import {useContext} from "react";
import Context from "../../Context";

//icons
import {IoCloseSharp} from "react-icons/io5";

export default function AddToCart({id, images, name, regular_price, sale_price, setIsOpenBasket}) {
    const value = useContext(Context)

    const removeCartItem = () => {
        value.setCartItems((prev) => prev.filter((item) => item.id !== id));
    }

    return (
        <>
            <div className="flex justify-between mr-5">
                <div className="flex">
                    <NavLink onClick={() => setIsOpenBasket(false)} to={`/products/${id}`}>
                        <div className="h-full w-[72px] flex shrink-0 items-center mr-[15px]">
                            <img className="h-[72px] w-[72px] border-[1px] border-[#868686] my-0" src={images[0]?.src} alt={name}/>
                        </div>
                    </NavLink>
                    <div className="flex justify-between">
                        <div className="flex flex-col justify-between gap-y-4">
                            <h6 className="font-normal">{name}</h6>
                            <h4 className="text-[15px] leading-[26px] font-normal my-0">Qty: {1}</h4>
                            {/*<div className="w-[120px] h-[30px] flex justify-center items-center border-[1px] border-[#dddddd] relative py-2.5">
                                <button className="absolute w-[12px] leading-[23px] top-1/2 -translate-y-1/2 left-2.5">
                                    <AiOutlineMinus/>
                                </button>
                                <input className="w-[100px] text-center placeholder:text-[#000000] focus:outline-0" type="text" placeholder="1"/>
                                <button className="absolute w-[12px] leading-[23px] top-1/2 -translate-y-1/2 right-2.5">
                                    <AiOutlinePlus/>
                                </button>
                            </div>*/}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <IoCloseSharp onClick={removeCartItem} className="text-[20px] text-[#cacaca] cursor-pointer"/>
                    <p className="my-0">£{sale_price ? sale_price : regular_price}</p>
                </div>
            </div>
        </>
    )
}