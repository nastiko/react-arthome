import {Link} from "react-router-dom";
import {useContext} from "react";
import ContentLoader from "react-content-loader"
import {ContextCart} from "../../contextProvider/CartContext";
import {ContextFavouritesCart} from "../../contextProvider/FavouritesCartContext";

//icons
import {IoBagHandleOutline} from "react-icons/io5";
import {AiOutlinePlus} from "react-icons/ai";
import {IoMdHeartEmpty} from "react-icons/io";
import {IoMdHeart} from "react-icons/io";

export default function ProductCard({id, images, name, regular_price, sale_price, on_sale, quantity = 1, loading}) {
    const {onAddToCart} = useContext(ContextCart);
    const {favouriteItems, ifExists} = useContext(ContextFavouritesCart);

    const discount = Math.ceil((regular_price - sale_price) / regular_price * 100);
    const isFavourite = favouriteItems.some(item => item.id === id);

    const onClickCard = () => {
        onAddToCart({id, images, name, regular_price, sale_price, quantity});
    }

    const onClickFavouriteCard = () => {
        ifExists({id, images, name, regular_price, sale_price, on_sale});
    }

    return (
        <>
            {loading ? (
                    <ContentLoader
                        speed={2}
                        width={300}
                        height={418}
                        viewBox="0 0 300 418"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                    >
                        <rect x="0" y="0" rx="0" ry="0" width="300" height="300"/>
                        <rect x="76" y="316" rx="0" ry="0" width="141" height="24"/>
                        <rect x="115" y="355" rx="0" ry="0" width="70" height="31"/>

                    </ContentLoader>
                )
                : (
                    <>
                        <div className="flex flex-col">
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
            }
        </>
    )
}