import {Link, useLoaderData, useSearchParams} from "react-router-dom";

//icons
import {RxSlash} from "react-icons/rx";

//components for pages
import ProductCard from "../products/ProductCard";

export default function Products() {
    const products = useLoaderData();
    const [searchParams, setSearchParams] = useSearchParams();


    const page = Number(searchParams.get("page")) || 1;
    const productPerPage = 10;
    console.log(products.length);


    const Pagination = ({productsLength, productPerPage}) => {
        const paginationNumbers = [];

        for (let i = 1; i <= Math.ceil(productsLength / productPerPage); i++) {
            paginationNumbers.push(i);
        }

        return (
            <>
                {paginationNumbers.map((pageNumber) => (
                    <button className="bg-[#f5f5f5] px-[13px] py-[5px]"
                        key={pageNumber}
                        onClick={() => setSearchParams({ page: pageNumber })}>
                        {pageNumber}
                    </button>
                ))}
            </>
        )
    }

    return (
        <>
            <section className="py-[80px]">
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
                <div className="max-w-screen-xl flex justify-center items-center gap-x-4 px-5 xl:px-0 mx-auto my-10">
                   <Pagination
                       productsLength={products.length}
                       productPerPage={productPerPage}
                       currentPage={page}
                   />
                </div>
            </section>
        </>
    )
}