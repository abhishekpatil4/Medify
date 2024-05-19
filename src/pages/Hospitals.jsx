import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"
import Navbar from '../components/Navbar/Navbar'
import { Box } from "@mui/material";
import SearchComp from "../components/SearchBox/SearchComp";

const Hospitals = () => {
    const [hospitals, setHospitals] = useState();
    const { state, city } = useParams();
    useEffect(() => {
        const getHospitals = async () => {
            const url = `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`;
            try {
                const res = await axios.get(url);
                setHospitals(res.data);
            } catch (error) {
                console.log(error.response);
            }
        }
        getHospitals();
    }, [])
    return <Box>
        <Navbar bgColor={"white"} />
        <Box sx={{ position: 'relative' }}>
            <Box sx={{ background: 'linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%)', height: '110px', borderRadius: '0px 0px 16px 16px' }}></Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{position: 'absolute', backgroundColor: "white", borderRadius: '15px', boxShadow: '6px 6px 35px 0px #1028511C', width: '1300px' }}>
                    <SearchComp padding={"0.6rem"} />
                </Box>
            </Box>
        </Box>
    </Box>
}

export default Hospitals;

