import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";
const Category = ({ icon, textContent, selected }) => {
    const theme = useTheme();
    return <Box sx={{ border: selected && `1px solid ${theme.palette.primary.main}`, width: {xs:'40%' ,sm:'150px', md: '203px' }, height: {sm:'120px', md:'153px'}, backgroundColor: selected ? '#2AA7FF14' : '#FAFBFE', borderRadius: '8px', display: 'flex', justifyContent: 'space-evenly', alignItems: "center", flexDirection: 'column', flexWrap:'wrap' }}>
        <img src={icon} alt={`${textContent} icon`} />
        <Typography sx={{ color: selected ? theme.palette.primary.main : '#ABB6C7', lineHeight: '27px', fontSize: '18px', fontWeight: selected ? 600 : 400 }}>{textContent}</Typography>
    </Box>
}

export default Category;