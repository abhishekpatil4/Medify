import { Container } from "@mui/material"
import photo1 from "../../assets/patientCaring/patientCaring1.png";
import photo2 from "../../assets/patientCaring/patientCaring2.png";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";
const PatientCaring = () => {
    const theme = useTheme();
    return <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ position: 'relative', width: '519px', height: '486px', top: '65px', left: '138px', borderRadius: '8px 0px 0px 0px' }}>
            <img src={photo1} alt="doctor speaking to a patient" style={{ objectFit: 'cover', position: 'relative', border: "5px solid white", width: "332px", height: "275px", left: '305px', top: '65px' }} />
            <img src={photo2} alt="doctor speaking to a patient" style={{ objectFit: 'cover', position: 'relative', border: "5px solid white", width: '332px', height: '275px', left: '201px' }} />
        </div>
        <div style={{ position: 'relative', left: '600px', textAlign: 'left' }}>
            <Typography style={{ fontSize: '16px', fontWeight: 600, lineHeight: '27px', color: theme.palette.primary.main }}>
                HELPING PATIENTS FROM AROUND THE GLOBE!!
            </Typography>
            <Typography style={{ fontSize: '48px', fontWeight: 600, lineHeight: '67px', color: theme.palette.primary.main }}>
                <span style={{ color: theme.palette.secondary.main }}>Patient</span> Caring
            </Typography>
            <Typography style={{height:'87px', width:'563px', color: '#77829D', fontSize: '17px', fontWeight: 500, lineHeight: '29px'}}>
                Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
            </Typography>
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