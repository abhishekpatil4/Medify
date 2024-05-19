import { Box } from "@mui/material";
import Hospitalicon from "../../assets/HospitalPage/Hospitalicon.svg"
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import FreeIcon from "../../assets/HospitalPage/free.svg";
import CustomButton from "../Button/CustomButton";
import thumbsUp from "../../assets/HospitalPage/thumbsup.svg"
const HospitalCard = ({ name, state, city }) => {
    const theme = useTheme();
    return <Box sx={{ backgroundColor: 'white', borderRadius: '15px', width: '775px', height: '268px', display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', padding: '10px', marginTop: '1rem' }}>
        <img src={Hospitalicon} alt="" height={"140px"} width={"140px"} style={{ marginTop: '1rem' }} />
        <Box>
            <Box sx={{ width: '310px', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', gap: 1, borderBottom: "1px dashed #E8E8F0" }}>
                <Typography sx={{ color: theme.palette.primary.main, fontSize: '20px', fontWeight: 600, lineHeight: '28px' }}>
                    {name}
                </Typography>
                <Typography sx={{ color: '#414146', fontSize: '14px', fontWeight: 700, lineHeight: '20px' }}>
                    {city}, {state}
                </Typography>
                <Typography sx={{ color: '#414146', fontSize: '14px', fontWeight: 400, lineHeight: '20px' }}>
                    Smilessence Center for Advanced Dentistry + 1 <br /> more
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
                    <img src={FreeIcon} alt="" />
                    <Typography sx={{ textDecoration: 'line-through', color: '#787887', fontSize: '13px' }}>
                        ₹500
                    </Typography>
                    <Typography sx={{ color: '#414146', fontSize: '14px', fontWeight: 400, lineHeight: '20px' }}>
                        Consultation fee at clinic
                    </Typography>
                </Box>
            </Box>
            <img src={thumbsUp} alt="" style={{ marginTop: '15px' }} />
        </Box>
        <Box sx={{ width: '236px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'column' }}>
            <Typography sx={{ color: '#01A400', fontWeight: 500, fontSize: '14px', lineHeight: '20px' }}>Available Today</Typography>
            <CustomButton type={"BOOK FREE Center Visit"} width={"14rem"} />
        </Box>
    </Box>
}


export default HospitalCard;

