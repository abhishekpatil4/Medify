import { Button, Icon } from "@mui/material";
import { useTheme } from "@emotion/react";

const CustomButton = ({ type, icon, fun, height = '40px', width = '150px', padding= '0px 18px 0px 18px',  margin= '1rem 0rem', style ,sx}) => {
    const theme = useTheme();
    const customStyles = {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        textTransform: 'none',
        borderRadius: '8px',
        padding: padding,
        margin: margin,
        height: height, 
        width: width,
        ...style,
        ...sx
    };

    return (
        <Button startIcon={icon} onClick={fun} sx={customStyles}>
            {type}
        </Button>
    );
}

export default CustomButton;

