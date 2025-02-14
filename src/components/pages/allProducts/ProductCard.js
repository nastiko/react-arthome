import {Link} from "react-router-dom";

export default function ProductCard({id, images, name, regular_price, sale_price, on_sale, onCart}) {
    const discount = Math.ceil((regular_price - sale_price) / regular_price * 100);

    const onClickCard = () => {
        onCart({id, images, name, regular_price, sale_price});
    }

    return (
        <>
            <div className="flex flex-col">
                <Link to={`/products/${id}`}>
                    <div>
                        <div className="relative">
                            <img src={images[1]?.src || images[0]?.src} alt={name}/>
                            {on_sale && <div className="w-[45px] h-[45px] flex justify-center items-center text-[#ffffff] bg-[#f14705] rounded-full absolute top-[15px] left-[15px]">Sale</div>}
                            {on_sale && <div className="w-[45px] h-[45px] flex justify-center items-center text-[#ffffff] bg-[#98d8ca] rounded-full absolute top-[75px] left-[15px]">{discount}%</div>}
                        </div>
                        <div className="w-full flex flex-col justify-center items-center my-4">
                            <h3 className="text-[16px] font-medium">{name}</h3>
                            {on_sale ? (
                                <>
                                    <div>
                                        <p className="text-[18px] leading-[31px] text-[#666666] line-through">£{regular_price}</p>
                                        <p className="text-[18px] leading-[31px] text-[#666666]">£{sale_price}</p>
                                    </div>
                                </>
                            ) : <p className="text-[18px] leading-[31px] text-[#666666]">£{regular_price}</p>}
                        </div>
                    </div>
                </Link>
                <div>
                    <button onClick={onClickCard}>Add To Cart</button>
                </div>
            </div>
        </>
    )
}