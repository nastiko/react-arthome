import BasketOffCanvas from "./BasketOffCanvas";
import MenuOffCanvas from "./MenuOffCanvas";
import {Input} from "@material-tailwind/react";
import {Link, useLocation} from "react-router-dom";
import {useState} from "react";

//icons
import {IoSearchOutline} from "react-icons/io5";
import {IoMdHeartEmpty} from "react-icons/io";

//logo
import Logo from "../image/logo.png";

export default function Header({isOpenBasket, setIsOpenBasket, isOpenMenu, setIsOpenMenu}) {
    let location = useLocation();
    const isSpecialPage = ["/products", "/about-us", "/contact-us"].some(path => location.pathname.includes(path));

    // sticky position on scrollY
    const [navBarBgColor, setNavBarBgColor] = useState(false);
    const changeBgColor = () => {
        if (window.scrollY >= 90) {
            setNavBarBgColor(true);
        } else {
            setNavBarBgColor(false);
        }
    }
    window.addEventListener('scroll', changeBgColor);

    return (
        <>
            <header className={` h-[84px] mt-[15px] sticky top-0 z-10
                    ${isSpecialPage ? 'bg-[#ffffff]' : 'bg-[#f4f5f7] mx-[15px]'} 
                    ${navBarBgColor ? 'bg-[#ffffff] border-[1px] border-t-transparent border-x-transparent border-b-[#dddddd]' : ''}`}>
                <nav className={`max-w-screen-xl grid grid-cols-2 xl:grid-cols-3 xl:justify-items-center items-center 2xl:px-0 px-5 py-5 mx-auto`}>
                    <div className="relative hidden w-full flex-col gap-6 xl:flex">
                        <Input className="focus:border-b-[#dcb14a] placeholder:text-[16px] px-2.5 pr-10" variant="static" placeholder="Search Anything..."/>
                        <IoSearchOutline className="absolute top-0 right-0 text-[20px] mt-3.5 mr-2.5"/>
                    </div>
                    <div className="flex h-11 items-center w-[120px] relative z-10">
                        <Link className="" to="/">
                            <img src={Logo} alt="Logo" className="w-full"/>
                        </Link>
                    </div>
                    <div className="flex w-full justify-end gap-x-[35px]">
                        <Link className="hidden md:block" to="/products">All Products</Link>
                        <Link className="hidden md:block" to="/page/about-us">About Us</Link>
                        <Link className="relative cursor-pointer group z-10" to="/like">
                            <IoMdHeartEmpty className="text-[24px] group-hover:text-[#dcb14a]"/>
                            <span className={`${isOpenBasket ? 'bg-[#000000] bg-opacity-50' : 'bg-[#dcb14a]'} text-[12px] group-hover:text-[#ffffff] rounded-full absolute -bottom-[9px] -right-[9px] px-1.5`}>1</span>
                        </Link>
                        <BasketOffCanvas
                            isOpenBasket={isOpenBasket}
                            setIsOpenBasket={setIsOpenBasket}
                            isOpenMenu={isOpenMenu}
                            setIsOpenMenu={setIsOpenMenu}
                        />
                        <MenuOffCanvas
                            isOpenMenu={isOpenMenu}
                            setIsOpenMenu={setIsOpenMenu}
                        />
                    </div>
                </nav>
            </header>
        </>
    )
}