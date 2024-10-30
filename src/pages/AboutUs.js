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
    console.log('data', data);

    return (
        <>
            {data ?
                (<section className="max-w-screen-xl px-5 xl:px-0 py-[120px] mx-auto">
                    <img src={data.featuredImage} />
                   {/* <div>
                        <div>
                            <div dangerouslySetInnerHTML={{__html: item?.[3].innerBlocks[0].rendered}}></div>
                            <RiShoppingBag4Line/>
                        </div>
                        <div>
                            <div dangerouslySetInnerHTML={{__html: item?.[3].innerBlocks[1].rendered}}></div>
                            <ImPaypal/>
                        </div>
                        <div>
                            <div dangerouslySetInnerHTML={{__html: item?.[3].innerBlocks[2].rendered}}></div>
                            <SlCursor/>
                        </div>
                        <div>
                            <div dangerouslySetInnerHTML={{__html: item?.[3].innerBlocks[3].rendered}}></div>
                            <MdOutlineTimer/>
                        </div>
                    </div>
                    <div>
                        <div dangerouslySetInnerHTML={{__html: item?.[1].rendered}}></div>
                    </div>*/}
                </section>)
                :
                (<NotFound/>)
            }
        </>
    )
}