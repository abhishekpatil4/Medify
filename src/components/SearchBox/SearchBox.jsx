import { Container } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import * as React from 'react';
import { useTheme } from "@mui/material";
import Categories from "./Categories";
import SearchComp from "./SearchComp";

const SearchBox = () => {
    const theme = useTheme();
    return <Container maxWidth="xl" sx={{ paddingBottom: '3rem', backgroundColor: 'white', boxShadow: '2px 2px 20px rgba(0, 0, 0, 0.1)', borderRadius: '15px', position: 'absolute', left: '50%', transform: { xs: 'translate(-50%, -25%)', sm: 'translate(-50%, -40%)', md: 'translate(-50%, -65%)', lg: 'translate(-50%, -94%)' }, zIndex: 1 }}>
        <SearchComp />
        <Categories />
    </Container>
}

export default SearchBox;