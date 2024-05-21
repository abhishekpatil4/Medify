import { Box } from "@mui/material";
const Offer = ({ image }) => {
    return <Box sx={{ maxWidth: { xs: '370px', md: '399px' } }}>
        <img src={image} alt="" width={"100%"} />
    </Box>
}

export default Offer;