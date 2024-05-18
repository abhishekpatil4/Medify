import { Container } from "@mui/material"
import photo1 from "../../assets/patientCaring/patientCaring1.png";
import photo2 from "../../assets/patientCaring/patientCaring2.png";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import mobile from "../../../src/assets/mobileIcon/main.svg"
import CustomListItem from "./CustomListItem";

const PatientCaring = () => {
    const theme = useTheme();
    return <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '5rem', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <div style={{ position: 'relative', width: '519px', height: '486px', borderRadius: '8px 0px 0px 0px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'absolute', height: '86px', top: '100px', left: '122px', width: '234px', display: 'flex', zIndex: 1, backgroundColor: 'white', borderRadius: '8px', boxShadow: "0px 15px 25px 0px #0000000F" }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
                    <img src={mobile} alt="Smiley face" width="43px" height="34px" style={{ backgroundColor: 'white' }} />
                    <Typography style={{ fontSize: '16px', lineHeight: '27px', fontWeight: 700, color: theme.palette.secondary.main }}>Free Consultation</Typography>
                </div>
                <Typography style={{ textAlign: 'center', fontSize: '15px', lineHeight: '24px', fontWeight: 500, color: 'gray' }}>Consultation with the best</Typography>
            </div>
            <img src={photo1} alt="doctor speaking to a patient" style={{ objectFit: 'cover', position: 'relative', border: "5px solid white", width: "332px", height: "275px", left: '305px', top: '0px' }} />
            <img src={photo2} alt="doctor speaking to a patient" style={{ objectFit: 'cover', position: 'relative', border: "5px solid white", width: '332px', height: '275px', left: '201px', top: "-75px" }} />
        </div>
        <div style={{textAlign: 'left' }}>
            <Typography style={{ position: 'relative', top: "60px", fontSize: '16px', fontWeight: 600, lineHeight: '27px', color: theme.palette.primary.main }}>
                HELPING PATIENTS FROM AROUND THE GLOBE!!
            </Typography>
            <Typography style={{ position: 'relative', top: '65px', fontSize: '48px', fontWeight: 600, lineHeight: '67px', color: theme.palette.primary.main }}>
                <span style={{ color: theme.palette.secondary.main }}>Patient</span> Caring
            </Typography>
            <Typography style={{ top: '90px', position: 'relative', height: '87px', width: '563px', color: '#77829D', fontSize: '17px', fontWeight: 500, lineHeight: '29px' }}>
                Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
            </Typography>
            <div style={{ position: "relative", top: '120px' }}>
                <CustomListItem textContent={"Stay Updated About Your Health"} />
                <CustomListItem textContent={"Check Your Results Online"} />
                <CustomListItem textContent={"Manage Your Appointments"} />
            </div>
        </div>
    </div>
}



export default PatientCaring;


//para
// top: 3104px;
// left: 728px;






// 1
// top: 2935px;
// left: 325px;
// border: 5px 0px 0px 0px;

//2
// top: 3146px;
// left: 221px;
// border: 5px 0px 0px 0px;


{/* <img src={photo1} alt="doctor speaking to a patient" style={{position:'relative', border: "5px solid white", width: "332px", height: "275px", left:'325px', top:'65px' }} />
            <img src={photo2} alt="doctor speaking to a patient" style={{position:'relative', border: "5px solid white", width: '332px', height: '275px', left:'221px' }} /> */}