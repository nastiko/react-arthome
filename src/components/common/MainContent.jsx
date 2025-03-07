import React, {useContext} from "react";
import {Outlet} from "react-router-dom";
import Header from "./Header";
import CheckoutModal from "../common/CheckoutModal";
import {ContextCheckoutModel} from "../../contextProvider/CheckoutModelContext"

export default function MainContent() {
    const {openModal} = useContext(ContextCheckoutModel);

    return (
        <>
            <div>
                <Header/>
                <main>
                    <Outlet/>
                </main>
            </div>
            {openModal && <CheckoutModal/>}
        </>
    )
}