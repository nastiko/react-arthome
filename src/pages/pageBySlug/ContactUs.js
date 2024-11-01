import {Link, useLoaderData} from "react-router-dom";
import {extractContactUsData} from "../../models/pagesModel";

// icons
import { MdOutlineTimer } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import {RxSlash} from "react-icons/rx";
import React from "react";

export default function ContactUs() {
    let data = useLoaderData();
    data = extractContactUsData(data);

    return (
        <>
            <section className="bg-[#f4f5f7]">
                <div className="max-w-screen-xl px-5 xl:px-0 py-[80px] mx-auto">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <h1 className="capitalize text-[36px] font-medium mb-[15px] md:mb-0">Contact us</h1>
                        <ul className="flex items-center gap-x-2 text-[14px] uppercase">
                            <li className="font-medium">
                                <Link to={`/`}>Home</Link>
                            </li>
                            <li>
                                <RxSlash className="text-[#999999]"/>
                            </li>
                            <li className="text-[#999999]">
                                <span>Contact us</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]
                                prose prose-h2:text-[18px] prose-h2:leading-9 prose-h2:font-medium prose-h2:mt-0 prose-h2:mb-2
                                prose-p:my-0
                                px-5 xl:px-0 py-[120px] mx-auto">
                <div className="flex">
                    <MdOutlineTimer className="shrink-0 text-[36px] mr-[20px]" />
                    <div>
                        <h2>{data.hoursTime.title}</h2>
                        <p>{data.hoursTime.daily}</p>
                        <p>{data.hoursTime.weekend}</p>
                    </div>
                </div>
                <div className="flex">
                    <FiPhone className="shrink-0 text-[36px] mr-[20px]" />
                    <div>
                        <h2>{data.phone.title}</h2>
                        <p>{data.phone.number}</p>
                    </div>
                </div>
                <div className="flex">
                    <MdOutlineMarkEmailRead className="shrink-0 text-[36px] mr-[20px]" />
                    <div>
                        <h2>{data.email.title}</h2>
                        <p>{data.email.email}</p>
                    </div>
                </div>
                <div className="flex">
                    <IoLocationOutline className="shrink-0 text-[36px] mr-[20px]" />
                    <div>
                        <h2>{data.address.title}</h2>
                        <p>{data.address.address}</p>
                    </div>
                </div>
            </section>
            <section className="pb-[120px]" dangerouslySetInnerHTML={{__html: data.map}}></section>
        </>
    )
}