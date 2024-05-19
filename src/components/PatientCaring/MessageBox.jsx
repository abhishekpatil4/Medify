import mobile from "../../../src/assets/mobileIcon/main.svg"
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";
const Message = () => {
    const theme = useTheme();
    return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'absolute', height: '86px', top: '95px', left: '70px', width: '234px', zIndex: 1, backgroundColor: 'white', borderRadius: '8px', boxShadow: "0px 15px 25px 0px #0000000F" }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
            <img src={mobile} alt="Smiley face" width="43px" height="34px" style={{ backgroundColor: 'white' }} />
            <Typography style={{ fontSize: '16px', lineHeight: '27px', fontWeight: 700, color: theme.palette.secondary.main }}>Free Consultation</Typography>
        </div>
        <Typography style={{ textAlign: 'center', fontSize: '15px', lineHeight: '24px', fontWeight: 500, color: 'gray' }}>Consultation with the best</Typography>
    </div>
}

export default Message;