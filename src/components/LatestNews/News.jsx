import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import detox from "../../../src/assets/newsImages/detox.png"
import Divider from '@mui/material/Divider';
import drImg from "../../../src/assets/newsImages/dr-img-small.jpeg"
import { useTheme } from '@emotion/react';
const News = () => {
    const theme = useTheme();
    return (
        <Card sx={{ maxWidth: 345 }}>   
            <CardMedia
                sx={{position:'relative', right:'380px', height: '300px', width: '1100px' }}
                image={detox}
                title="Article"
            />
            <CardContent>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography style={{ paddingRight: '10px', color: '#77829D', fontSize: '17px', fontWeight: 500, lineHeight: '27px' }} gutterBottom variant="h5" component="div">
                        Medical
                    </Typography>
                    <Divider orientation="vertical" flexItem style={{ marginBottom: "10px", marginTop: "4px" }} />
                    <Typography style={{ paddingLeft: '10px', color: '#77829D', fontSize: '17px', fontWeight: 500, lineHeight: '27px' }} gutterBottom variant="h5" component="div">
                        March 31, 2022
                    </Typography>
                </div>
                <Typography style={{ color: theme.palette.secondary.main, fontSize: '18px', fontWeight: 500, lineHeight: '27px' }}>
                    6 Tips To Protect Your Mental Health When You're Sick
                </Typography>
                <Typography style={{fontSize:'17px', fontWeight:500, lineHeight:'27px', display:'flex', alignItems:'center', justifyContent:'flex-start', marginTop:'6px'}}>
                    <img src={drImg} alt="" height={"32px"} width={"32px"} style={{borderRadius:'100%'}}/>
                    <span style={{marginLeft:'10px'}}>Rebecca Lee</span>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default News;

