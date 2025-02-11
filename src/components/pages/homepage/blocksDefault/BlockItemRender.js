import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";

//icons
import {HiPlus} from "react-icons/hi2";
import {RxSlash} from "react-icons/rx";

//api
import {getUsersById} from "../../../../models/userModel";
import {getMediaById} from "../../../../models/mediaModel";

const buttonReadMore = {
    hidden: {opacity: 0, x: 100},
    visible: {opacity: 1, x: 0},
};

const indicatorLine = {
    hidden: {width: 0, backgroundColor: '#cacacf'},
    visible: {width: 70, backgroundColor: '#dcb14a'},
}

const ButtonMotion = ({children}) => {
    return (
        <motion.div
            variants={buttonReadMore}
            transition={{duration: 0.5, ease: "easeOut"}}
        >
            {children}
        </motion.div>
    )
}

const IndicatorMotion = ({children}) => {
    return (
        <motion.div
            variants={indicatorLine}
            style={{width: 0, height: 3, backgroundColor: '#cacaca', position: 'absolute', top: 0}}
            transition={{duration: 0.5, ease: "easeIn"}}
            whileHover={{width: 70, backgroundColor: '#dcb14a'}}
        >
            {children}
        </motion.div>
    )
}

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
            getMediaById(featured_media).then((media) => {
                if (media) {
                    setFeaturedImage(media.source_url);
                }
            })
        }
    }, [featured_media]);

    // get name's user via getUsers api
    useEffect(() => {
        if (author) {
            getUsersById(author).then((user) => {
                setUser(user.name);
            })
        }
    }, [author]);

    return (
        <>
            <motion.div
                initial="hidden"
                whileHover="visible"
            >
                <div className="flex min-w-full flex-col md-devices:min-w-[364px]">
                    <Link to={`/post/${id}`} className="flex h-full flex-col items-center justify-center no-underline">
                        <div>
                            <div className="relative mx-auto flex w-full flex-1 flex-col overflow-hidden md-devices:w-[364px] md:ml-0">
                                <img className="my-0 w-full object-cover h-[206px]" src={featuredImage} alt={title.rendered}/>
                                <ButtonMotion>
                                    <div className="flex items-center font-normal leading-7 bg-[#ffffff] absolute bottom-0 right-0 py-[5px] px-[14px]">
                                        <button className="flex items-center gap-x-2">
                                            <span>Read more</span>
                                            <HiPlus className="text-[#000000] text-[18px]"/>
                                        </button>
                                    </div>
                                </ButtonMotion>
                            </div>
                            <div className="w-full flex-1 flex flex-col justify-center items-center
                                            prose prose-h6:text-[20px] prose-h6:leading-[26px] prose-h6:text-[#09283A] prose-h6:font-medium prose-h6:tracking-[2px] prose-h6:mt-5
                                            prose-p:text-[#09283A] prose-p:text-[14px] prose-p:leading-[22px] prose-p:font-normal prose-p:my-0">
                                <div>
                                    <h6 dangerouslySetInnerHTML={{__html: title.rendered}}></h6>
                                    <div className="w-[70px] h-[3px] relative bg-[#cacaca] my-[15px]">
                                        <IndicatorMotion/>
                                    </div>

                                </div>
                                <div className="flex w-full items-center gap-x-2">
                                    <p>{convertDate(date)}</p>
                                    <RxSlash className="text-[#999999]"/>
                                    <p>{user}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </motion.div>
        </>
    )
}