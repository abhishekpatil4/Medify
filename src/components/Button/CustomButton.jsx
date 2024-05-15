import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";

const CustomButton = ({type, icon, fun}) =>{
    const theme = useTheme();
    return <Button onClick={fun} style={{backgroundColor:theme.palette.primary.main, color:'white', textTransform:'none', borderRadius:'8px', paddingLeft:'18px', paddingRight:'18px', margin:'1rem 0rem'}}>
        {type}
    </Button>
}

export default CustomButton;