import {useLoaderData} from "react-router-dom";
import NotFound from "./NotFound";
import {extractAboutUsData} from "../models/pagesModel";

// icons
import {RiShoppingBag4Line} from "react-icons/ri";
import {ImPaypal} from "react-icons/im";
import {SlCursor} from "react-icons/sl";
import {MdOutlineTimer} from "react-icons/md";

export default function AboutUs() {
    let data = useLoaderData();
    data = extractAboutUsData(data);

    return (
        <>
            {data ?
                (<section className="max-w-screen-xl px-5 xl:px-0 py-[120px] mx-auto">
                    <img className="w-full" src={data.featuredImage} alt={data.featuredImageAlt} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] my-[60px]">
                        <div className="flex prose prose-h2:text-[18px] prose-h2:leading-9 prose-h2:font-medium prose-h2:mt-0 prose-p:-ml-[50px]">
                            <RiShoppingBag4Line className="shrink-0 text-[36px] mr-[20px]"/>
                            <div dangerouslySetInnerHTML={{__html: data.qualityAssurance[0]}}></div>
                        </div>
                        <div className="flex prose prose-h2:text-[18px] prose-h2:leading-9 prose-h2:font-medium prose-h2:mt-0 prose-p:-ml-[50px]">
                            <ImPaypal className="shrink-0 text-[36px] mr-[20px]"/>
                            <div dangerouslySetInnerHTML={{__html: data.qualityAssurance[1]}}></div>
                        </div>
                        <div className="flex prose prose-h2:text-[18px] prose-h2:leading-9 prose-h2:font-medium prose-h2:mt-0 prose-p:-ml-[50px]">
                            <SlCursor className="shrink-0 text-[36px] mr-[20px]"/>
                            <div dangerouslySetInnerHTML={{__html: data.qualityAssurance[2]}}></div>
                        </div>
                        <div className="flex prose prose-h2:text-[18px] prose-h2:leading-9 prose-h2:font-medium prose-h2:mt-0 prose-p:-ml-[50px]">
                            <MdOutlineTimer className="shrink-0 text-[36px] mr-[20px]"/>
                            <div dangerouslySetInnerHTML={{__html: data.qualityAssurance[3]}}></div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-8">
                        <div className="max-w-full md:max-w-2xl prose prose-h2:text-[24px] prose-h2:font-medium prose-h2:mt-0" dangerouslySetInnerHTML={{__html: data.bannerText}}></div>
                        <div className="w-full flex flex-col justify-around divide-y-[3px] divide-black">
                            <div className="min-h-[50px]"></div>
                            <div className="min-h-[50px]"></div>
                            <div className="min-h-[50px]"></div>
                            <div className="min-h-[50px]"></div>
                        </div>
                    </div>
                    <div>
                        {data.gallery.map((item) => <img key={item.id} src={item.image} alt={item.alt} /> )}
                    </div>
                </section>)
                :
                (<NotFound/>)
            }
        </>
    )
}