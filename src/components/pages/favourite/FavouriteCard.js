import {Link} from "react-router-dom";
import {useContext} from "react";
import Context from "../../../Context";

//icons
import {AiOutlinePlus} from "react-icons/ai";
import {IoBagHandleOutline} from "react-icons/io5";

export default function FavouriteCard({id, images, name, sale_price, regular_price, on_sale}) {
    const value = useContext(Context);
    const discount = Math.ceil((regular_price - sale_price) / regular_price * 100);

    const removeFavouriteCard = () => {
        value.setFavouriteItems((prev) => prev.filter((item) => item.id !== id));
    }

    return (
        <>
            <div className="flex flex-col justify-between shadow-md">
                <div>
                    <div className="group/items relative">
                        <div>
                            <img src={images[1]?.src || images[0]?.src} alt={name}/>
                            {on_sale && <div className="w-[45px] h-[45px] flex justify-center items-center text-[#ffffff] bg-[#f14705] rounded-full absolute top-[15px] left-[15px]">Sale</div>}
                            {on_sale && <div className="w-[45px] h-[45px] flex justify-center items-center text-[#ffffff] bg-[#98d8ca] rounded-full absolute top-[75px] left-[15px]">{discount}%</div>}
                        </div>
                        <div className="group/block flex w-[300px] h-[300px] items-center justify-center gap-x-[15px] bg-[#000000] bg-opacity-10 absolute inset-0 transition-all duration-5000 ease-in-out invisible group-hover/items:visible">
                            <Link className="group/color" to={`/products/${id}`}>
                                <button className="w-[45px] h-[45px] flex items-center justify-center bg-[#ffffff] rounded-full transition-all duration-5000 delay-250 ease-in-out
                                        transform translate-y-20 duration-[.5s] opacity-0 group-hover/block:translate-y-0 group-hover/block:opacity-100">
                                    <AiOutlinePlus className="w-[22px] h-[22px] text-[16px] text-[#000000] group-hover/color:text-[#dcb14a] absolute inset-0 transform translate-y-1/2 translate-x-1/2"/>
                                </button>
                            </Link>
                            <div className="group/color">
                                <button
                                    className="w-[45px] h-[45px] flex items-center justify-center bg-[#ffffff] rounded-full transition-all duration-5000 delay-150 ease-in-out
                                        transform translate-y-20 duration-[.5s] opacity-0 group-hover/block:translate-y-0 group-hover/block:opacity-100">
                                    <IoBagHandleOutline className="w-[22px] h-[22px] text-[16px] text-[#000000] group-hover/color:text-[#dcb14a] absolute inset-0 transform translate-y-1/2 translate-x-1/2"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center my-4">
                        <h3 className="text-[16px] font-medium">{name}</h3>
                        {on_sale ? (
                            <>
                                <div className="flex gap-x-4">
                                    <p className="text-[18px] leading-[31px] text-[#666666] line-through">£{regular_price}</p>
                                    <p className="text-[18px] leading-[31px] text-[#666666]">£{sale_price}</p>
                                </div>
                            </>
                        ) : <p className="text-[18px] leading-[31px] text-[#666666]">£{regular_price}</p>}
                    </div>
                </div>
                <div className="w-full flex justify-center items-center">
                    <button onClick={removeFavouriteCard} className="w-full text-[#000000] hover:text-[#ffffff] border-[1px] border-[#000000] hover:bg-[#000000] px-[32px] py-1">Remove</button>
                </div>
            </div>
        </>
    )
}