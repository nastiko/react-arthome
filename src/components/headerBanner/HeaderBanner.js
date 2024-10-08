import Slider from "react-slick";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

//item
import Slide from "./Slide";

export default function HeaderBanner() {
    const [activeIndex, setActiveIndex] = useState(0);
    const api = useLoaderData();

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true,
        cssEase: "linear",
        beforeChange: (current, next) => setActiveIndex(next),
        appendDots: dots => (
            <div
                style={{
                    position: "absolute",
                    bottom: "15px",
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: i === activeIndex ? "#dcb14a" : "#e5e7eb",
                }}
            ></div>
        )
    };
    return (
        <>
            <div className="slider-container">
                <Slider {...settings}>
                    {api.slides.map((item, i) =>
                        <Slide
                            key={item.id}
                            {...item}
                            isActive={i === activeIndex}
                        />
                    )}
                </Slider>
            </div>
        </>
    )
}