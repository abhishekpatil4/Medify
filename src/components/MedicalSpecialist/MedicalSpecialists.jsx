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

const data = [
    {
        id: 1,
        image: doctor1,
        name:'Dr. Lesley Hull',
        specialisation:'Medicine'
    },
    {
        id: 2,
        image: doctor2,
        name:'Dr. Ahmad Khan',
        specialisation:'Neurologist'
    },{
        id: 3,
        image: doctor3,
        name:'Dr. Heena Sachdeva',
        specialisation:'Orthopadics'
    },{
        id: 4,
        image: doctor4,
        name:'Dr. Ankur Sharma',
        specialisation:'Medicine'
    },{
        id: 5,
        image: doctor5,
        name:'Dr. Ahmad Stevens',
        specialisation:'Neurologist'
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
        <div style={{ transform: 'translate(0, -10%)', padding: '2rem 5rem 5rem 5rem', backgroundColor: 'white' }}>
            <h1 style={{color:theme.palette.secondary.main, textAlign:'center', fontSize:'48px', lineHeight:'67px', fontWeight:600}}>Our Medical Specialist</h1>
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        data && data.map((d) =>
                            <Specialist key={d.id} name={d.name} image={d.image}  specialisation={d.specialisation}/>
                        )
                    }
                </Slider>
            </div>
        </div>
    );
}

export default MedicalSpecialists;