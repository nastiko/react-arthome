import {Link} from "react-router-dom";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {IoCloseSharp} from "react-icons/io5";

export default function AddToCart() {
    return (
        <>
            <div>
                <img/>
                <div className="flex justify-between">
                    <div className="flex flex-col justify-between">
                        <Link><h6>Title</h6></Link>
                        <div className="h-[30px] flex justify-center items-center border-[1px] border-[#dddddd] relative py-2.5">
                            <button className="absolute w-[12px] leading-[23px] top-1/2 -translate-y-1/2 left-2.5">
                                <AiOutlineMinus/>
                            </button>
                            <input className="w-[100px] text-center placeholder:text-[#000000] focus:outline-0" type="text" placeholder="1"/>
                            <button className="absolute w-[12px] leading-[23px] top-1/2 -translate-y-1/2 right-2.5">
                                <AiOutlinePlus/>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-end">
                        <IoCloseSharp className="text-[20px] text-[#cacaca] cursor-pointer"/>
                        <p className="my-0">£125</p>
                    </div>
                </div>
            </div>
        </>
    )
}