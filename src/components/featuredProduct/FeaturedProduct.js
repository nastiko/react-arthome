import featuredProductData from './featuredProductData';
import FeaturedProductRender from './FeaturedProductRender';

export default function FeaturedProduct() {
    return (
        <>
            <div>
                {featuredProductData.map((item, i) =>
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