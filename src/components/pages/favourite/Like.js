import {Link} from "react-router-dom";
import React, {useContext} from "react";
import FavouriteCard from "./FavouriteCard";
import Context from "../../../Context";

//icons
import {RxSlash} from "react-icons/rx";

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
        </>
    )
}