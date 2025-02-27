import {useLoaderData} from "react-router-dom";
import {useEffect, useState} from "react";

//icon
import {RxSlash} from "react-icons/rx";

//api
import { getMediaById } from "../../models/mediaModel";
import { getUsersById } from "../../models/userModel";

export default function Post() {
    const data = useLoaderData();
    const [featuredImage, setFeaturedImage] = useState(null);
    const [user, setUser] = useState(null);

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


    /**
     * get Featured media via getMedia api
     */
    useEffect(() => {
        if (data.featured_media) {
            getMediaById(data.featured_media).then((media) => {
                if(media) {
                    setFeaturedImage(media.source_url);
                }
            })
        }
    }, [data.featured_media]);


    /**
     * get name's user via getUsers api
     */
    useEffect(() => {
        if(data.author) {
            getUsersById(data.author).then((user) => {
                setUser(user.name);
            })
        }
    }, [data.author]);

    return (
        <>
            <div className="mx-auto max-w-screen-xl px-5 py-[120px] xl:px-0">
                <div>
                    <img src={featuredImage} alt={data.title.rendered}/>
                    <h2 className="font-medium text-[24px] pt-[25px] mb-[15px] md:text-[30px]"
                        dangerouslySetInnerHTML={{__html: data.title.rendered}}></h2>
                    <div className="mx-auto flex w-full items-center gap-x-2 max-w-[810px] mb-[15px]">
                        <p className="text-[14px]">{convertDate(data.date)}</p>
                        <RxSlash className="text-[#999999]" />
                        <p className="text-[14px]">{user}</p>
                    </div>
                </div>
                <div id="post-main-content"
                     className="max-w-full prose prose-p:max-w-full first:prose-p:md:max-w-[810px] first:prose-p:text-[#000000] prose-p:text-[#ff00ff] first:prose-p:mx-auto
                                prose-blockquote:border-0 prose-blockquote:px-0
                                prose-figure:flex prose-figure:gap-x-[30px] prose-figure:my-0"
                     dangerouslySetInnerHTML={{__html: data.content.rendered}}></div>
            </div>
        </>
    )
}