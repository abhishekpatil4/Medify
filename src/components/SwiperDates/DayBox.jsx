import { Box } from "@mui/material"
import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
const DayBox = ({ day }) => {
    const theme = useTheme();
    return <Box sx={{ width: '100px', height: '15px', borderRadius: '3px', padding: '7px', border: `1px solid #00A500`, color: '#007100', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography sx={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px', textAlign: 'center' }}>
            {day}
        </Typography>
    </Box>
}

export default DayBox;
