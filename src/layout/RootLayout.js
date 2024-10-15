import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {
    return(
        <>
            <div className="flex h-screen flex-col justify-between">
                <div>
                    <Header/>
                    <main>
                        <Outlet/>
                    </main>
                </div>
                <Footer
                    link1="Term & Condition"
                    link2="Policy"
                    link3="Map"
                    author="© 2024 Anastasia Hrynkevich."
                    text="Follow us on social"
                />
            </div>
        </>
    )
}