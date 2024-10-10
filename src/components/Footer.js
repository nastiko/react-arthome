import {Link} from "react-router-dom";

//icons
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

//logo
import Logo from "../image/logo.png";

export default function Footer({link1, link2, link3, text, author}) {
    return (
        <>
            <div className="flex flex-col gap-y-5">
                <footer className="max-w-screen-xl grid grid-cols-1 md:grid-cols-3 md:justify-items-center items-center gap-y-2.5 px-5 xl:px-0 md:mx-auto">
                    <ul className="order-2 md:order-1 w-full flex justify-start gap-x-5">
                        <li className="shrink-0">
                            <Link className="navLink" to="/about-us">{link1}</Link>
                        </li>
                        <li className="shrink-0">
                            <Link className="navLink" to="/about-us">{link2}</Link>
                        </li>
                        <li className="shrink-0">
                            <Link className="navLink" to="/about-us">{link3}</Link>
                        </li>
                    </ul>
                    <div className="order-1 md:order-2 w-[120px] h-11 flex items-center">
                        <Link className="" to="/">
                            <img src={Logo} alt="Logo" className="w-full"/>
                        </Link>
                    </div>
                    <div className="order-3 w-full flex md:justify-end">
                        <div className="flex items-center gap-x-[15px] lg:gap-x-[65px]">
                            <h6 className="text-[16px] shrink-0 capitalize">{text}</h6>
                            <div className="flex gap-x-5">
                                <Link to="https://www.facebook.com/">
                                    <FaFacebookF className="hover:text-[#dcb14a]"/>
                                </Link>
                                <Link to="https://x.com/">
                                    <FaXTwitter className="hover:text-[#dcb14a]"/>
                                </Link>
                                <Link to="https://www.instagram.com/">
                                    <FaInstagram className="hover:text-[#dcb14a]"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </footer>
                <footer className="w-full flex items-center justify-center">
                    <p className="text-[16px] text-center">{author}</p>
                </footer>
            </div>
        </>
    )
}