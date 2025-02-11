import {extractNotFoundData} from "../../../models/pagesModel"
import {Link, useLoaderData} from "react-router-dom";

// icons
import {GoArrowRight} from "react-icons/go";

export default function NotFound() {
    let data = useLoaderData();
    data = extractNotFoundData(data);

    return (
        <>
            <div className="max-w-screen-xl mx-auto">
                <img className="w-full" src={data.featuredImage} alt={data.featuredImageAlt}/>
                <div className="w-full flex justify-center items-center">
                    <Link to="/" className="w-max cursor-pointer py-2 group/button">
                        <div className="no-underline group">
                            <div className="w-max flex items-center gap-x-1 border-[1px] border-[#000000] group-hover/button:bg-[#000000] px-[32px] py-1">
                                <h3 className="text-[14px] text-[#000000] font-normal uppercase group-hover/button:text-[#ffffff] my-0">Back to home</h3>
                                <GoArrowRight className="text-[#000000] group-hover/button:text-[#ffffff]"/>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}