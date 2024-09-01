import blocksDefaultsData from "./blocksDefaultsData";
import BlockItemRender from "./BlockItemRender";
import {useState} from "react";
import {GoArrowRight} from "react-icons/go";

export default function BlocksDefault() {
    const [visibleItemCount, setVisibleItemCount] = useState(3);

    const handleLoadMore = () => {
        setVisibleItemCount(prevState => prevState + 3);
    }

    //use optional chaining operator (?.), it means that slice(0, visibleItemCount) will only be called
    // if blocksDefaultsData is not null or undefined.
    // If blocksDefaultsData is null or undefined, the whole expression will return undefined instead of throwing an error.
    return (
        <>
            <section className="max-w-screen-xl py-10 md:py-[70px] px-5 xl:px-0 mx-auto">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-[36px] text-[#000000] font-medium capitalize my-0">Our Blog</h2>
                    <div className="w-[70px] h-1 bg-[#dcb14a] mt-[15px] mb-[30px]"></div>
                </div>
                <div className="max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-rows-1 justify-center justify-items-center gap-y-10 md:gap-y-11 md:gap-x-6 mx-auto">
                    {blocksDefaultsData?.slice(0, visibleItemCount)?.map((item, i) =>
                        <BlockItemRender
                            key={item.id}
                            {...item}
                            i={i}
                        />
                    )}
                </div>
                {visibleItemCount < blocksDefaultsData.length && (
                    <div onClick={handleLoadMore} className="w-full flex justify-center items-center pt-[90px]">
                        <button className="w-max text-[15px] text-[#ffffff] font-normal border-[1px] border-[#000000] bg-[#000000] px-[32px] py-1 my-0">Load more</button>
                    </div>
                )}
            </section>
        </>
    )
}