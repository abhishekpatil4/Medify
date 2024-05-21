import mockup from "../../assets/DownloadApp/appMockup.png"
import mobileBorder from "../../assets/DownloadApp/mobileBorder.png"
import { Typography } from "@mui/material"
import { useTheme } from "@mui/material"
import TextField from '@mui/material/TextField';
import CustomButton from "../Button/CustomButton";
import Arrow from "../../assets/DownloadApp/arrow.svg"
import playStore from "../../assets/DownloadApp/google_play.png"
import appStore from "../../assets/DownloadApp/apple_store.png"
import PhoneNumberInput from "../PhoneNumberInput/PhoneNumberInput";
import Box from "@mui/material/Box";
import { useMediaQuery } from '@mui/material';

const DownloadApp = () => {
    const is1600 = useMediaQuery('(max-width:1600px)');
    const isSmall = useMediaQuery('(max-width:1270px)');
    const theme = useTheme();
    return (!isSmall ?
        <div style={{ height: '550px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', marginTop: '6rem', height: "100%", width: '100%', gap: is1600 && 200 }}>
                <div>
                    <div style={{ position: 'relative', width: '302px', height: '427px', zIndex: 1 }}>
                        <img src={mobileBorder} alt="" width={"100%"} />
                        <img src={mockup} style={{ width: '98%', left: '3px', position: 'relative', top: '-612px', zIndex: -1 }} width={"100%"} alt="mobile app mockup" />
                    </div>
                    <div style={{ position: 'relative', left: "200px", top: "-485px", zIndex: -1, width: '302px', height: '427px' }}>
                        <img src={mobileBorder} alt="" width={"100%"} />
                        <img src={mockup} style={{ left: '3px', width: '98%', position: 'relative', top: '-612px', zIndex: -1 }} width={"100%"} alt="mobile app mockup" />
                    </div>
                </div>
                <div style={{ position: 'relative', top: '-100px' }}>
                    <div style={{ position: 'relative', right: '70px', top: '170px' }}>
                        <img src={Arrow} alt="" />
                    </div>
                    <Typography style={{ fontSize: '48px', fontWeight: 600, lineHeight: '67px', color: theme.palette.secondary.main }}>Download the<br /><span style={{ color: theme.palette.primary.main }}>Medify</span> App</Typography>
                    <Typography style={{ fontSize: '16px', fontWeight: 500, lineHeight: '24px', color: '#414146', margin: '1rem 0rem 0.5rem 0rem' }}>
                        Get the link to download the app
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        <PhoneNumberInput />
                        <CustomButton type={"Send SMS"} height={"56px"} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, marginTop: '2rem' }}>
                        <img src={playStore} alt="playstore" />
                        <img src={appStore} alt="appStore" />
                    </div>
                </div>
            </div>
        </div>
        :
        <Box sx={{ flexDirection: "column", display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginTop: '6rem' }}>
            <Box>
                <div style={{ position: 'relative', width: '202px', zIndex: 1, height: '327px' }}>
                    <img src={mobileBorder} alt="" width={"100%"} />
                    <img src={mockup} style={{ width: '98%', left: '1px', position: 'relative', top: '-410px', zIndex: -1 }} alt="mobile app mockup" />
                </div>

                {/* left: "200px", */}
                {/* <div style={{ position: 'relative', top: '-500px', zIndex: -1, width: '202px', height: '27px' }}>
                    <img src={mobileBorder} alt="" width={"100%"} />
                    <img src={mockup} style={{ left: '3px', width: '98%', position: 'relative', top: '-410px', zIndex: -1 }} alt="mobile app mockup" />
                </div> */}
            </Box>
            <Box>
                <Box sx={{ marginTop: '10rem' }}>
                    {/* <div style={{ position: 'relative', right: '70px', top: '170px' }}>
                        <img src={Arrow} alt="arrow icon" />
                    </div> */}
                    <Typography style={{ textAlign: "center", fontSize: '30px', fontWeight: 600, lineHeight: '30px', color: theme.palette.secondary.main }}>Download the<br /><span style={{ color: theme.palette.primary.main }}>Medify</span> App</Typography>
                    <Typography style={{ textAlign: "center", fontSize: '16px', fontWeight: 500, lineHeight: '24px', color: '#414146', margin: '1rem 0rem 0.5rem 0rem' }}>
                        Get the link to download the app
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, flexDirection: 'column' }}>
                        <PhoneNumberInput minWidth={"20rem"} />
                        <CustomButton type={"Send SMS"} height={"56px"} />
                    </div>
                    <div style={{ flexDirection: 'column', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, margin: '2rem 0rem' }}>
                        <img src={playStore} alt="playstore" height={"50px"} />
                        <img src={appStore} alt="appStore" height={"50px"} />
                    </div>
                </Box>
            </Box>
        </Box>
    )


}

export default DownloadApp;


//small
{/* <Box sx={{ flexDirection: "column", display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginTop: '6rem' }}>
            <Box>
                <div style={{ position: 'relative', width: '302px', zIndex: 1,height: '427px' }}>
                    <img src={mobileBorder} alt="" width={"100%"} />
                    <img src={mockup} style={{ width: '98%', left: '3px', position: 'relative', top: '-612px', zIndex: -1 }} alt="mobile app mockup" />
                </div>
                <div style={{ position: 'relative', left: "200px", top:'-500px', zIndex: -1, width: '302px', height: '127px' }}>
                    <img src={mobileBorder} alt="" width={"100%"} />
                    <img src={mockup} style={{ left: '3px', width: '98%', position: 'relative', top: '-612px', zIndex: -1 }} alt="mobile app mockup" />
                </div>
            </Box>
            <Box>
                <div>
                    <div style={{ position: 'relative', right: '70px', top: '170px' }}>
                        <img src={Arrow} alt="arrow icon" />
                    </div>
                    <Typography style={{ fontSize: '48px', fontWeight: 600, lineHeight: '67px', color: theme.palette.secondary.main }}>Download the<br /><span style={{ color: theme.palette.primary.main }}>Medify</span> App</Typography>
                    <Typography style={{ fontSize: '16px', fontWeight: 500, lineHeight: '24px', color: '#414146', margin: '1rem 0rem 0.5rem 0rem' }}>
                        Get the link to download the app
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        <PhoneNumberInput />
                        <CustomButton type={"Send SMS"} height={"56px"} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, marginTop: '2rem' }}>
                        <img src={playStore} alt="playstore" />
                        <img src={appStore} alt="appStore" />
                    </div>
                </div>
            </Box>
        </Box>  */}