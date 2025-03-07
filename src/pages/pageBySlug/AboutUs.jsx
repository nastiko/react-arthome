import {Link, useLoaderData} from "react-router-dom";
import {extractAboutUsData} from "../../models/pagesModel";
import {motion} from "framer-motion";

// icons
import {RiShoppingBag4Line} from "react-icons/ri";
import {ImPaypal} from "react-icons/im";
import {SlCursor} from "react-icons/sl";
import {MdOutlineTimer} from "react-icons/md";

import {RxSlash} from "react-icons/rx";
import React from "react";

export default function AboutUs() {
    let data = useLoaderData();
    data = extractAboutUsData(data);

    const iconMap = {
        RiShoppingBag4Line,
        ImPaypal,
        SlCursor,
        MdOutlineTimer,
    };


    return (
        <>
            <section className="bg-[#f4f5f7]">
                <div className="max-w-screen-xl px-5 xl:px-0 py-[80px] mx-auto">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <h1 className="capitalize text-[36px] font-medium mb-[15px] md:mb-0">About us</h1>
                        <ul className="flex items-center gap-x-2 text-[14px] uppercase">
                            <li className="font-medium">
                                <Link to={`/`}>Home</Link>
                            </li>
                            <li>
                                <RxSlash className="text-[#999999]"/>
                            </li>
                            <li className="text-[#999999]">
                                <span>About us</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="max-w-screen-xl px-5 xl:px-0 py-[120px] mx-auto">
                <img className="w-full" src={data.featuredImage} alt={data.featuredImageAlt}/>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] my-[60px]">
                    {
                        data.qualityAssurance.map((item) => {
                            const IconComponent = iconMap[item.iconType];
                            return (
                                <div key={item.id}
                                     className="flex prose prose-h2:text-[18px] prose-h2:leading-9 prose-h2:font-medium prose-h2:mt-0 prose-p:-ml-[50px]">
                                    <IconComponent className="shrink-0 text-[36px] mr-[20px]"/>
                                    <div dangerouslySetInnerHTML={{__html: item.quality}}></div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex flex-col md:flex-row md:gap-8">
                    <div className="max-w-full md:max-w-2xl prose prose-h2:text-[24px] prose-h2:font-medium prose-h2:mt-0" dangerouslySetInnerHTML={{__html: data.bannerText}}></div>
                    <div className="w-full flex flex-col justify-around divide-y-[3px] divide-black">
                        <div className="min-h-[50px]"></div>
                        <div className="min-h-[50px]"></div>
                        <div className="min-h-[50px]"></div>
                        <div className="min-h-[50px]"></div>
                    </div>
                </div>
                <div className="grid grid-cols-3 grid-rows-3 gap-2 md:gap-4">
                    {data.gallery.map((item, index) => {
                        let gridClass = "";

                        if (index === 0) gridClass = "col-span-2 row-span-2";
                        else if (index === 1) gridClass = "col-start-3";
                        else if (index === 2) gridClass = "col-start-3 row-start-2";
                        else if (index === 3) gridClass = "row-start-3";
                        else if (index === 4) gridClass = "col-span-2 row-start-3";

                        return (
                            <div className={`${gridClass} overflow-hidden`}>
                                <motion.img key={item.id}
                                            whileHover={{scale: 1.2}}
                                            transition={{duration: 0.2, ease: "easeInOut"}}
                                            className="w-full h-full"
                                            src={item.image}
                                            alt={item.alt}
                                />
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}