import {Link} from 'react-router-dom';

//icons
import {GoArrowRight} from "react-icons/go";

export default function FeaturedProductRender({subTitle, title, bannerText, decorText, decorTextSize, imageUrl, price, i}) {
    const isEven = i % 2 !== 0;

    const decorTextClass = {
        md: 'text-[40px] 2xl:text-[70px]',
        xl: 'text-[80px] 2xl:text-[150px]'
    }[decorTextSize] || 'text-[48px]';

    return (
        <>
            <div className="relative">
                <div className="max-w-screen-xl relative z-[2] mx-auto">
                    <Link to="/product" className="group grid grid-cols-1 md:grid-cols-2 grid-rows-1 items-center gap-x-16 gap-y-6 pt-[120px] px-5 xl:px-0">
                        <div className={`${isEven ? 'order-1 md:order-2' : 'order-2 md:order-1'} w-full flex justify-center transition-all group-hover:scale-105`}>
                            <img src={imageUrl} alt={title}/>
                        </div>
                        <div className={`${isEven ? 'order-1' : 'order-2'}
                                max-w-full
                                prose prose-h2:text-[36px] prose-h2:text-[#000000] prose-h2:font-medium prose-h2:capitalize prose-h2:group-hover:text-[#dcb14a] prose-h2:my-0
                                prose-h6:text-[14px] prose-h6:leading-5 prose-h6:text-[#c8c6cb] prose-h6:font-medium prose-h6:uppercase prose-h6:mb-[5px]
                                prose-p:text-[16px] prose-p:leading-[22px] prose-p:text-[#000000] prose-p:font-light`}>
                            <h6>{subTitle}</h6>
                            <h2>{title}</h2>
                            <div className="w-[70px] h-1 bg-[#dcb14a] mt-[15px] mb-[30px]"></div>
                            <div className="mb-6">
                                {bannerText}
                            </div>
                            <div className="">
                                <div className="w-max group/button cursor-pointer py-2">
                                    <div className="group no-underline">
                                        <div className="w-max flex items-center gap-x-1 border-[1px] border-[#000000] group-hover/button:bg-[#000000] px-[32px] py-1">
                                            <h3 className="text-[15px] text-[#000000] font-normal group-hover/button:text-[#ffffff] my-0">Only £<span>{price}</span></h3>
                                            <GoArrowRight className="text-[#000000] group-hover/button:text-[#ffffff]"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={`hidden lg:block absolute bottom-0 leading-none text-[#F5F4F7] font-semibold z-[1] ${isEven ? 'left-0' : 'right-0'} ${decorTextClass}`}>{decorText}</div>
            </div>

        </>
    )
}