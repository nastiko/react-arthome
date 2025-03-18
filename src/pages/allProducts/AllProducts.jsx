import {Link} from "react-router-dom";
import React, {useCallback, useContext, useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";

//api
import {getProducts} from "../../models/productModel";

//icons
import {RxSlash} from "react-icons/rx";

//components for pages
import ProductCard from "./ProductCard";
import AddedItemPopUp from "../../components/common/AddedItemPopUp";
import SkeletonLoader from "../allProducts/SkeletonLoader";
import {ContextNotificationList} from "../../contextProvider/PopUpAddedToBasketContext";
import {ContextBasketMenu} from "../../contextProvider/BasketMenuContext";

export default function AllProducts() {
    const {notificationList} = useContext(ContextNotificationList);
    const {isOpenBasket} = useContext(ContextBasketMenu);
    const [items, setItems] = useState([]); // Store products
    const [page, setPage] = useState(1); // Page state
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state
    const [hasMore, setHasMore] = useState(true); // If there are more products to load
    const [isLoadingSkeletonCards, setIsLoadingSkeletonCards] = useState(true);

    // "trigger" to load more products when it becomes visible as the user scroll
    const productsBlock = useRef();

    const loadMoreProducts = async () => {
        if (isLoading) return;
        setIsLoading(true);

        try {
            const data = await getProducts(page, 6);
            if(data.length < 6) setHasMore(false);
            setItems(prevProducts => [...prevProducts, ...data]);
            setIsLoadingSkeletonCards(false);
        } catch (error) {
            setError(error);
            console.error("Error loading products:", error);
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        loadMoreProducts();
    }, [page]);

    const lastProductsRef = useCallback((node) => {
        if (isLoading || !hasMore) return;

        if (productsBlock.current) productsBlock.current.disconnect();

        productsBlock.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                console.log("Intersection detected, increasing page...");
                setPage(prevPage => prevPage + 1);
            }
        }, {threshold: [0.5]});

        if (node) productsBlock.current.observe(node);
    }, [isLoading]);

    return (
        <>
            <section className="relative">
                <section className="bg-[#f4f5f7]">
                    <div className="max-w-screen-xl px-5 xl:px-0 py-[80px] mx-auto">
                        <div className="flex flex-col items-center justify-between md:flex-row">
                            <h1 className="capitalize text-[36px] font-medium mb-[15px] md:mb-0">All products</h1>
                            <ul className="flex items-center gap-x-2 text-[14px] uppercase">
                                <li className="font-medium">
                                    <Link to={`/`}>Home</Link>
                                </li>
                                <li>
                                    <RxSlash className="text-[#999999]"/>
                                </li>
                                <li className="text-[#999999]">
                                    <span>All products</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="py-[80px]">
                    <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-[25px] gap-y-10 px-5 xl:px-0 mx-auto">
                        {isLoadingSkeletonCards ?
                            (
                                [...Array(6)].map((_, index) =>
                                    <SkeletonLoader key={index}/>
                                )
                            ) : (
                                items.map((item, i) =>
                                    <ProductCard
                                        key={crypto.randomUUID()}
                                        {...item}
                                    />
                                )
                            )}
                    </div>
                    <div ref={lastProductsRef} className="max-w-screen-xl flex justify-center items-center px-5 xl:px-0 mx-auto my-4">
                        {isLoading &&
                            <div
                                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-[#cacaca] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                role="status">
                                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                                    Loading...
                                </span>
                            </div>
                        }
                        {error && <p>{error}</p>}
                    </div>
                </section>
                <div className={`fixed top-2.5 right-0 ${isOpenBasket ? 'z-[9]' : 'z-10'}`}>
                    {Object.keys(notificationList) && Object.keys(notificationList).map((key) => {
                        return (
                            <motion.div
                                key={notificationList[key].uuid}
                                initial={{transform: "translateX(-100px)"}}
                                animate={{transform: "translateX(0px)"}}
                                transition={{type: "spring"}}
                            >
                                <AddedItemPopUp
                                    uuid={notificationList[key].uuid}
                                    id={notificationList[key].id}
                                    name={notificationList[key].name}
                                />
                            </motion.div>
                        )
                    })
                    }
                </div>
            </section>

        </>
    )
}