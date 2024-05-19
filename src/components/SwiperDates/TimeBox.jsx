import { Box } from "@mui/material"
import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
const TimeBox = ({ time }) => {
    const theme = useTheme();
    return <Box sx={{ width: '60px', height: '15px', borderRadius: '3px', padding: '7px', border: `1px solid ${theme.palette.primary.main}`, color: theme.palette.primary.main, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography sx={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px', textAlign: 'center' }}>
            {time}
        </Typography>
    </Box>
}

export default TimeBox;
