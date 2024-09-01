import {Link} from "react-router-dom";

//icons
import {HiPlus} from "react-icons/hi2";

export default function BlockItemRender({sampleUrl, title, date, author, tabs}) {
    return (
        <>
            <div className="flex flex-col min-w-full md-devices:min-w-[364px]">
                <Link to="/{id}" className="h-full flex flex-col justify-center items-center no-underline">
                    <div>
                        <div className="flex-1 w-full md-devices:w-[364px] flex flex-col relative md:ml-0 mx-auto">
                            <img className="w-full h-[206px] object-cover my-0" src={sampleUrl} alt={title}/>
                            <div className="flex items-center font-normal leading-7 bg-white absolute right-0 py-[5px] px-[14px]">
                                <Link to="/" className="flex items-center gap-x-2">
                                    <span>Read more</span>
                                    <HiPlus className="text-[#000000] text-[18px]"/>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full flex-1 flex flex-col justify-center items-center
                            prose prose-h6:text-[#09283A] prose-h6:font-light prose-h6:tracking-[2px]
                            prose-p:text-[#09283A] prose-p:text-[16px] prose-p:leading-[22px] prose-p:font-light prose-p:my-3.5">
                            <div>
                                <h6 className="text-[20px] leading-[26px] mt-5">{title}</h6>
                                <div className="w-[70px] h-1 bg-[#dcb14a] mt-[15px] mb-[30px]"></div>
                            </div>
                            <div className="w-full flex items-center gap-x-2">
                                <h6 className="text-[14px] my-0">{date}</h6>
                                <span className="text-[#999999]"> / </span>
                                <h6 className="text-[14px] my-0">{author}</h6>
                                <span className="text-[#999999]"> / </span>
                                <h6 className="text-[14px] my-0"><span className="text-[#999999]">in</span> {tabs}</h6>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}