import {Link} from 'react-router-dom';

import {GoArrowRight} from "react-icons/go";

export default function Slide({imageUrl, titleImg, subTitle, heading, bannerText}) {
    return (
        <>
            <div className="relative w-full mx-auto">
                <img className="w-full h-[416px] md:h-[800px] relative object-center object-cover" src={imageUrl} alt={titleImg}/>
                <div className="max-w-screen-xl mx-auto absolute inset-0 flex flex-col justify-center px-5 xl:px-0">
                    <div className="max-w-full md-devices:w-1/2 md:w-2/5
                                    prose prose-h1:text-[34px] prose-h1:md:text-[60px] prose-h1:text-[#000000] prose-h1:font-medium prose-h1:capitalize prose-h1:mb-0
                                    prose-h6:w-20 prose-h6:text-[#dcb14a] prose-h6:font-medium prose-h6:uppercase prose-h6:mb-[5px]
                                    prose-p:text-[16px] prose-p:leading-[26px] prose-p:text-[#000000]">
                        <h6>{subTitle}</h6>
                        <h1>{heading}</h1>
                        <div className="w-[70px] h-1 bg-[#dcb14a] my-[15px]"></div>
                        <p>{bannerText}</p>
                        <Link to="/products" className="no-underline">
                            <div className="bg-[#000000] w-max flex items-center gap-x-1 px-[32px] py-1">
                                <h3 className="text-[15px] text-[#ffffff] font-normal capitalize my-0">Shop now</h3>
                                <GoArrowRight className="text-[#ffffff]"/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}