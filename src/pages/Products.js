import {useLoaderData} from "react-router-dom";

export default function Products() {
    const products = useLoaderData();
    console.log(products);


    return (
        <>Here is product page</>
    )
}