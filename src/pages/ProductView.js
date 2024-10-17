import React from "react";
import {Link, useLoaderData} from "react-router-dom";
import {RxSlash} from "react-icons/rx";

import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

// icons
import {LuMinus} from "react-icons/lu";
import {PiPlus} from "react-icons/pi";
import {IoMdHeartEmpty} from "react-icons/io";

export default function ProductView() {
    const product = useLoaderData();
    const {images, sale_price, regular_price, on_sale, name, short_description, sku, categories, tags, description} = product;
    console.log(product);
    const discount = Math.ceil((regular_price - sale_price) / regular_price * 100);

    return (
        <>
            <section className="bg-[#f4f5f7]">
                <div className="max-w-screen-xl px-5 xl:px-0 py-[80px] mx-auto">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <h1 className="capitalize text-[36px] mb-[15px] md:mb-0">{name}</h1>
                        <ul className="flex items-center gap-x-2">
                            <li>
                                <Link to={`/`}>Home</Link>
                            </li>
                            <li>
                                <RxSlash className="text-[#999999]"/>
                            </li>
                            <li className="text-[#999999]">
                                <span>{name}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="max-w-screen-xl flex gap-x-[25px] px-5 xl:px-0 py-[50px] mx-auto">
                <div className="relative">
                    <img src={images[0].src} alt={name}/>
                    {on_sale && <div className="w-[45px] h-[45px] flex justify-center items-center text-[#ffffff] bg-[#f14705] rounded-full absolute top-[15px] left-[15px]">Sale</div>}
                    {on_sale && <div className="w-[45px] h-[45px] flex justify-center items-center text-[#ffffff] bg-[#98d8ca] rounded-full absolute top-[75px] left-[15px]">{discount}%</div>}
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-[30px] font-medium">{name}</h3>
                    {on_sale ? (
                        <>
                            <div className="flex flex-row gap-x-4">
                                <p className="text-[30px] leading-[31px] text-[#666666] line-through">£{regular_price}</p>
                                <p className="text-[30px] leading-[31px] text-[#666666]">£{sale_price}</p>
                            </div>
                        </>
                    ) : <p className="text-[30px] leading-[31px] text-[#666666]">£{regular_price}</p>}
                    <div dangerouslySetInnerHTML={{__html: short_description}}></div>
                    <div className="flex gap-x-4 my-4">
                        <div className="w-[120px] flex justify-center items-center border-[1px] border-[#dddddd] relative py-2.5">
                            <button className="absolute w-[24px] leading-[23px] top-1/2 -translate-y-1/2 left-2.5">
                                <LuMinus className="text-[#666666] text-[16px]"/>
                            </button>
                            <input className="w-[50px] text-center placeholder:text-[#000000] focus:outline-0" type="text" placeholder="1"/>
                            <button className="absolute w-[24px] leading-[23px] top-1/2 -translate-y-1/2 right-[4px]">
                                <PiPlus className="text-[#666666] text-[16px]"/>
                            </button>
                        </div>
                        <div>
                            <button className="bg-[#000000] text-[#ffffff] px-[42px] h-[46px] leading-[44px]">Add to cart</button>
                        </div>
                        <div>
                            <button className="group border border-[#dddddd] w-[46px] h-[46px] flex justify-center items-center">
                                <IoMdHeartEmpty className="text-[24px] text-[#666666] group-hover:text-[#dcb14a]"/>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-medium">SKU: <span className="text-[#666666]">{sku}</span></p>
                        <p className="font-medium">Categories: <span className="text-[#666666]">{categories[0]?.slug}</span></p>
                        <p className="font-medium">Tags: <span className="text-[#666666]">{tags[0]?.name}</span></p>
                    </div>
                </div>
            </section>
            <section className="border-[1px] border-t-[#dddddd] border-b-transparent border-x-transparent">
                <Tabs id="product-info"
                      value="tab1"
                      className="max-w-screen-xl mx-auto">
                    <TabsHeader className="bg-transparent">
                        <Tab value="tab1"
                             key="1"
                             className="flex flex-row rounded-none shadow-none"
                             style={{ boxShadow: 'none', borderRadius: '0' }} >
                            <p>Description</p>
                            <RxSlash className="text-[#000000]"/>
                        </Tab>
                        <Tab value="tab2"
                             key="2"
                             className="rounded-none shadow-none">
                            <p>Additional information</p>
                            <RxSlash className="text-[#000000]"/>
                        </Tab>
                        <Tab value="tab3"
                             key="3"
                             className="rounded-none shadow-none">
                            <p>Reviews</p>
                        </Tab>
                    </TabsHeader>
                    <TabsBody>
                        <TabPanel value="tab1"
                                  key="1"
                                  className="grid grid-cols-12 gap-[30px] px-0">
                            <div className="col-span-8">
                                <h2 className="text-[24px] text-[#000000] font-medium mb-[10px]">Description</h2>
                                <div dangerouslySetInnerHTML={{__html: description}}
                                     className="text-[#000000]"></div>
                            </div>
                            <div className="col-span-4">
                                <img src={images[0].src} alt={name}/>
                            </div>
                        </TabPanel>
                        <TabPanel value="tab2" key="2">
                            <p>Content 2</p>
                        </TabPanel>
                    </TabsBody>
                </Tabs>
            </section>
        </>
    )
}