import {useLoaderData} from "react-router-dom";

// pages
import AboutUs from "./pageBySlug/AboutUs";
import ContactUs from "./pageBySlug/ContactUs";
import NotFound from "./pageBySlug/NotFound";

export default function PageBySlug() {
    const data = useLoaderData();

    switch(data[0].slug) {
        case 'about-us': {
            return <AboutUs />;
        }
        case 'contact-us': {
            return <ContactUs />;
        }
        case 'not-found': {
            return <NotFound/>;
        }
        default:
            return <NotFound />
    }
}