import {useLoaderData} from "react-router-dom";

import AboutUs from "./AboutUs";
import NotFound from "./NotFound";

export default function PageBySlug() {
    const data = useLoaderData();

    switch(data[0].slug) {
        case 'about-us': {
            return <AboutUs />;
        }
        case 'not-found': {
            return <NotFound/>;
        }
        default:
            return <NotFound />
    }
}