import { Box } from "@mui/material";
import Navbar from "../components/Navbar/Navbar"
import { Typography } from "@mui/material";
import SearchBookingComp from "../components/SearchBooking/searchBookingComp";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import ad from "../assets/HospitalPage/ad.png"
import { useState, useEffect } from "react";

const Bookings = () => {
    const [bookings, setBookings] = useState();
    const [searchContent, setSearchContent] = useState("");
    useEffect(() => {
        const getBookingsData = async () => {
            if (localStorage.getItem("booking")) {
                setBookings(JSON.parse(localStorage.getItem("booking")));
                console.log("bookings: ", JSON.parse(localStorage.getItem("booking")));
            }
        }
        getBookingsData();
    }, []);

    let filteredBookings = bookings?.filter(booking =>
        booking.name.toLowerCase().includes(searchContent.toLowerCase())
    );
    useEffect(() => {
        console.log("searchContent", searchContent);
        filteredBookings = bookings?.filter(booking =>
            booking.name.toLowerCase().includes(searchContent.toLowerCase())
        );
    }, [searchContent])

    return <Box sx={{ marginBottom: '2rem' }}>
        <Navbar bgColor={"white"} isHospitalPage={true} />
        <Box sx={{ position: 'relative' }}>
            <Box sx={{ background: 'linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%)', height: '110px', borderRadius: '0px 0px 16px 16px', display: 'flex', justifyContent: "fles-start", alignItems: 'center' }}>
                <Typography sx={{ fontSize: '40px', fontWeight: 700, lineHeight: '45px', color: 'white', marginLeft: '10vw' }}>
                    My Bookings
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop:{xs:'4.5rem', md:0} }}>
                <Box sx={{ position: 'absolute', backgroundColor: "white", borderRadius: '15px', boxShadow: '6px 6px 35px 0px #1028511C', width: {xs:"100vw", md:'45rem'}, left: { xs: '0px', md: '40vw' } }}>
                    <SearchBookingComp searchContent={searchContent} setSearchContent={setSearchContent} />
                </Box>
            </Box>
        </Box>
        <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1, paddingTop: '5rem' }}>
                <Grid container>
                    <Grid item xs={12} md={9}>
                        {
                            filteredBookings ? filteredBookings.map((booking, idx) =>
                                <HospitalCard key={idx} name={booking.name} state={booking.state} city={booking.city} time={booking.time} day={booking.day} booked={true} />
                            )
                                :
                                <div>No bookings</div>
                        }
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box sx={{ width: '363px', height: '268px', marginTop: '75px' }}>
                            <img src={ad} alt="advertisement" width={"100%"} style={{ borderRadius: '15px' }} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </Box>
}

export default Bookings;