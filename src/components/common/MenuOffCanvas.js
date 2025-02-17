import {Link} from "react-router-dom";
import {useContext} from "react";
import Context from "../../Context";

export default function MenuOffBasket() {
    const value = useContext(Context);
    return (
        <>
            <div className="w-6 h-6 md:hidden flex items-center justify-center relative rounded">
                <div onClick={() => value.setIsOpenMenu(!value.isOpenMenu)} className="w-6 h-6 flex items-center justify-center absolute top-0 left-0 z-10 cursor-pointer">
                    <span className={`transform transition w-full h-px bg-current absolute py-[1px] ${value.isOpenMenu ? 'translate-y-0 rotate-45' : 'translate-y-2'}`}></span>
                    <span className={`transform transition w-full h-px bg-current absolute py-[1px] ${value.isOpenMenu ? 'opacity-0 translate-x-3' : 'opacity-100'}`}></span>
                    <span className={`transform transition w-full h-px bg-current absolute py-[1px] ${value.isOpenMenu ? 'translate-y-0 -rotate-45' : '-translate-y-2'}`}></span>
                </div>

                {/*Right Offcanvas*/}
                <div className={`fixed w-full h-full inset-0 z-[1] ${value.isOpenMenu ? 'transition-all opacity-100 duration-500 translate-x-0' : 'transition-all opacity-0 duration-500 translate-x-full'}`}>
                    {/*Offcanvas menu*/}
                    <nav className="flex flex-col right-0 w-full fixed top-0 py-28 bg-[#ffffff] h-full overflow-hidden z-[1]">
                        {/*navigation*/}
                        <nav className="flex flex-col px-5 prose prose-a:text-base prose-a:font-normal prose-a:capitalize prose-a:no-underline prose-a:mb-4">
                            <Link onClick={() => value.setIsOpenMenu(false)} to="/products">All products</Link>
                            <Link onClick={() => value.setIsOpenMenu(false)} to="/page/about-us">About us</Link>
                        </nav>
                    </nav>
                </div>
                {/* End Offcanvas menu*/}
            </div>
        </>
    )
}