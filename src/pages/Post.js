import { useLoaderData } from "react-router-dom";
import {useEffect, useState} from "react";

//icon
import { RxSlash } from "react-icons/rx";

//api
import {getMedia} from "../api";

export default function Post() {
    const posts = useLoaderData();
    //console.log(posts);
    const [featuredImage, setFeaturedImage] = useState(null);

    function convertDate(dateStr) {
        const dateObj = new Date(dateStr);

        // Define options to format the date
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        return dateObj.toLocaleDateString('en-US', options);
    }

    useEffect(() => {
        if(posts.featured_media) {
            getMedia(posts.featured_media).then((media) => {
                setFeaturedImage(media.guid.rendered);
            })
        }
    },[posts.featured_media]);


    return (
        <>
            <div className="max-w-screen-xl py-[120px] px-5 xl:px-0 mx-auto">
                <div>
                    <img src={featuredImage} alt={posts.title.rendered}/>
                    <h2 className="text-[24px] md:text-[30px] font-medium pt-[25px] mb-[15px]"
                        dangerouslySetInnerHTML={{__html: posts.title.rendered}}></h2>
                    <div>
                       <p>{convertDate(posts.date)}</p>
                        <RxSlash />
                    </div>
                </div>
                <div className="max-w-full prose prose-p:max-w-full prose-p:md:max-w-[810px] prose-p:mx-auto"
                     dangerouslySetInnerHTML={{__html: posts.content.rendered}}></div>
            </div>
        </>
    )
}