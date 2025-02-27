import FeaturedProductRender from './FeaturedProductRender';
import {useLoaderData} from "react-router-dom";

export default function FeaturedProduct() {
    const data = useLoaderData();
    return (
        <>
            <div>
                {data.featured.map((item, i) =>
                    <FeaturedProductRender
                        key={item.id}
                        {...item}
                        i={i}
                    />
                )}
            </div>
        </>
    )
}