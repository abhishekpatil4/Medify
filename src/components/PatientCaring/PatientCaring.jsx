import { Container } from "@mui/material"
import photo1 from "../../assets/patientCaring/patientCaring1.png";
import photo2 from "../../assets/patientCaring/patientCaring2.png";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import CustomListItem from "./CustomListItem";
import Message from "./MessageBox";
import Box from "@mui/material/Box";

const PatientCaring = () => {
    const theme = useTheme();
    return <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, padding: '0rem 1rem 5rem 1rem', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Box sx={{ width: { xs: '95vw', md: '519px' }, height: '486px', borderRadius: '8px 0px 0px 0px' }}>
            <Box style={{ position: 'relative' }}>
                <Message />
            </Box>
            <Box sx={{ position: "relative" }}>
                <Box sx={{ position: 'absolute', border: "5px solid white", width: { xs: '280px', xl: "332px" }, height: { lg: "230px", xl: "275px" }, left: { xs: '70px', lg: '250px' }, top: '0px' }}>
                    <img src={photo1} alt="doctor speaking to a patient" style={{ objectFit: 'cover', width: "100%", height: "100%" }} />
                </Box>
                {/* <img src={photo1} alt="doctor speaking to a patient" style={{ objectFit: 'cover', position: 'absolute', border: "5px solid white", width: "332px", height: "275px", left: '250px', top: '0px' }} /> */}
                <Box sx={{ position: 'absolute', border: "5px solid white", width: { xs: '280px', xl: "332px" }, height: { lg: "230px", xl: "275px" }, left: { xs: '0px', lg: '150px' }, top: {xs:"190px", lg:"220px"} }}>
                    <img src={photo2} alt="doctor speaking to a patient" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </Box >
                {/* <img src={photo2} alt="doctor speaking to a patient" style={{ objectFit: 'cover', position: 'absolute', border: "5px solid white", width: '332px', height: '275px', left: '150px', top: "220px" }} /> */}
            </Box>
        </Box>
        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography sx={{ fontSize: { xs: '14px', xl: '16px' }, fontWeight: 600, lineHeight: { xs: '10px', sm: '27px' }, color: theme.palette.primary.main }}>
                HELPING PATIENTS FROM AROUND THE GLOBE!!
            </Typography>
            <Typography sx={{ fontSize: { xs: '38px', xl: '48px' }, fontWeight: 600, lineHeight: '67px', color: theme.palette.primary.main }}>
                <span style={{ color: theme.palette.secondary.main }}>Patient</span> Caring
            </Typography>
            <Typography sx={{ height: { xs: '75px', xl: '87px' }, width: { xs: '95vw', md: '563px' }, color: '#77829D', fontSize: '17px', fontWeight: 500, lineHeight: '29px', margin: { xs: '0.5rem 0rem', md: '1.5rem 0rem' } }}>
                Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
            </Typography>
            <Box sx={{ marginTop: { xs: '6rem', md: '0rem' } }}>
                <CustomListItem textContent={"Stay Updated About Your Health"} />
                <CustomListItem textContent={"Check Your Results Online"} />
                <CustomListItem textContent={"Manage Your Appointments"} />
            </Box>
        </Box>
    </Box >
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