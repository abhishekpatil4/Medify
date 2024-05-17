import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";
const StatsCard = ({ icon, count, type, iconColor, iconBgColor }) => {
    const theme = useTheme();
    return <div style={{ width: '242px', height: '304px', borderRadius: '8px', boxShadow: '0px 15px 45px -5px #00000012', backgroundColor: "white", display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ height: '100px', width: "100px", backgroundColor:iconBgColor, borderRadius: '100%', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
            <img height="50px" width="50px" src={icon} alt="" style={{ filter: iconColor, padding: '20px' }} />
        </div>
        <Typography style={{ fontSize: '48px', fontWeight: 600, lineHeight: '48px', color: theme.palette.secondary.main }}>
            {count}+
        </Typography>
        <Typography style={{ fontSize: '18px', fontWeight: 500, lineHeight: '28px', color: '#77829D' }}>
            {type}
        </Typography>
    </div>
}

export default StatsCard;
