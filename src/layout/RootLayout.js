import {Outlet} from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import {useState} from "react";

export default function RootLayout() {
    const [isOpenBasket, setIsOpenBasket] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return(
        <>
            {isOpenBasket && (
                <div className="bg-[#000000] bg-opacity-50 w-full h-full fixed inset-0 z-10"></div>
            )}
            <div className={`flex h-screen flex-col justify-between ${isOpenBasket || isOpenMenu ? 'overflow-hidden' : ''}`}>
                <div>
                    <Header isOpenBasket={isOpenBasket}
                            setIsOpenBasket={setIsOpenBasket}
                            isOpenMenu={isOpenMenu}
                            setIsOpenMenu={setIsOpenMenu}
                    />
                    <main>
                        <Outlet />
                    </main>
                </div>
                <Footer
                    link1="Term & Condition"
                    link2="Policy"
                    link3="Contact Us"
                    author="© 2024 Anastasia Hrynkevich."
                    text="Follow us on social"
                />
            </div>
        </>
    )
}