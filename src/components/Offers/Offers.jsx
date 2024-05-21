import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Offer from "./Offer";
import OfferImage1 from "../../assets/Healthcare Consultation-1.png"
import OfferImage2 from "../../assets/Healthcare Consultation-2.png"
import { Box } from "@mui/material";

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
        initialSlide: 1,
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
        <Box sx={{ transform: 'translate(0, -10%)', padding: { xs: '46rem 0rem 5rem 0rem', sm: '32rem 5rem 5rem 5rem', md: '10rem 5rem 5rem 5rem' }, backgroundColor: 'white', }}>
            <Box className="slider-container" sx={{ maxWidth: { xs: '92vw', md: '100vw' } }}>
                <Slider {...settings}>
                    {
                        data && data.map((d) =>
                            <Offer key={d.id} image={d.path} />
                        )
                    }
                </Slider>
            </Box>
        </Box>
    );
}

export default Offers;
