import {NavLink} from "react-router-dom";
import React, {useContext} from "react";
import {ContextCart} from "../../contextProvider/CartContext";
import {ContextBasketMenu} from "../../contextProvider/BasketMenuContext";

//icons
import {IoCloseSharp} from "react-icons/io5";
import {AiOutlineMinus} from "react-icons/ai";
import {AiOutlinePlus} from "react-icons/ai";

export default function AddToCart({id, images, name, stock_quantity, quantity, calcPriceByQnt}) {
    const {handleIncreaseQty, handleDecreaseQty, removeCartItem} = useContext(ContextCart);
    const {setIsOpenBasket} = useContext(ContextBasketMenu);

    return (
        <>
            <div>
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
                                <div className="w-[120px] h-[30px] flex justify-center items-center border-[1px] border-[#dddddd] relative py-2.5">
                                    <button onClick={() => handleDecreaseQty(id)} className="absolute w-[12px] leading-[23px] top-1/2 -translate-y-1/2 left-2.5">
                                        <AiOutlineMinus className="text-[#000000]"/>
                                    </button>
                                    <input onChange={(e) => e.target.value} className="w-[100px] text-center placeholder:text-[#000000] focus:outline-0" type="text" value={quantity > stock_quantity ? stock_quantity : quantity}/>
                                    <button onClick={() => handleIncreaseQty(id)} className="absolute w-[12px] leading-[23px] top-1/2 -translate-y-1/2 right-2.5">
                                        <AiOutlinePlus className={`${quantity < stock_quantity ? 'text-[#000000]' : 'text-[#666666] cursor-default'}`}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-end">
                        <IoCloseSharp onClick={() => removeCartItem(id)} className="text-[20px] text-[#cacaca] cursor-pointer"/>
                        <p className="my-0">£{calcPriceByQnt}</p>
                    </div>
                </div>
                {quantity === stock_quantity && <p className="text-[12px] text-[#ff3860] mb-0">We have max {stock_quantity} items in our stock.</p>}
            </div>
        </>
    )
}