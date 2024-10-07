import {Link} from "react-router-dom";

//icons
import {HiPlus} from "react-icons/hi2";
import {RxSlash} from "react-icons/rx";

export default function BlockItemRender({title, date}) {
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

    // get name's user via getUsers api
    useEffect(() => {
        if(posts.author) {
            getUsers(posts.author).then((user) => {
                setUser(user.name);
            })
        }
    }, [posts.author]);
    return (
        <>
            <div className="flex flex-col min-w-full md-devices:min-w-[364px]">
                <Link to="/{id}" className="h-full flex flex-col justify-center items-center no-underline">
                    <div>
                        <div className="flex-1 w-full md-devices:w-[364px] flex flex-col relative md:ml-0 mx-auto">
                            <img className="w-full h-[206px] object-cover my-0" src="#" alt="Test"/>
                            <div className="flex items-center font-normal leading-7 bg-white absolute right-0 py-[5px] px-[14px]">
                                <Link to="/{id}" className="flex items-center gap-x-2">
                                    <span>Read more</span>
                                    <HiPlus className="text-[#000000] text-[18px]"/>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full flex-1 flex flex-col justify-center items-center
                            prose prose-h6:text-[#09283A] prose-h6:font-light prose-h6:tracking-[2px]
                            prose-p:text-[#09283A] prose-p:text-[16px] prose-p:leading-[22px] prose-p:font-light prose-p:my-3.5">
                            <div>
                                <h6 className="text-[20px] leading-[26px] mt-5">{title.rendered}</h6>
                                <div className="w-[70px] h-1 bg-[#dcb14a] mt-[15px] mb-[30px]"></div>
                            </div>
                            <div className="w-full flex items-center gap-x-2">
                                <p className="text-[14px]">{convertDate(date)}</p>
                                <RxSlash className="text-[#999999]"/>
                                <p className="text-[14px]">Test</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}