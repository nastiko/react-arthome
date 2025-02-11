import {Outlet} from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import {useState} from "react";

export default function RootLayout() {
    const [isOpenBasket, setIsOpenBasket] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return (
        <>
            <div className={`flex h-screen flex-col justify-between`}>
                <div>
                    <Header isOpenBasket={isOpenBasket}
                            setIsOpenBasket={setIsOpenBasket}
                            isOpenMenu={isOpenMenu}
                            setIsOpenMenu={setIsOpenMenu}
                    />
                    <main>
                        <Outlet/>
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