import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
const StatsCard = ({ icon, count, type, iconColor, iconBgColor }) => {
    const theme = useTheme();
    return <Box sx={{ width: { xs: '150px', md: '242px' }, height: { xs: '204px', md: '304px' }, borderRadius: '8px', boxShadow: '0px 15px 45px -5px #00000012', backgroundColor: "white", display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ height: '100px', width: "100px", backgroundColor: iconBgColor, borderRadius: '100%', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
            <img height="50px" width="50px" src={icon} alt="" style={{ filter: iconColor, padding: '20px' }} />
        </div>
        <Typography sx={{ fontSize: { xs: '24px', md: '48px' }, fontWeight: 600, lineHeight: '48px', color: theme.palette.secondary.main }}>
            {count}+
        </Typography>
        <Typography sx={{ fontSize: { xs: '12px', md: '18px' }, fontWeight: 500, lineHeight: '28px', color: '#77829D' }}>
            {type}
        </Typography>
    </Box>
}

export default StatsCard;
