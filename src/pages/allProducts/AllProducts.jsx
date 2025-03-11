import {Link, useLoaderData} from "react-router-dom";
import React, {useCallback, useContext, useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import ContentLoader from "react-content-loader";

//api
import {getProducts} from "../../models/productModel";

//icons
import {RxSlash} from "react-icons/rx";

//components for pages
import ProductCard from "./ProductCard";
import AddedItemPopUp from "../../components/common/AddedItemPopUp";
import {ContextNotificationList} from "../../contextProvider/PopUpAddedToBasketContext";
import {ContextBasketMenu} from "../../contextProvider/BasketMenuContext";

export default function AllProducts() {
    const {notificationList} = useContext(ContextNotificationList);
    const {isOpenBasket} = useContext(ContextBasketMenu);
    const [items, setItems] = useState([]); // Store products
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state
    const [page, setPage] = useState(1); // Page state
    const [hasMore, setHasMore] = useState(true); // If there are more products to load

    const [isLoadingSkeletonCards, setIsLoadingSkeletonCards] = useState(true);

    // "trigger" to load more products when it becomes visible as the user scroll
    const loader = useRef(null);

    const fetchProduct = useCallback(async () => {
        if (isLoading) return; // Avoid multiple calls
        setIsLoading(true);
        setError(null);

        try {
            const data = await getProducts(page, 6);

            setItems(prevItems => [...prevItems, ...data]);
            setPage(prevPage => prevPage + 1);
            setIsLoadingSkeletonCards(false);
            setIsLoading(false);

            if (data.length === 0) {
                setHasMore(false);
            }
        } catch (error) {
            setError("Error fetching products");
        } finally {
            setIsLoading(false);
        }

    }, [isLoading, page]);

    useEffect(() => {
        if (loader.current) {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    fetchProduct();
                }
            }, {threshold: [1]});

            observer.observe(loader.current);
        }

        // START: ON FIRST PAGE LOAD
        setIsLoadingSkeletonCards(true);
        if (!isLoading) { // only to disable double-loading!!
            setIsLoading(true);
            fetchProduct();
        }
        // END: ON FIRST PAGE LOAD
    }, []);


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
                                [...Array(6)].map(() =>
                                    <ContentLoader
                                        key={crypto.randomUUID()}
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
                            ) : (
                                items.map((item, i) =>
                                    <ProductCard
                                        key={crypto.randomUUID()}
                                        {...item}
                                        i={i}
                                    />
                                )
                            )}

                    </div>
                    <div ref={loader} className="max-w-screen-xl flex justify-center items-center px-5 xl:px-0 mx-auto my-4">
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