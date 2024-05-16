import { Typography } from "@mui/material"
import "./specialist.css"
import { useTheme } from "@mui/material"
const Specialist = ({ name, image, specialisation }) => {
    const theme = useTheme();
    return <div style={{width:'370px', height:'504px'}}>
        <div style={{ backgroundColor: 'white', boxShadow: "0px 15px 55px -10px #00000017", width: '370px', height: '414px', borderRadius: '100% 100% 4px 4px' }}>
            <div className="blueGradientBg" style={{ position: 'relative', borderRadius: '100% 100% 4px 4px', width: '350px', height: '394px', top: '10px', left: '10px' }}>
                <img src={image} alt="doctor image" style={{ position: 'relative', top: '30px', left: '27.5px', width: '295px', height: '364px' }} />
            </div>
        </div>
        <Typography style={{ textAlign: 'center', fontSize: '24px', fontWeight: 350, color:theme.palette.secondary.main, lineHeight:'48px' }}>
            {name}
        </Typography>
        <Typography style={{ textAlign: 'center', fontSize: '17px', fontWeight: 500, color: theme.palette.primary.main, lineHeight:'24px' }}>
            {specialisation}
        </Typography>
    </div>
}

export default Specialist;

