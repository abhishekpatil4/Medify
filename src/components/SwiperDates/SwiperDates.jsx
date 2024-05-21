import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import TimeBox from "./TimeBox";
import { useSnackbar } from 'notistack'
import DayBox from "./DayBox";

const afternoonData = ["12:00PM", "12:30PM", "01:30PM", "02:00PM", "02:30PM"];
const eveningData = ["06:00PM", "06:30PM", "07:00PM", "07:30PM"];

function SwiperDates({ name, state, city }) {
    const { enqueueSnackbar } = useSnackbar()
    const [selectedDay, setSelectedDay] = useState(0);
    const [selectedTime, setSelectedTime] = useState();
    const theme = useTheme();

    const formatDate = (index) => {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const today = new Date();
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + index);

        const day = futureDate.getDate();
        const monthName = monthNames[futureDate.getMonth()];
        const year = futureDate.getFullYear();

        return `${day} ${monthName} ${year}`;
    };


    const [data, setData] = useState([
        {
            day: "Today",
            slots: 10,
        },
        {
            day: "Tomorrow",
            slots: 10,
        },
    ]);

    useEffect(() => {
        const newData = [...data];
        const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const today = new Date();

        for (let i = 2; i < 7; i++) {
            const futureDate = new Date(today);
            futureDate.setDate(today.getDate() + i);

            const dayName = dayNames[futureDate.getDay()];
            const day = futureDate.getDate();
            const monthName = monthNames[futureDate.getMonth()];

            const formattedDate = `${dayName}, ${day} ${monthName}`;
            const obj = {
                day: formattedDate,
                slots: 10,
            };

            newData.push(obj);
        }

        setData(newData);
    }, []);

    const handleSelectTime = (time) => {
        setSelectedTime(time.data);
        if (localStorage.getItem("booking")) {
            let data = JSON.parse(localStorage.getItem("booking"));
            let newObj = {
                name: name,
                state: state,
                city: city,
                day: formatDate(selectedDay),
                time: time.data
            }
            data.push(newObj);
            localStorage.setItem("booking", JSON.stringify(data));
        } else {
            let obj = [{
                name: name,
                state: state,
                city: city,
                day: formatDate(selectedDay),
                time: time.data
            }]
            localStorage.setItem("booking", JSON.stringify(obj));
        }
        enqueueSnackbar("Booking successful!", {
            variant: 'success', anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center'
            }
        })
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <Box sx={{ backgroundColor: 'white', maxWidth: '775px', width: { sm: '720px', md: '775px' }, marginBottom: '5rem', padding: "1rem 0rem" }}>
            <Box className="slider-container" sx={{ maxWidth: '680px', margin: {xs:'0rem 0.5rem', md:'0rem 3rem'} }}>
                <Slider {...settings}>
                    {
                        data.length >= 7 ?
                            data.map((d, idx) =>
                                <Box onClick={() => setSelectedDay(idx)} key={idx} sx={{ borderBottom: idx === selectedDay ? `4px solid ${theme.palette.primary.main}` : '4px solid #F0F0F5', padding: '5px 0px' }}>
                                    <Typography sx={{ textAlign: 'center', color: '#414146', lineHeight: '22px', fontSize: '16px', fontWeight: 700 }}>{d.day}</Typography>
                                    <Typography sx={{ textAlign: 'center', color: '#01A400', lineHeight: '16px', fontSize: '12px', fontWeight: 400 }}>{d.slots} Slots Available</Typography>
                                </Box>
                            )
                            :
                            <div>
                                loading...
                            </div>
                    }
                </Slider>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 5, flexDirection: "column", padding: '1.5rem' }}>
                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: { xs: 2, md: 5 }, flexDirection: { xs: "column", md: "row" }, borderBottom: '1px solid #F0F0F5', padding: '0.5rem 0rem' }}>
                    <Typography sx={{ color: '#414146', fontSize: '14px', fontWeight: 400, lineHeight: '20px' }}>
                        Morning
                    </Typography>
                    <Box onClick={() => handleSelectTime({ data: "11:30AM" })} sx={{ cursor: 'pointer' }}>
                        <TimeBox time={"11:30AM"} />
                    </Box>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: { xs: "column", md: "row" }, gap: { xs: 2, md: 5 }, borderBottom: '1px solid #F0F0F5', padding: '0.5rem 0rem' }}>
                    <Typography sx={{ color: '#414146', fontSize: '14px', fontWeight: 400, lineHeight: '20px' }}>
                        Afternoon
                    </Typography>
                    {
                        afternoonData && afternoonData.map((data, idx) =>
                            <Box onClick={() => handleSelectTime({ data })} key={idx} sx={{ cursor: 'pointer' }}>
                                <TimeBox time={data} />
                            </Box>
                        )
                    }
                </Box>
                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: { xs: 2, md: 5 }, flexDirection: { xs: "column", md: "row" }, borderBottom: '1px solid #F0F0F5', padding: '0.5rem 0rem' }}>
                    <Typography sx={{ color: '#414146', fontSize: '14px', fontWeight: 400, lineHeight: '20px' }}>
                        Evening
                    </Typography>
                    {
                        eveningData && eveningData.map((data, idx) =>
                            <Box onClick={() => handleSelectTime({ data })} key={idx} sx={{ cursor: 'pointer' }}>
                                <TimeBox time={data} />
                            </Box>
                        )
                    }
                </Box>
            </Box>
        </Box>
    );
}

export default SwiperDates;