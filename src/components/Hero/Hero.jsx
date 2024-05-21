import { Typography } from "@mui/material"
import { useTheme } from "@emotion/react"
import HeroImage from "../../assets/heroimage.png"
import { Container } from "@mui/material"
import CustomButton from "../Button/CustomButton"
import Box from "@mui/material/Box"
const Hero = () => {
    const theme = useTheme();
    return <Container maxWidth="xl" sx={{paddingBottom:{ md:'12rem' ,lg:'8rem'}, display: 'flex', height: "83  2px", overflow: 'hidden', position: "relative", justifyContent: { xs: 'center', lg: 'space-between' }, flexWrap: 'wrap' }}>
        <Box sx={{ marginTop: { xs: '3.5rem', sm: '7rem' }, textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left' } }}>
            <Typography sx={{ fontSize: { xs: '20px', sm: '31px' }, fontWeight: '500' }}>
                Skip the travel! Find Online
            </Typography>
            <Typography sx={{ fontSize: { xs: '40px', sm: '56px' }, fontWeight: '700' }}>
                Medical <span style={{ color: theme.palette.primary.main }}>Centers</span>
            </Typography>
            <Typography sx={{ fontWeight: '400', fontSize: { xs: '15px', sm: '20px' }, color: '#5C6169' }}>
                Connect instantly with a 24x7 specialist or choose to <br /> video visit a particular doctor.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'center', lg:'flex-start' } }}>
                <CustomButton type={"Find Centers"} />
            </Box>
        </Box>
        <Box sx={{ maxWidth: "643px", maxHeight: '735.94px', width: { md: '500px', lg: '643px' } }}>
            <img src={HeroImage} alt="image of two doctors" style={{ width: '100%', maxHeight: '100%' }} />
        </Box>
    </Container>
}

export default Hero;