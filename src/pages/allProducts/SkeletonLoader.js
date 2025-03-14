import {FunctionComponent} from "react";
import ContentLoader from "react-content-loader";

const SkeletonLoader: FunctionComponent = (props) => (
    <ContentLoader
        speed={2}
        width={300}
        height={418}
        viewBox="0 0 300 418"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="0" rx="0" ry="0" width="300" height="300"/>
        <rect x="76" y="316" rx="0" ry="0" width="141" height="24"/>
        <rect x="115" y="355" rx="0" ry="0" width="70" height="31"/>

    </ContentLoader>
)

export default SkeletonLoader;