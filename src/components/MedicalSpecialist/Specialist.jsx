import { Typography } from "@mui/material"
import "./specialist.css"
import { useTheme } from "@mui/material"
import Box from "@mui/material/Box"
import { useMediaQuery } from '@mui/material';

const Specialist = ({ name, image, specialisation }) => {
    const isSmallScreen = useMediaQuery('(max-width:880px)');
    const theme = useTheme();
    return (isSmallScreen ?
        <Box sx={{ width: '270px', height: '370px' }}>
            <div style={{ backgroundColor: 'white', boxShadow: "0px 15px 55px -10px #00000017", width: '100%', height: '314px', borderRadius: '100% 100% 4px 4px' }}>
                <Box className="blueGradientBg" style={{ position: 'relative', borderRadius: '100% 100% 4px 4px', width: '250px', height: '294px', top: '10px', left: '10px' }}>
                    <img src={image} alt="doctor image" style={{ position: 'relative', top: '30px', left: '27.5px', width: '195px', height: '264px' }} />
                </Box>
            </div>
            <Typography sx={{ textAlign: 'center', fontSize: { xs: '16px', md: '24px' }, fontWeight: 350, color: theme.palette.secondary.main, lineHeight: { sx: '40px', md: '48px' } }}>
                {name}
            </Typography>
            <Typography style={{ textAlign: 'center', fontSize: { xs: '7px', md: '17px' }, fontWeight: 500, color: theme.palette.primary.main, lineHeight: '24px' }}>
                {specialisation}
            </Typography>
        </Box>
        :
        <Box sx={{ width: '370px', height: '504px' }}>
            <div style={{ backgroundColor: 'white', boxShadow: "0px 15px 55px -10px #00000017", width: '100%', height: '414px', borderRadius: '100% 100% 4px 4px' }}>
                <Box className="blueGradientBg" style={{ position: 'relative', borderRadius: '100% 100% 4px 4px', width: '350px', height: '394px', top: '10px', left: '10px' }}>
                    <img src={image} alt="doctor image" style={{ position: 'relative', top: '30px', left: '27.5px', width: '295px', height: '364px' }} />
                </Box>
            </div>
            <Typography style={{ textAlign: 'center', fontSize: '24px', fontWeight: 350, color: theme.palette.secondary.main, lineHeight: '48px' }}>
                {name}
            </Typography>
            <Typography style={{ textAlign: 'center', fontSize: '17px', fontWeight: 500, color: theme.palette.primary.main, lineHeight: '24px' }}>
                {specialisation}
            </Typography>
        </Box>
    )
}

export default Specialist;
