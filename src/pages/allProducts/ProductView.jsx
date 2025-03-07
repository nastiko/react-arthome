import React, {useContext, useState} from "react";
import {Link, useLoaderData} from "react-router-dom";
import {RxSlash} from "react-icons/rx";

import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

import {ContextFavouritesCart} from "../../contextProvider/FavouritesCartContext";
import {ContextCart} from "../../contextProvider/CartContext";

// icons
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {IoMdHeartEmpty, IoMdHeart} from "react-icons/io";
import {MdOutlineStarPurple500} from "react-icons/md";

export default function ProductView() {
    const product = useLoaderData();
    const {id, images, sale_price, regular_price, on_sale, name, short_description, sku, categories, tags, description, weight, dimensions, stock_quantity} = product;

    const discount = Math.ceil((regular_price - sale_price) / regular_price * 100);

    const {favouriteItems, ifExists} = useContext(ContextFavouritesCart);
    const {onAddToCart, cartItems, setCartItems, handleIncreaseQty, handleDecreaseQty, getCartItem} = useContext(ContextCart)
    const isFavourite = favouriteItems.some(item => item.id === id);

    //tabs
    const [activeTab, setActiveTab] = useState('tab1');
    const toggleIsActive = (tab) => {
        setActiveTab(tab);
    }

    const onAddToCartClick = (quantity) => {
        onAddToCart({id, images, name, regular_price, sale_price, stock_quantity, quantity});
    }

    //qty
    const [quantity, setQuantity] = useState(1);
    const increaseQty = (id) => {
        setQuantity(prev => prev === stock_quantity ? stock_quantity : prev + 1);
    }

    const decreaseQty = () => {
        setQuantity(prev => prev <= 1 ? 1 : prev - 1);
    }

    const onClickFavouriteCard = () => {
        ifExists({id, images, name, regular_price, sale_price, on_sale});
    }

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
            <section className="max-w-screen-xl grid lg:grid-cols-2 gap-[25px] px-5 xl:px-0 py-[50px] mx-auto">
                <div className="w-full flex justify-center items-center">
                    <div className="relative">
                        <img src={images[0].src} alt={name}/>
                        {on_sale && <div className="w-[45px] h-[45px] flex justify-center items-center text-[#ffffff] bg-[#f14705] rounded-full absolute top-[15px] left-[15px]">Sale</div>}
                        {on_sale && <div className="w-[45px] h-[45px] flex justify-center items-center text-[#ffffff] bg-[#98d8ca] rounded-full absolute top-[75px] left-[15px]">{discount}%</div>}
                    </div>
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
                    <div className="flex flex-col">
                        <div className="md:h-[46px] grid grid-cols-3 md:grid-cols-[150px_162px_1fr] grid-rows-1 grid-flow-row-dense gap-x-4 mt-4 mb-2">
                            <div className="h-[46px] flex justify-center items-center border-[1px] border-[#dddddd] relative py-2.5">
                                <button onClick={decreaseQty} className="absolute w-[24px] leading-[23px] top-1/2 -translate-y-1/2 left-2.5">
                                    <AiOutlineMinus className="text-[#000000]"/>
                                </button>
                                <input onChange={(e) => e.target.value} className="w-[50px] text-center placeholder:text-[#000000] focus:outline-0" type="text" name="quantity" value={quantity}/>
                                <button onClick={increaseQty} className="absolute w-[24px] leading-[23px] top-1/2 -translate-y-1/2 right-[4px]">
                                    <AiOutlinePlus className='text-[#000000]'/>
                                </button>
                            </div>
                            <div onClick={() => onAddToCartClick(quantity)} className="col-start-1 row-start-2 col-span-3 md:row-auto md:col-auto mt-8 md:mt-0">
                                <button className="w-full bg-[#000000] text-[#ffffff] px-[42px] h-[46px] leading-[44px]">Add to cart</button>
                            </div>
                            <div className="col-start-2 row-start-1 md:row-auto md:col-auto">
                                <button onClick={onClickFavouriteCard} className="group border border-[#dddddd] w-[46px] h-[46px] flex justify-center items-center">
                                    {isFavourite ?
                                        (<IoMdHeart className={`w-[22px] h-[22px] text-[16px] text-[#dcb14a]`}/>)
                                        :
                                        (<IoMdHeartEmpty className={`w-[22px] h-[22px] text-[16px] text-[#000000] group-hover/color:text-[#dcb14a]`}/>)
                                    }
                                </button>
                            </div>
                        </div>
                        {quantity === stock_quantity && (
                            <p className="text-[12px] text-[#ff3860]">We have max {stock_quantity} items in our stock.</p>
                        )}
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
                      className="max-w-screen-xl py-[95px] px-5 xl:px-0 mx-auto">
                    <TabsHeader className="flex items-center bg-transparent border-[1px] border-b-[#dddddd] border-t-transparent border-x-transparent rounded-none z-0 px-0 pb-5">
                        <Tab value="tab1"
                             key="1"
                             id="tab"
                             onClick={() => toggleIsActive('tab1')}>
                            <p className={activeTab === 'tab1' ? 'text-[#dcb14a]' : 'text-[#000000]'}>Description</p>
                            <div className="mx-[2px] md:mx-4">
                                <RxSlash className={activeTab === 'tab1' ? 'text-[#dcb14a]' : 'text-[#000000]'}/>
                            </div>
                        </Tab>
                        <Tab value="tab2"
                             key="2"
                             id="tab"
                             onClick={() => toggleIsActive('tab2')}>
                            <p className={activeTab === 'tab2' ? 'text-[#dcb14a]' : 'text-[#000000]'}>Additional information</p>
                            <div className="mx-[2px] md:mx-4">
                                <RxSlash className={activeTab === 'tab2' ? 'text-[#dcb14a]' : 'text-[#000000]'}/>
                            </div>
                        </Tab>
                        <Tab value="tab3"
                             key="3"
                             id="tab"
                             onClick={() => toggleIsActive('tab3')}>
                            <p className={activeTab === 'tab3' ? 'text-[#dcb14a]' : 'text-[#000000]'}>Reviews</p>
                        </Tab>
                    </TabsHeader>
                    <TabsBody>
                        <TabPanel value="tab1"
                                  key="1"
                                  className="grid grid-cols-1 lg:grid-cols-12 justify-items-center items-center gap-[30px] px-0 pt-[30px] pb-0">
                            <div className="lg:col-span-7 xl:col-span-8 xl:mr-[30px]">
                                <h2 className="text-[24px] text-[#000000] font-medium mb-[10px]">Description</h2>
                                <div dangerouslySetInnerHTML={{__html: description}}
                                     className="text-[#000000] font-normal"></div>
                            </div>
                            <div className="sm:w-[360px] lg:w-full lg:col-span-5 xl:col-span-4">
                                <img className="w-full" src={images[0].src} alt={name}/>
                            </div>
                        </TabPanel>
                        <TabPanel value="tab2"
                                  key="2"
                                  className="px-0 pt-[30px] pb-0">
                            <div>
                                <p className="text-[#000000] font-medium mb-3.5">Weight: <span className="font-normal">{weight} kg</span></p>
                                <div className="prose prose-p:text-[#000000] prose-p:my-0 flex gap-1">
                                    <p className="font-medium">Dimensions:</p>
                                    <div className="flex gap-2">
                                        <p className="font-normal">{dimensions?.height}</p>
                                        <p className="font-normal">x</p>
                                        <p className="font-normal">{dimensions?.length}</p>
                                        <p className="font-normal">x</p>
                                        <p className="font-normal">{dimensions?.width}</p>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value="tab3"
                                  key="3" className="px-0 pt-[30px] pb-0">
                            <h2 className="text-[26px] text-[#000000] font-medium">Be the first to review <span>"{name}"</span></h2>
                            <p className="text-[#000000] font-normal mb-2">Your rating</p>
                            <ul className="flex mb-6">
                                <li>
                                    <MdOutlineStarPurple500 className="text-[#f5a623]"/>
                                </li>
                                <li>
                                    <MdOutlineStarPurple500 className="text-[#f5a623]"/>
                                </li>
                                <li>
                                    <MdOutlineStarPurple500 className="text-[#f5a623]"/>
                                </li>
                                <li>
                                    <MdOutlineStarPurple500 className="text-[#f5a623]"/>
                                </li>
                                <li>
                                    <MdOutlineStarPurple500 className="text-[#f5a623]"/>
                                </li>
                            </ul>
                            <form action="#">
                                <label className="flex flex-col text-[#000000] font-normal">
                                    Your review *
                                    <textarea name="postContent"
                                              rows={4}
                                              cols={40}
                                              className="border-[1px] border-[#dddddd] p-2.5 mt-1 focus:outline-0"
                                    />
                                </label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-6 sm:my-10">
                                    <label className="w-full flex flex-col text-[#000000] font-normal">
                                        Name *
                                        <input name="postTitle"
                                               className="border-[1px] border-[#dddddd] p-2.5 mt-1 focus:outline-0"/>
                                    </label>
                                    <label className="w-full flex flex-col text-[#000000] font-normal">
                                        Email *
                                        <input name="postEmail"
                                               className="border-[1px] border-[#dddddd] p-2.5 mt-1 focus:outline-0"/>
                                    </label>
                                </div>
                                <button className="bg-[#000000] text-[#ffffff] px-[28px] py-1">Submit</button>
                            </form>
                        </TabPanel>
                    </TabsBody>
                </Tabs>
            </section>
        </>
    )
}