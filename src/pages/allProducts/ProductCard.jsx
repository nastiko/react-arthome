import {Link} from "react-router-dom";
import {forwardRef, useContext} from "react";
import {ContextCart} from "../../contextProvider/CartContext";
import {ContextFavouritesCart} from "../../contextProvider/FavouritesCartContext";
import {ContextNotificationList} from "../../contextProvider/PopUpAddedToBasketContext";

//icons
import {IoBagHandleOutline} from "react-icons/io5";
import {AiOutlinePlus} from "react-icons/ai";
import {IoMdHeartEmpty} from "react-icons/io";
import {IoMdHeart} from "react-icons/io";

const ProductCard = forwardRef(({ i, id, images, name, regular_price, sale_price, on_sale, stock_quantity }, ref) => {
    const {onAddToCart} = useContext(ContextCart);
    const {favouriteItems, ifExists} = useContext(ContextFavouritesCart);
    const {popUpAddedToBasket} = useContext(ContextNotificationList);

    const discount = Math.ceil((regular_price - sale_price) / regular_price * 100);
    const isFavourite = favouriteItems.some(item => item.id === id);

    const onClickCard = () => {
        onAddToCart({id, images, name, regular_price, sale_price, stock_quantity});
        popUpAddedToBasket({uuid: crypto.randomUUID(), id, name});
    }

    const onClickFavouriteCard = () => {
        ifExists({id, images, name, regular_price, sale_price, on_sale});
    }

    return (
        <>
            <div ref={ref} className="flex flex-col min-h-[418px]">
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
                            <button onClick={onClickCard}
                                    className="w-[45px] h-[45px] flex items-center justify-center bg-[#ffffff] rounded-full transition-all duration-5000 delay-150 ease-in-out
                                        transform translate-y-20 duration-[.5s] opacity-0 group-hover/block:translate-y-0 group-hover/block:opacity-100">
                                <IoBagHandleOutline className="w-[22px] h-[22px] text-[16px] text-[#000000] group-hover/color:text-[#dcb14a] absolute inset-0 transform translate-y-1/2 translate-x-1/2"/>
                            </button>
                        </div>
                        <div className="group/color">
                            <button onClick={onClickFavouriteCard} className="w-[45px] h-[45px] flex items-center justify-center bg-[#ffffff] rounded-full transition-all duration-5000 delay-200 ease-in-out
                                        transform translate-y-20 duration-[.5s] opacity-0 group-hover/block:translate-y-0 group-hover/block:opacity-100">
                                {isFavourite ?
                                    (<IoMdHeart className={`w-[22px] h-[22px] text-[16px] text-[#dcb14a] absolute inset-0 transform translate-y-1/2 translate-x-1/2`}/>)
                                    :
                                    (<IoMdHeartEmpty className={`w-[22px] h-[22px] text-[16px] text-[#000000] group-hover/color:text-[#dcb14a] absolute inset-0 transform translate-y-1/2 translate-x-1/2`}/>)
                                }
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center my-4">
                    <h3 className="text-[16px] font-medium">{name}</h3>
                    {on_sale ? (
                        <>
                            <div>
                                <p className="text-[18px] leading-[31px] text-[#666666] line-through">£{regular_price}</p>
                                <p className="text-[18px] leading-[31px] text-[#666666]">£{sale_price}</p>
                            </div>
                        </>
                    ) : <p className="text-[18px] leading-[31px] text-[#666666]">£{regular_price}</p>}
                </div>
            </div>
        </>
    )
});

export default ProductCard;