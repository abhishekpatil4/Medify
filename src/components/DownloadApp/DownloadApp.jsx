import mockup from "../../assets/DownloadApp/appMockup.png"
import mobileBorder from "../../assets/DownloadApp/mobileBorder.png"
import { Typography } from "@mui/material"
import { useTheme } from "@mui/material"
import TextField from '@mui/material/TextField';
import CustomButton from "../Button/CustomButton";

const DownloadApp = () => {
    const theme = useTheme();
    return <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'space-evenly', marginTop:'6rem' }}>
        <div>
            <div style={{ position: 'relative', width: '302px', height: '427px', zIndex: 1 }}>
                <img src={mobileBorder} alt="" width={"100%"} />
                <img src={mockup} style={{ width: '98%', left:'3px', position: 'relative', top: '-612px', zIndex: -1 }} width={"100%"} alt="mobile app mockup" />
            </div>
            <div style={{ position: 'relative', left: "200px", top: "-485px", zIndex: -1, width: '302px', height: '427px' }}>
                <img src={mobileBorder} alt="" width={"100%"} />
                <img src={mockup} style={{ left:'3px', width: '98%', position: 'relative', top: '-612px', zIndex: -1 }} width={"100%"} alt="mobile app mockup" />
            </div>
            {/* <div style={{ width: '927px', height: '433px' }}> */}
            {/* <img style={{ objectPosition: '30% 60%', objectFit: 'cover', width: '100%' }} src={mockup} alt="" /> */}
            {/* </div> */}
        </div>
        <div>
            <Typography style={{ fontSize: '48px', fontWeight: 600, lineHeight: '67px', color: theme.palette.secondary.main }}>Download the<br /><span style={{ color: theme.palette.primary.main }}>Medify</span> App</Typography>
            <Typography style={{ fontSize: '16px', fontWeight: 500, lineHeight: '24px', color: '#414146' }}>
                Get the link to download the app
            </Typography>
            <TextField label="Enter phone number" style={{ backgroundColor: 'white', border: '1px solid #F0F0F0', minWidth: '20rem' }} />
            <CustomButton type={"Send SMS"} />
        </div>
    </div>
}

export default DownloadApp;

// width: 927px;
// height: 433px;
// top: 5784px;
// left: -186px;
// gap: 0px;
// border - radius: 40px 0px 0px 0px;
// opacity: 0px;
