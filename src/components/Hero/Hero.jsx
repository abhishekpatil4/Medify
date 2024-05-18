import { Typography } from "@mui/material"
import { useTheme } from "@emotion/react"
import HeroImage from "../../assets/heroimage.png"
import {Container} from "@mui/material"
import CustomButton from "../Button/CustomButton"
const Hero = () => {
    const theme = useTheme();
    return <Container maxWidth="xl" sx={{display:'flex', height:"832px", overflow:'hidden', position:"relative", justifyContent:'space-between', flexWrap:'wrap'}}>
            <div style={{ marginTop: '7rem' }}> 
                <Typography style={{ fontSize: '31px', fontWeight: '500' }}>
                    Skip the travel! Find Online
                </Typography>
                <Typography style={{ fontSize: '56px', fontWeight: '700' }}>
                    Medical <span style={{ color: theme.palette.primary.main }}>Centers</span>
                </Typography>
                <Typography style={{ fontWeight: '400', fontSize: '20px', color: '#5C6169' }}>
                    Connect instantly with a 24x7 specialist or choose to <br /> video visit a particular doctor.
                </Typography>
                <CustomButton type={"Find Centers"}/>
            </div>
            <div>
                <img src={HeroImage} alt="image of two doctors" style={{ width:'90vw' ,maxWidth: "643px", maxHeight: '735.94px' }} />
            </div>
    </Container>
}

export default Hero;