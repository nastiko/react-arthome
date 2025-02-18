import {Link} from "react-router-dom";
import React, {useContext} from "react";
import FavouriteCard from "./FavouriteCard";
import Context from "../../../Context";

//icons
import {RxSlash} from "react-icons/rx";
import {IoMdHeartEmpty} from "react-icons/io";
import {GoArrowLeft} from "react-icons/go";

export default function Like() {
    const value = useContext(Context);

    return (
        <>
            <section className="bg-[#f4f5f7]">
                <div className="max-w-screen-xl px-5 xl:px-0 py-[80px] mx-auto">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <h1 className="capitalize text-[36px] font-medium mb-[15px] md:mb-0">Wishlist</h1>
                        <ul className="flex items-center gap-x-2 text-[14px] uppercase">
                            <li className="font-medium">
                                <Link to={`/`}>Home</Link>
                            </li>
                            <li>
                                <RxSlash className="text-[#999999]"/>
                            </li>
                            <li className="text-[#999999]">
                                <span>Wishlist</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {value.favouriteItems?.length > 0 ? (
                <section className="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-[25px] gap-y-10 px-5 xl:px-0 py-[80px] mx-auto">
                    {
                        value.favouriteItems.map((obj) =>
                            <FavouriteCard
                                key={obj.id}
                                {...obj}
                            />
                        )
                    }
                </section>
            ) : (
                <section className="max-w-screen-xl py-[80px] mx-auto">
                    <div className="flex flex-col justify-center items-center">
                        <IoMdHeartEmpty className="text-[170px]"/>
                        <h4 className="text-[20px] font-normal mb-[25px]">No items found in wishlist.</h4>
                        <Link to={"/products"}>
                            <div className="w-max cursor-pointer py-2 group/button">
                                <div className="no-underline group">
                                    <div className="w-max flex items-center gap-x-1 border-[1px] border-[#000000] group-hover/button:bg-[#000000] px-[32px] py-1">
                                        <GoArrowLeft className="text-[#000000] group-hover/button:text-[#ffffff]"/>
                                        <h3 className="text-[15px] text-[#000000] font-normal group-hover/button:text-[#ffffff] my-0">Continue Shopping</h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
            )}
        </>
    )
}