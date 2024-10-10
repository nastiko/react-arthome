import {Link, useLoaderData} from "react-router-dom";
import {RxSlash} from "react-icons/rx";
import ProductCard from "../products/ProductCard";
import {useState} from "react";

export default function Products() {
    const products = useLoaderData();
    console.log(products.length);

    const [currentPage, setCurrentPage] = useState(1);

    const Pagination = ({productPerPage, length}) => {
        const paginationNumbers = [];

        for (let i = 1; i <= Math.ceil(length / productPerPage) ; i++) {
            paginationNumbers.push(i);
        }

        return (
            <>
                {paginationNumbers.map((pageNumber) => (
                    <button key={pageNumber}>{pageNumber}</button>
                ))}
            </>
        )
    }

    const handlePagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <>
            <section className="bg-[#f4f5f7] py-[80px]">
                <div className="max-w-screen-xl px-5 xl:px-0 mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <h1 className="text-[36px] capitalize mb-[15px] md:mb-0">All products</h1>
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
                <div className="max-w-screen-xl grid grid-cols-3 gap-x-4 px-5 xl:px-0 mx-auto">
                    {products.map((item, index) =>
                        <ProductCard
                            key={item.id}
                            {...item}
                        />
                    )}
                </div>
                <div>
                    <Pagination
                        length={products.length}
                        productPerPage={5}
                        handlePagination={handlePagination}
                    />


                </div>
            </section>
        </>
    )
}