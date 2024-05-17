import HospitalIcon from "../../../src/assets/SpecialisationIcons/Dentistry.svg"
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";
const StatsCard = () => {
    const theme = useTheme();
    return <div style={{ width: '242px', height: '304px', borderRadius: '8px', boxShadow: '0px 15px 45px -5px #00000012', backgroundColor: "white", display:'flex', justifyContent:'space-evenly', alignItems:'center', flexDirection:'column' }}>
        <div style={{ height: '100px', width: "100px", backgroundColor: 'lightyellow', borderRadius: '100%', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
            <img height="50px" width="50px" src={HospitalIcon} alt="" style={{ filter: 'brightness(0) saturate(100%) invert(65%) sepia(96%) saturate(1340%) hue-rotate(359deg) brightness(101%) contrast(104%)', padding: '20px' }} />
        </div>
        <Typography style={{ fontSize: '48px', fontWeight: 600, lineHeight: '48px', color: theme.palette.secondary.main }}>
            1000+
        </Typography>
        <Typography style={{ fontSize: '18px', fontWeight: 500, lineHeight: '28px', color:'#77829D' }}>
            Happy Patients
        </Typography>
    </div>
}

export default StatsCard;
