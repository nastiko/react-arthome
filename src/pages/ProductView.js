import {Link, useLoaderData} from "react-router-dom";
import {RxSlash} from "react-icons/rx";

export default function ProductView() {
    const product = useLoaderData();
    const {images, sale_price, regular_price, on_sale, name, short_description, sku, categories} = product;
    console.log(product);
    const discount = Math.ceil((regular_price - sale_price) / regular_price * 100);
    return (
        <>
            <section className="bg-[#f4f5f7]">
                <div className="max-w-screen-xl px-5 xl:px-0 py-[80px] mx-auto">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <h1 className="capitalize text-[36px] mb-[15px] md:mb-0">{name}</h1>
                        <ul className="flex items-center gap-x-2">
                            <li>
                                <Link to={`/`}>Home</Link>
                            </li>
                            <li>
                                <RxSlash className="text-[#999999]"/>
                            </li>
                            <li className="text-[#999999]">
                                <span>{name}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="max-w-screen-xl flex gap-x-[25px] px-5 xl:px-0 py-[50px] mx-auto">
                <div className="relative">
                    <img src={images[0].src} alt={name}/>
                    {on_sale && <div className="w-[45px] h-[45px] flex justify-center items-center text-[#ffffff] bg-[#f14705] rounded-full absolute top-[15px] left-[15px]">Sale</div>}
                    {on_sale && <div className="w-[45px] h-[45px] flex justify-center items-center text-[#ffffff] bg-[#98d8ca] rounded-full absolute top-[75px] left-[15px]">{discount}%</div>}
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-[30px] font-medium">{name}</h3>
                    {on_sale ? (
                        <>
                            <div className="flex flex-row gap-x-4">
                                <p className="text-[30px] leading-[31px] text-[#666666] line-through">£{regular_price}</p>
                                <p className="text-[30px] leading-[31px] text-[#666666]">£{sale_price}</p>
                            </div>
                        </>
                    ) : <p className="text-[30px] leading-[31px] text-[#666666]">£{regular_price}</p>}
                    <p dangerouslySetInnerHTML={{__html: short_description}}></p>
                    <div>
                        <p>SKU: <span>{sku}</span></p>
                        <p>Categories: <span>{categories[0].name}</span></p>
                        <p>Tags: <span></span></p>
                    </div>


                </div>
            </section>
        </>
    )
}