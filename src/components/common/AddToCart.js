import {Link} from "react-router-dom";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {IoCloseSharp} from "react-icons/io5";

export default function AddToCart({images, name, regular_price, sale_price}) {
    return (
        <>
            <div>
                <img className="h-[72px] w-[72px] border-[1px] border-[#868686]" src={images[0]?.src} alt={name}/>
                <div className="flex justify-between">
                    <div className="flex flex-col justify-between">
                        <Link><h6>{name}</h6></Link>
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
                        <p className="my-0">£{sale_price ? sale_price : regular_price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}