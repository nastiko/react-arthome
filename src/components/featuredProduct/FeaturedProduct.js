//import featuredProductData from './featuredProductData';
import FeaturedProductRender from './FeaturedProductRender';
import {useLoaderData} from "react-router-dom";

export default function FeaturedProduct() {
    const data = useLoaderData();
    console.log(data);
    return (
        <>
            <div>
                {data.product.map((item, i) =>
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