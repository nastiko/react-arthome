import HeaderBanner from "./headerBanner/HeaderBanner";
import FeaturedProduct from "./featuredProduct/FeaturedProduct";
import DecoCollection from "./decoCollection/DecoCollection";
import BlocksDefault from "./blocksDefault/BlocksDefault";

export default function Homepage() {

    return (
        <>
            <HeaderBanner/>
            <FeaturedProduct/>
            <DecoCollection
                imageUrl="/image/headerBanner/headerBanner4.jpg"
                title="Deco collection"
                discount="50% off"
                bannerText="The standard chunk of Lorem Ipsum used since the 1500s is reproduced for those. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum"
            />
            <BlocksDefault/>
        </>
    )
}