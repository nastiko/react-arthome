import {Link} from "react-router-dom";
import {GoArrowRight} from "react-icons/go";

export default function DecoCollection({imageUrl, title, discount, bannerText}) {
    return (
        <>
            <div className="relative w-full mx-auto px-[15px]">
                <img className="w-full h-[600px] md:h-[635px] relative object-center object-cover" src={imageUrl} alt={title}/>
                <div className="max-w-screen-xl mx-auto absolute inset-0 flex flex-col justify-center px-5 xl:px-0">
                    <div className="max-w-full w-full lg:w-3/5 px-5 lg:px-0
                                    prose-h6:text-[32px] prose-h6:md:text-[36px] prose-h6:md:leading-8 prose-h6:text-[#000000] prose-h6:font-medium prose-h6:capitalize prose-h6:mb-0
                                    prose-p:text-[16px] prose-p:leading-[26px] prose-p:text-[#000000] prose-p:mb-[50px]">
                        <h6>{title} <span className="text-[#fa0000] uppercase">{discount}</span></h6>
                        <div className="w-[70px] h-1 bg-[#dcb14a] my-[15px]"></div>
                        <p>{bannerText}</p>
                        <div className="w-full flex items-center justify-between sm:justify-start max-w-full sm:gap-x-[25px] md:gap-x-10 mb-[60px]
                                        prose prose-h4:font-['Prata'] prose-h4:text-[25px] prose-h4:md:text-[48px] prose-h4:font-medium prose-h4:my-0">
                            <div className="flex flex-col justify-center items-center">
                                <h4>0</h4>
                                <span className="font-medium uppercase">Days</span>
                            </div>
                            <div>
                                <h4>:</h4>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h4>0</h4>
                                <span className="font-medium uppercase">Hours</span>
                            </div>
                            <div>
                                <h4>:</h4>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h4>0</h4>
                                <span className="font-medium uppercase">Mints</span>
                            </div>
                            <div>
                                <h4>:</h4>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h4>0</h4>
                                <span className="font-medium uppercase">Secs</span>
                            </div>
                        </div>
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