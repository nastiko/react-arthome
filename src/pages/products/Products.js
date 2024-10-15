import {Link, useLoaderData} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

//icons
import {RxSlash} from "react-icons/rx";

//components for pages
import ProductCard from "../products/ProductCard";
import {getProducts} from "../../api";

export default function Products() {
    const products = useLoaderData();
    console.log(products);

    const [items, setItems] = useState(products); // Store products
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state
    const [page, setPage] = useState(2); // Page state
    const [hasMore, setHasMore] = useState(true); // If there are more products to load

    // "trigger" to load more products when it becomes visible as the user scroll
    const loader = useRef(null);

    const fetchProduct = async () => {
        if (isLoading) return; // Avoid multiple calls
        setIsLoading(true);
        setError(null);

        try {
            console.log('page:',page);
            const data = await getProducts(page, 10);
            setItems(prevItems => [...prevItems, ...data]);
            setPage(prevPage => prevPage + 1);
            if(data.length === 0) {setHasMore(false);}

        } catch (error) {
            setError("Error fetching products");
        }
    }

    // Observer to detect when the loader (at the bottom) is visible
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting && hasMore) {
                fetchProduct();
            }
        }, {threshold: 1.0});

        if (loader.current) {
            observer.observe(loader.current);
        }

        return () => {
            if (loader.current) {
                observer.unobserve(loader.current);
            }
        };
    }, [fetchProduct, hasMore, loader]);

    return (
        <>
            <section className="py-[80px]">
                <div className="mx-auto max-w-screen-xl px-5 xl:px-0">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <h1 className="capitalize text-[36px] mb-[15px] md:mb-0">All products</h1>
                        <ul className="flex items-center gap-x-2">
                            <li>
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
                <div className="mx-auto grid max-w-screen-xl grid-cols-3 gap-x-4 px-5 xl:px-0">
                    {items.map((item, index) =>
                        <ProductCard
                            key={item.id}
                            {...item}
                        />
                    )}
                </div>
                <div ref={loader}>
                    {isLoading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                </div>
            </section>
        </>
    )
}