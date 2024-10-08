import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

//icons
import {HiPlus} from "react-icons/hi2";
import {RxSlash} from "react-icons/rx";

//api
import {getMedia, getUsers} from "../../api";

export default function BlockItemRender({featured_media, title, date, author, id}) {
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

    // get Featured media via getMedia api
    useEffect(() => {
        if (featured_media) {
            getMedia(featured_media).then((media) => {
                if(media) {
                    setFeaturedImage(media.source_url);
                }
            })
        }
    }, [featured_media]);

    // get name's user via getUsers api
    useEffect(() => {
        if(author) {
            getUsers(author).then((user) => {
                setUser(user.name);
            })
        }
    },[author]);

    return (
        <>
            <div className="flex flex-col min-w-full md-devices:min-w-[364px]">
                <Link to={`/post/${id}`} className="h-full flex flex-col justify-center items-center no-underline">
                    <div>
                        <div className="flex-1 w-full md-devices:w-[364px] flex flex-col relative md:ml-0 mx-auto">
                            <img className="w-full h-[206px] object-cover my-0" src={featuredImage} alt={title.rendered}/>
                            <div className="flex items-center font-normal leading-7 bg-[#ffffff] absolute right-0 py-[5px] px-[14px]">
                                <button className="flex items-center gap-x-2">
                                    <span>Read more</span>
                                    <HiPlus className="text-[#000000] text-[18px]"/>
                                </button>
                            </div>
                        </div>
                        <div className="w-full flex-1 flex flex-col justify-center items-center
                            prose prose-h6:text-[20px] prose-h6:leading-[26px] prose-h6:text-[#09283A] prose-h6:font-medium prose-h6:tracking-[2px] prose-h6:mt-5
                            prose-p:text-[#09283A] prose-p:text-[14px] prose-p:leading-[22px] prose-p:font-light prose-p:my-0">
                            <div>
                                <h6 dangerouslySetInnerHTML={{__html: title.rendered}}></h6>
                                <div className="w-[70px] h-1 bg-[#dcb14a] my-[15px]"></div>
                            </div>
                            <div className="w-full flex items-center gap-x-2">
                                <p>{convertDate(date)}</p>
                                <RxSlash className="text-[#999999]"/>
                                <p>{user}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}