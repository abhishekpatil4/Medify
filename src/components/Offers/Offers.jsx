import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Offer from "./Offer";
import OfferImage1 from "../../assets/Healthcare Consultation-1.png"
import OfferImage2 from "../../assets/Healthcare Consultation-2.png"

const data = [
    {
        id: 1,
        path: OfferImage1
    },
    {
        id: 2,
        path: OfferImage2
    },
    {
        id: 3,
        path: OfferImage1
    },
    {
        id: 4,
        path: OfferImage2
    },
    {
        id: 5,
        path: OfferImage1
    }
]


function Offers() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div style={{ transform: 'translate(0, -10%)', padding: '10rem 5rem 5rem 5rem', backgroundColor: 'white' }}>
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        data && data.map((d) =>
                            <Offer image={d.path} />
                        )
                    }
                </Slider>
            </div>
        </div>
    );
}

export default Offers;