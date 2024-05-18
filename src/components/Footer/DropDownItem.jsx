import rightIcon from "../../assets/RightIcon.svg"
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
const DropDownItem = ({ name }) => {
    return <Box sx={{
        display: 'flex', alignItems: 'center', gap: 2}}>
        <img src={rightIcon} alt="" />
        <Typography style={{ fontWeight: 400, fontSize: '16px', color: 'white', lineHeight: '28px' }}>{name}</Typography>
    </Box>
}

export default DropDownItem;