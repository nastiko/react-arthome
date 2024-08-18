import {Link} from "react-router-dom";

export default function BlockItemRender({sampleUrl, title}) {
    return (
        <>
            <div className="flex flex-col min-w-full md-devices:min-w-[306px]">
                <Link to="/{id}" className="h-full flex flex-col justify-center items-center no-underline">
                    <div className="flex-1 min-w-full md-devices:min-w-[306px] flex flex-col justify-center items-center md:ml-0 mx-auto">
                        <img className="w-full h-[206px] object-cover my-0" src={sampleUrl}
                             alt={title}/>
                        <div className="w-full flex-1 flex flex-col justify-center items-center
                            prose prose-h6:text-[#09283A] prose-h6:text-[20px] prose-h6:leading-[26px] prose-h6:font-light prose-h6:tracking-[2px] prose-h6:mt-5
                            prose-p:text-[#09283A] prose-p:text-[16px] prose-p:leading-[22px] prose-p:font-light prose-p:my-3.5">
                            <div>
                                <h6>{title}</h6>
                                <div className="w-[70px] h-1 bg-[#dcb14a] mt-[15px] mb-[30px]"></div>
                            </div>
                            <div>
                                <h6></h6>

                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}