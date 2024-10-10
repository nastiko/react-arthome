import {Input} from "@material-tailwind/react";
import {Link} from "react-router-dom";

//icons
import {IoSearchOutline} from "react-icons/io5";
import {IoMdHeartEmpty} from "react-icons/io";
import {IoBagHandleOutline} from "react-icons/io5";

//logo
import Logo from "../image/logo.png";
import {useLocation} from "react-router-dom";

export default function Header() {
    let location = useLocation();
    const isProductPage = location.pathname.includes("/products");
    //const isSpecialPage = ["/products", "/about", "/contact"].some(path => location.pathname.includes(path));


    return (
        <>
            <header className={` h-[90px] mx-[15px] mt-[15px] ${isProductPage ? 'bg-[#ffffff]' : 'bg-[#f4f5f7]'}`}>
                <nav className="max-w-screen-xl grid grid-cols-2 lg:grid-cols-3 lg:justify-items-center items-center py-5 px-5 2xl:px-0 mx-auto">
                    <div className="hidden lg:flex w-full flex-col gap-6 relative">
                        <Input className="focus:border-b-[#dcb14a] placeholder:text-[16px] px-2.5 pr-10" variant="static" placeholder="Search Anything..."/>
                        <IoSearchOutline className="absolute top-0 right-0 text-[20px] mt-3.5 mr-2.5"/>
                    </div>
                    <div className="w-[120px] h-11 flex items-center">
                        <Link className="" to="/">
                            <img src={Logo} alt="Logo" className="w-full"/>
                        </Link>
                    </div>
                    <div className="w-full flex justify-end gap-x-[35px]">
                        <Link to="/products">All Products</Link>
                        <Link className="relative group cursor-pointer" to="/like">
                            <IoMdHeartEmpty className="text-[24px] group-hover:text-[#dcb14a]"/>
                            <span className="text-[12px] group-hover:text-[#ffffff] bg-[#dcb14a] rounded-full absolute -bottom-[9px] -right-[9px] px-1.5">1</span>
                        </Link>
                        <div className="relative group cursor-pointer">
                            <IoBagHandleOutline className="text-[24px] group-hover:text-[#dcb14a]"/>
                            <span className="text-[12px] group-hover:text-[#ffffff] bg-[#dcb14a] rounded-full absolute -bottom-[9px] -right-[9px] px-1.5">1</span>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}