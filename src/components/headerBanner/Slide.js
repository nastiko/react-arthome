import {Link, useLoaderData} from 'react-router-dom';
import {motion} from "framer-motion";

import {GoArrowRight} from "react-icons/go";

const MotionWrapper = ({children, delay = 0, className = "", isActive}) => {
    return (
        <motion.div
            initial={{opacity: 0, y: 50}}
            animate={isActive ? { opacity: 1, y: 0 } : {opacity: 0}}
            transition={{duration: 1, delay, ease: "easeOut"}}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default function Slide({acf, isActive}) {
    const {slide_id, slide_image_link, slide_title, slide_subtitle, slide_bannertext} = acf;

    return (
        <>
            <div className="relative mx-auto w-full px-[15px]">
                <img className="relative w-full object-cover object-center h-[600px] md:h-[800px]" src={slide_image_link} alt={slide_title}/>
                <div className="absolute inset-0 mx-auto flex max-w-screen-xl flex-col justify-center px-5 xl:px-0">
                    <div className="md-devices:w-1/2 md:w-2/5 px-5 xl:px-0
                                    prose prose-h1:max-w-xs prose-h1:md-devices:max-w-sm prose-h1:text-[34px] prose-h1:md:text-[60px] prose-h1:text-[#000000] prose-h1:font-medium prose-h1:capitalize prose-h1:mb-0
                                    prose-h6:w-20 prose-h6:text-[#dcb14a] prose-h6:font-medium prose-h6:uppercase prose-h6:mb-[5px]
                                    prose-p:max-w-lg prose-p:text-[16px] prose-p:leading-[26px] prose-p:text-[#000000]">
                        <MotionWrapper delay={0} isActive={isActive}>
                            <h6>{slide_subtitle}</h6>
                        </MotionWrapper>
                        <MotionWrapper delay={0.3} isActive={isActive}>
                            <h1>{slide_title}</h1>
                            <div className="w-[70px] h-1 bg-[#dcb14a] my-[15px]"></div>
                        </MotionWrapper>
                        <MotionWrapper delay={0.6} isActive={isActive}>
                            <p>{slide_bannertext}</p>
                        </MotionWrapper>
                        <MotionWrapper delay={0.9} isActive={isActive}>
                            <Link to={`/products/${slide_id}`} className="no-underline">
                                <div className="bg-[#000000] w-max flex items-center gap-x-1 px-[32px] py-1">
                                    <h3 className="text-[15px] text-[#ffffff] font-normal capitalize my-0">Shop now</h3>
                                    <GoArrowRight className="text-[#ffffff]"/>
                                </div>
                            </Link>
                        </MotionWrapper>
                    </div>
                </div>
            </div>
        </>
    )
}