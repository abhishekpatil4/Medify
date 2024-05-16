import { Container } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import CustomButton from "../Button/CustomButton";

const SearchBox = () => {
    return <Container maxWidth="xl" style={{ backgroundColor: 'white', boxShadow: '2px 2px 20px rgba(0, 0, 0, 0.1)', borderRadius: '15px', height: '20rem', position: 'absolute', left: '50%', transform: 'translate(-50%, -90%)', zIndex:1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <OutlinedInput
                style={{ backgroundColor: '#FAFBFE', border: '1px solid #F0F0F0', borderRadius: '8px', minWidth: '16rem', maxHeight: '2.5rem' }}
                placeholder="State"
                startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
            />
            <OutlinedInput
                style={{ backgroundColor: '#FAFBFE', border: '1px solid #F0F0F0', borderRadius: '8px', minWidth: '16rem', maxHeight: '2.5rem' }}
                placeholder="City"
                startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
            />
            <CustomButton type={"Search"} icon={<SearchIcon />} />
        </div>
        <div>
            <h3 style={{textAlign:'center'}}>you may also be looking for</h3>
            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                <div>doctor</div>
                <div>labs</div>
                <div>hospital</div>
                <div>medical store</div>
                <div>Ambulance</div>
            </div>
        </div>
    </Container>
}

export default SearchBox;