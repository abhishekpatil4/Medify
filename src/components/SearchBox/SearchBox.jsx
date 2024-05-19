import { Container } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import * as React from 'react';
import { useTheme } from "@mui/material";
import Categories from "./Categories";
import SearchComp from "./SearchComp";

const SearchBox = () => {
    const theme = useTheme();
    return <Container maxWidth="xl" style={{ paddingBottom: '3rem', backgroundColor: 'white', boxShadow: '2px 2px 20px rgba(0, 0, 0, 0.1)', borderRadius: '15px', position: 'absolute', left: '50%', transform: 'translate(-50%, -90%)', zIndex: 1 }}>
        <SearchComp />
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