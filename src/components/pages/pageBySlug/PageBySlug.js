import {useLoaderData} from "react-router-dom";

// pages
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import NotFound from "./NotFound";

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