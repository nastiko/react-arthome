import BlockItemRender from "./BlockItemRender";
import React, {useState} from "react";
import {useLoaderData} from "react-router-dom";
import {getPosts} from "../../models/postModel";

export default function BlocksDefault() {
    const [posts, setPosts] = useState(useLoaderData().posts);
    const [page, setPage] = useState(2);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');


    const handleLoadMore = async () => {
        try {
            const dataPosts = await getPosts(page, 3);
            setPosts(prevItems => [...prevItems, ...dataPosts]);
            setPage(prevPage => prevPage + 1);

            if (dataPosts.length > 0) {
                setHasMore(false);
            }
        } catch (error) {
            setError("Error fetching products");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <section className="mx-auto max-w-screen-xl px-5 py-10 md:py-[70px] xl:px-0">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-[36px] text-[#000000] font-medium capitalize my-0">Our Blog</h2>
                    <div className="w-[70px] h-1 bg-[#dcb14a] mt-[15px] mb-[30px]"></div>
                </div>
                <div className="mx-auto grid max-w-screen-xl grid-cols-1 grid-rows-1 justify-center justify-items-center gap-y-10 md:gap-x-6 md:gap-y-11 lg:grid-cols-2 xl:grid-cols-3">
                    {posts?.map((item, i) =>
                        <BlockItemRender
                            key={item.id}
                            {...item}
                            i={i}
                        />
                    )}
                </div>
                <div onClick={handleLoadMore} className={`${hasMore ? 'flex' : 'hidden'} w-full items-center justify-center pt-[90px]`}>
                    <button className="w-max text-[15px] text-[#ffffff] font-normal border-[1px] border-[#000000] bg-[#000000] px-[32px] py-1 my-0">Load more</button>
                </div>
                <div className="max-w-screen-xl flex justify-center items-center px-5 xl:px-0 mx-auto my-4">
                    {isLoading && (
                        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-[#cacaca] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                            role="status">
                            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                        </div>
                    )
                    }
                    {error && <p>{error}</p>}
                </div>
            </section>
        </>
    )
}