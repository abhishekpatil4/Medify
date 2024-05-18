import mockup from "../../assets/DownloadApp/appMockup.png"
import mobileBorder from "../../assets/DownloadApp/mobileBorder.png"
import { Typography } from "@mui/material"
import { useTheme } from "@mui/material"
import TextField from '@mui/material/TextField';
import CustomButton from "../Button/CustomButton";
import Arrow from "../../assets/DownloadApp/arrow.svg"
import playStore from "../../assets/DownloadApp/google_play.png"
import appStore from "../../assets/DownloadApp/apple_store.png"

const DownloadApp = () => {
    const theme = useTheme();
    return <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', marginTop: '6rem' }}>
        <div>
            <div style={{ position: 'relative', width: '302px', height: '427px', zIndex: 1 }}>
                <img src={mobileBorder} alt="" width={"100%"} />
                <img src={mockup} style={{ width: '98%', left: '3px', position: 'relative', top: '-612px', zIndex: -1 }} width={"100%"} alt="mobile app mockup" />
            </div>
            <div style={{ position: 'relative', left: "200px", top: "-485px", zIndex: -1, width: '302px', height: '427px' }}>
                <img src={mobileBorder} alt="" width={"100%"} />
                <img src={mockup} style={{ left: '3px', width: '98%', position: 'relative', top: '-612px', zIndex: -1 }} width={"100%"} alt="mobile app mockup" />
            </div>
            {/* <div style={{ width: '927px', height: '433px' }}> */}
            {/* <img style={{ objectPosition: '30% 60%', objectFit: 'cover', width: '100%' }} src={mockup} alt="" /> */}
            {/* </div> */}
        </div>
        <div>
            <div style={{ position: 'relative', right: '70px', top: '170px' }}>
                <img src={Arrow} alt="" />
            </div>
            <Typography style={{ fontSize: '48px', fontWeight: 600, lineHeight: '67px', color: theme.palette.secondary.main }}>Download the<br /><span style={{ color: theme.palette.primary.main }}>Medify</span> App</Typography>
            <Typography style={{ fontSize: '16px', fontWeight: 500, lineHeight: '24px', color: '#414146', margin: '1rem 0rem 0.5rem 0rem' }}>
                Get the link to download the app
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px', backgroundcolor: 'red' }}>+91</div>
                <TextField label="Enter phone number" style={{ backgroundColor: 'white', border: '1px solid #F0F0F0', minWidth: '20rem' }} />
            </div>
            <CustomButton type={"Send SMS"} />
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:20}}>
                <img src={playStore} alt="playstore" />
                <img src={appStore} alt="appStore" />
            </div>
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
