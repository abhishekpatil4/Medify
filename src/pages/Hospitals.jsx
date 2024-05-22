import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"
import Navbar from '../components/Navbar/Navbar'
import { Box, Typography } from "@mui/material";
import SearchComp from "../components/SearchBox/SearchComp";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from "@mui/material";
import tickMark from "../assets/HospitalPage/tickMark.svg";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import ad from "../assets/HospitalPage/ad.png"
import FAQ from "../components/FAQ/FAQ";

const Hospitals = () => {
    const [hospitals, setHospitals] = useState();
    const { state, city } = useParams();
    const [searched, setSearched] = useState(false);
    useEffect(() => {
        console.log(" page rerender");
        const getHospitals = async () => {
            const url = `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`;
            try {
                const res = await axios.get(url);
                console.log("res: ", res.data);
                setHospitals(res.data);
            } catch (error) {
                console.log(error.response);
            }
        }
        setSearched(false);
        getHospitals();
    }, [searched])
    return <> <Box>
        <Navbar bgColor={"white"} isHospitalPage={true} />
        <Box sx={{ position: 'relative' }}>
            <Box sx={{ background: 'linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%)', height: '110px', borderRadius: '0px 0px 16px 16px' }}></Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Box onClick={() => setSearched(true)} sx={{ position: 'absolute', backgroundColor: "white", borderRadius: '15px', boxShadow: '6px 6px 35px 0px #1028511C', minWidth: { xs: '100vw', lg: '1200px', xl: '1300px' }, marginTop: { xs: '10rem', md: 0 } }}>
                    <SearchComp padding={"0.6rem"} />
                </Box>
            </Box>
        </Box>
        <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1, paddingTop: '5rem' }}>
                <Grid container>
                    <Grid item xs={12} md={9} sx={{ paddingBottom: '2rem', marginTop: { xs: "10rem", md: 0 } }}>
                        <Typography sx={{ fontSize: '24px', fontWeight: 500, lineHeight: '36px' }}>
                            {hospitals ? hospitals.length : "loading..."} medical centers available in {city}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 3 }}>
                            <img src={tickMark} alt="" />
                            <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '24px', color: '#787887' }}>
                                Book appointments with minimum wait-time & verified doctor details
                            </Typography>
                        </Box>
                        {
                            hospitals && hospitals.map((hospital, idx) =>
                                <HospitalCard key={idx} name={hospital["Hospital Name"]} state={state} city={city} />
                            )
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
        <FAQ />
    </>
}

export default Hospitals;

