import {Link} from "react-router-dom";

//icons
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

//logo
import Logo from "../../image/logo.png";

export default function Footer({link1, link2, link3, text, author}) {
    return (
        <>
            <div className="flex flex-col gap-y-5">
                <footer className="grid max-w-screen-xl grid-cols-1 items-center px-5 gap-y-2.5 md:mx-auto md:grid-cols-3 md:justify-items-center xl:px-0">
                    <ul className="order-2 flex w-full justify-start gap-x-5 md:order-1">
                        <li className="shrink-0">
                            <Link className="navLink" to="/about-us">{link1}</Link>
                        </li>
                        <li className="shrink-0">
                            <Link className="navLink" to="/about-us">{link2}</Link>
                        </li>
                        <li className="shrink-0">
                            <Link className="navLink" to="/page/contact-us">{link3}</Link>
                        </li>
                    </ul>
                    <div className="order-1 flex h-11 items-center w-[120px] md:order-2">
                        <Link className="" to="/">
                            <img src={Logo} alt="Logo" className="w-full"/>
                        </Link>
                    </div>
                    <div className="order-3 flex w-full md:justify-end">
                        <div className="flex items-center gap-x-[15px] lg:gap-x-[65px]">
                            <h6 className="shrink-0 capitalize text-[16px]">{text}</h6>
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
                <footer className="flex w-full items-center justify-center">
                    <p className="text-center text-[16px]">{author}</p>
                </footer>
            </div>
        </>
    )
}