import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import doctorPatientTalking from "../../assets/doctorPatientTalk.png"
import Smiley from "../../assets/FAQ/smiley.svg"
import heartInHand from "../../assets/FAQ/heartInHand.svg"

const FAQ = () => {
    const theme = useTheme();
    return <div style={{ backgroundColor: 'white', paddingBottom:"3rem"}}>
        <Container maxWidth="xl" style={{ paddingTop: '2rem' }}>
            <Typography style={{ textAlign: 'center', fontSize: '16px', fontWeight: 600, lineHeight: '27px', color: theme.palette.primary.main }}>
                Get Your Answer
            </Typography>
            <Typography style={{ textAlign: 'center', fontSize: '48px', fontWeight: 600, lineHeight: '67px', color: theme.palette.secondary.main }}>
                Frequently Asked Questions
            </Typography>
            <div style={{ flexWrap: 'wrap', display: 'flex', justifyContent: 'space-evenly', marginTop: '3rem' }}>
                <div style={{position:'relative'}}>
                    <div style={{ position: 'absolute', left: '468px', top: '150px', height: '80px', width: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={heartInHand} alt="Heart in hand icon" width="80px" height="40px" style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '100%', boxShadow: "0px 15px 25px 0px #0000000F" }} />
                    </div>
                    <div style={{ borderRadius: '8px', width: '500px', height: '480px', border: '10px solid #FFFFFF', boxShadow: '0px 15px 55px -10px #00000017' }}>
                        <img width={"500px"} height={"480px"} style={{ objectFit: 'cover' }} src={doctorPatientTalking} alt="Doctor talking to a patient" />
                    </div>
                    {/* left: '-110px', top: '-198px', */}
                    <div style={{ display: 'flex', position: 'absolute' ,height: '104px',top:'300px', left:'-110px', width: '240px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex:1, backgroundColor:'white', borderRadius: '8px', boxShadow: "0px 15px 25px 0px #0000000F" }}>
                        <img src={Smiley} alt="Smiley face" width="44px" height="44px" style={{ backgroundColor: 'white', padding: '0rem 1rem 0rem 1rem' }} />
                        <div>
                            <Typography style={{ fontSize: '24px', lineHeight: '33px', fontWeight: 600, color: theme.palette.secondary.main }}>84k+</Typography>
                            <Typography style={{ fontSize: '17px', lineHeight: '28px', fontWeight: 400, color: 'gray' }}>Happy Patients</Typography>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    <div style={{ gap: 20, maxWidth: '464px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography style={{ fontSize: '18px', fontWeight: 600, lineHeight: '30px', color: theme.palette.secondary.main }}>
                            Why choose our medical for your family?
                        </Typography>
                        <span style={{ color: theme.palette.primary.main, fontWeight: 600, fontSize: '25px' }}>+</span>
                    </div>
                    <div style={{ gap: 20, maxWidth: '464px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography style={{ fontSize: '18px', fontWeight: 600, lineHeight: '30px', color: theme.palette.secondary.main }}>
                            Why we are different from others?
                        </Typography>
                        <span style={{ color: theme.palette.primary.main, fontWeight: 600, fontSize: '25px' }}>+</span>
                    </div>
                    <div style={{ gap: 20, maxWidth: '464px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography style={{ fontSize: '18px', fontWeight: 600, lineHeight: '30px', color: theme.palette.secondary.main }}>
                            Trusted & experience senior care & love
                        </Typography>
                        <span style={{ color: theme.palette.primary.main, fontWeight: 600, fontSize: '25px' }}>+</span>
                    </div>
                    <div style={{ gap: 20, flexWrap: 'wrap', maxWidth: '464px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography style={{ fontSize: '18px', fontWeight: 600, lineHeight: '30px', color: theme.palette.secondary.main }}>
                            How to get appointment for emergency <br /> cases?
                        </Typography>
                        <span style={{ color: theme.palette.primary.main, fontWeight: 600, fontSize: '25px' }}>+</span>
                    </div>
                </div>
            </div>
        </Container>
    </div>
}

export default FAQ;

