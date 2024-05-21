import Icon from "../../../src/assets/Healthcare Consultation Clip Path Group.svg"
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
const CustomListItem = ({ textContent }) => {
    const theme = useTheme();
    return <Box sx={{ display: 'flex', justifyContent:{xs:'center', md:'left'}, alignItems: 'center', height: '27' }}>
        <img src={Icon} alt="icon" />
        <Typography sx={{ position: 'relative', left: '10px', fontSize: { xs: '14px', sm: '18px' }, fontWeight: 500, lineHeight: { xs: '40px', md: '50px' }, color: theme.palette.secondary.main }}>
            {textContent}
        </Typography>
    </Box >
}

export default CustomListItem;