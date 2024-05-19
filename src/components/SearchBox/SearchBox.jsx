import { Container } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CustomButton from "../Button/CustomButton";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from "@mui/material/Box";
import Categories from "./Categories";


const SearchBox = () => {
    const theme = useTheme();
    return <Container maxWidth="xl" style={{ paddingBottom: '3rem', backgroundColor: 'white', boxShadow: '2px 2px 20px rgba(0, 0, 0, 0.1)', borderRadius: '15px', position: 'absolute', left: '50%', transform: 'translate(-50%, -90%)', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                <FormControl sx={{ minWidth: '20rem', borderRadius: '8px', backgroundColor: '#FAFBFE', border: '1px solid #F0F0F0' }}>
                    <InputLabel id="demo-simple-select-label" sx={{ color: '#ABB6C7' }}>State</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Age"
                    // onChange={handleChange}
                    >
                        <MenuItem value={10}>Karnataka</MenuItem>
                        <MenuItem value={20}>Hyderabad</MenuItem>
                        <MenuItem value={30}>Goa</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ minWidth: '20rem', borderRadius: '8px', backgroundColor: '#FAFBFE' }}>
                    <InputLabel id="demo-simple-select-label" sx={{ color: '#ABB6C7' }}>City</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Age"
                    // onChange={handleChange}
                    >
                        <MenuItem value={10}>Dharwad</MenuItem>
                        <MenuItem value={20}>Belgavi</MenuItem>
                        <MenuItem value={30}>Hubli</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <CustomButton type={"Search"} icon={<SearchIcon sx={{ height: '300px', width: '25px' }} />} height="3.7rem" width="12rem" style={{ fontSize: '1.2rem' }} />
        </div>
        <Categories />
    </Container>
}

export default SearchBox;




{/* <OutlinedInput
                style={{ backgroundColor: '#FAFBFE', border: '1px solid #F0F0F0', borderRadius: '8px', minWidth: '16rem', maxHeight: '2.5rem' }}
                placeholder="State"
                startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
            /> */}
{/* <OutlinedInput
                style={{
                    backgroundColor: '#FAFBFE',
                    border: '1px solid #F0F0F0',
                    borderRadius: '8px',
                    minWidth: '16rem',
                    height: '3.5rem', // Adjust the height as needed
                    padding: '0 0.5rem' // Adjust padding for better alignment
                }}
                placeholder="State"
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
            />
            <OutlinedInput
                style={{ backgroundColor: '#FAFBFE', border: '1px solid #F0F0F0', borderRadius: '8px', minWidth: '16rem', maxHeight: '2.5rem' }}
                placeholder="City"
                startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
            /> */}