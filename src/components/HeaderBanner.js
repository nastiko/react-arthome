import Slider from "react-slick";


export default function HeaderBanner() {
    const imagesBanner = [
        {
            id: 1,
            imageUrl: "/image/headerBanner1.jpg"
        },
        {
            id: 2,
            imageUrl: "/image/headerBanner2.jpg"
        },
        {
            id: 3,
            imageUrl: "/image/headerBanner3.jpg"
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        cssEase: "linear"
    };
    return (
        <>
            <div className="slider-container">
                <Slider {...settings}>
                    {imagesBanner.map(item =>
                        <img key={item.id} src={item.imageUrl} alt="image" />
                    )}
                </Slider>
            </div>
        </>
    )
}