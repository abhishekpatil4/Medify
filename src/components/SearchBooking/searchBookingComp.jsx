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
import TextField from '@mui/material/TextField';


const SearchBookingComp = ({ padding = '0.2rem', searchContent, setSearchContent }) => {
    // const [states, setStates] = useState();
    const handleSearch = () => {
        console.log("search");
    }
    return <Box sx={{ display: 'flex', justifyContent: 'space-evenly', padding: { xs: '1rem', md: padding }, alignItems: 'center', flexWrap: 'wrap' }}>
        <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <FormControl sx={{ minWidth: { xs: '16rem', md: '30rem' }, borderRadius: '8px', backgroundColor: '#FAFBFE' }}>
                <TextField value={searchContent} onChange={(e) => setSearchContent(e.target.value)} id="outlined-basic" label="Search By Hospital" variant="outlined" sx={{ color: '#ABB6C7', border: '1px solid #F0F0F0' }} />
            </FormControl>
        </Box>
        <CustomButton fun={handleSearch} type={"Search"} icon={<SearchIcon sx={{ height: '300px', width: '25px' }} />} height="3.7rem" width="12rem" style={{ fontSize: '1.2rem' }} sx={{ width: { xs: '16rem', md: '12rem' } }} />
    </Box>
}

export default SearchBookingComp;