import BlockItemRender from "./BlockItemRender";
import {useEffect, useState} from "react";
import {useLoaderData} from "react-router-dom";

export default function BlocksDefault() {
    const data = useLoaderData();
    const [visibleItemCount, setVisibleItemCount] = useState();

    useEffect(() => {

    })
    console.log(data.posts);

    const handleLoadMore = () => {
        setVisibleItemCount(prevState => prevState + 1);
    }

    return (
        <>
            <section className="mx-auto max-w-screen-xl px-5 py-10 md:py-[70px] xl:px-0">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-[36px] text-[#000000] font-medium capitalize my-0">Our Blog</h2>
                    <div className="w-[70px] h-1 bg-[#dcb14a] mt-[15px] mb-[30px]"></div>
                </div>
                <div className="mx-auto grid max-w-screen-xl grid-cols-1 grid-rows-1 justify-center justify-items-center gap-y-10 md:gap-x-6 md:gap-y-11 lg:grid-cols-2 xl:grid-cols-3">
                    {data.posts?.map((item, i) =>
                        <BlockItemRender
                            key={item.id}
                            {...item}
                            i={i}
                        />
                    )}
                </div>
                <div onClick={handleLoadMore} className="flex w-full items-center justify-center pt-[90px]">
                    <button className="w-max text-[15px] text-[#ffffff] font-normal border-[1px] border-[#000000] bg-[#000000] px-[32px] py-1 my-0">Load more</button>
                </div>
            </section>
        </>
    )
}