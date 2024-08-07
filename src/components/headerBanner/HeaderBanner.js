import Slider from "react-slick";
import {useState} from "react";
import headerBannerData from "./headerBannerData";
import Slide from "./Slide";


export default function HeaderBanner() {
    const [activeIndex, setActiveIndex] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2500,
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
                    {headerBannerData.map(item =>
                        <Slide
                            key={item.id}
                            {...item}
                        />
                    )}
                </Slider>
            </div>
        </>
    )
}