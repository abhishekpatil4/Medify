import SearchIcon from '@mui/icons-material/Search';
import CustomButton from "../Button/CustomButton";
import Typography from "@mui/material/Typography";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const SearchComp = ({padding='3rem'}) => {
    const [states, setStates] = useState();
    const [selectedState, setSelectedState] = useState("");
    const [cities, setCities] = useState();
    const [selectedCity, setSelectedCity] = useState("");
    const navigate = useNavigate();
    const getCities = async (state) => {
        const url = `https://meddata-backend.onrender.com/cities/${state}`;
        try {
            const res = await axios.get(url);
            setCities(res.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        getCities(e.target.value);
    }

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    }

    const handleSearch = () => {
        navigate(`/hospitals/${selectedState}/${selectedCity}`);
    }

    useEffect(() => {
        const getStates = async () => {
            const url = "https://meddata-backend.onrender.com/states";
            try {
                const res = await axios.get(url);
                setStates(res.data);
            } catch (error) {
                console.log(error.response);
            }
        }
        getStates();
    }, []);
    return <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: padding, alignItems: 'center', flexWrap: 'wrap' }}>
        <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <FormControl sx={{ minWidth: '20rem', borderRadius: '8px', backgroundColor: '#FAFBFE', border: '1px solid #F0F0F0' }}>
                <InputLabel id="demo-simple-select-label" sx={{ color: '#ABB6C7' }}>State</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedState}
                    label="Age"
                    onChange={handleStateChange}
                >
                    {
                        states && states.map((state, idx) =>
                            <MenuItem key={idx} value={state}>{state}</MenuItem>
                        )

                    }
                </Select>
            </FormControl>
            <FormControl sx={{ minWidth: '20rem', borderRadius: '8px', backgroundColor: '#FAFBFE' }}>
                <InputLabel id="demo-simple-select-label" sx={{ color: '#ABB6C7' }}>City</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedCity}
                    label="Age"
                    onChange={handleCityChange}
                >
                    {
                        cities && cities.map((city, idx) =>
                            <MenuItem key={idx} value={city}>{city}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
        </Box>
        <CustomButton fun={handleSearch} type={"Search"} icon={<SearchIcon sx={{ height: '300px', width: '25px' }} />} height="3.7rem" width="12rem" style={{ fontSize: '1.2rem' }} />
    </div>
}

export default SearchComp;