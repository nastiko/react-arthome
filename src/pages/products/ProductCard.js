import {Link} from "react-router-dom";

export default function ProductCard({images, name, price}) {
    console.log(images);
    const imageSample = images[1] ? images[1].src : images[0].src;
    return (
        <>
            <Link to='/'>
                <div>
                    <img src={imageSample} alt={name} />
                    <p>£{price}</p>
                </div>
            </Link>
        </>
    )

}