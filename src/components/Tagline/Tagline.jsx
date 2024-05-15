import { useTheme } from '@mui/material/styles';
const Tagline = () => {
    const theme = useTheme();
    return <div style={{backgroundColor:theme.palette.primary.main, color:'white', justifyContent:'center', display:'flex', padding:'0.5rem'}}>
         The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
    </div>
}

export default Tagline;
