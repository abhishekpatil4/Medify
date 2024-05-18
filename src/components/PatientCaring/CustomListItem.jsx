import Icon from "../../../src/assets/Healthcare Consultation Clip Path Group.svg"
import { Typography } from "@mui/material";
import {useTheme} from "@mui/material";
const CustomListItem = ({textContent}) => {
    const theme  = useTheme();
    return <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', height: '50px' }}>
        <img src={Icon} alt="icon" />
        <Typography style={{ position: 'relative', left: '10px', fontSize: '18px', fontWeight: 500, lineHeight: '27px', color: theme.palette.secondary.main }}>
            {textContent}
        </Typography>
    </div>
}

export default CustomListItem;