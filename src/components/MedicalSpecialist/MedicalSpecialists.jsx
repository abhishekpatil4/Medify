import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Specialist from "./Specialist";
import doctor1 from "../../assets/doctorsImage/doctor1.png"
import doctor2 from "../../assets/doctorsImage/doctor2.png"
import doctor3 from "../../assets/doctorsImage/doctor3.png"
import doctor4 from "../../assets/doctorsImage/doctor4.png"
import doctor5 from "../../assets/doctorsImage/doctor5.png"
import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const data = [
    {
        id: 1,
        image: doctor1,
        name: 'Dr. Lesley Hull',
        specialisation: 'Medicine'
    },
    {
        id: 2,
        image: doctor2,
        name: 'Dr. Ahmad Khan',
        specialisation: 'Neurologist'
    }, {
        id: 3,
        image: doctor3,
        name: 'Dr. Heena Sachdeva',
        specialisation: 'Orthopadics'
    }, {
        id: 4,
        image: doctor4,
        name: 'Dr. Ankur Sharma',
        specialisation: 'Medicine'
    }, {
        id: 5,
        image: doctor5,
        name: 'Dr. Ahmad Stevens',
        specialisation: 'Neurologist'
    },
]


function MedicalSpecialists() {
    const theme = useTheme();
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1650,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <Box sx={{ transform: 'translate(0, -10%)', padding: { xs: '2rem 4rem 5rem 4rem', md: '2rem 5rem 5rem 5rem' }, backgroundColor: 'white' }}>
            <Typography sx={{ color: theme.palette.secondary.main, textAlign: 'center', fontSize: { xs: '30px', md: '48px' }, lineHeight: { xs: '40px', md: '67px' }, fontWeight: 600 }}>Our Medical Specialist</Typography>
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        data && data.map((d) =>
                            <Specialist key={d.id} name={d.name} image={d.image} specialisation={d.specialisation} />
                        )
                    }
                </Slider>
            </div>
        </Box>
    );
}

export default MedicalSpecialists;