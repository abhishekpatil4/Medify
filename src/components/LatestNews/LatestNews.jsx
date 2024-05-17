import News from "./News";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { Grid } from "@mui/material";
const LatestNews = () => {
    const theme = useTheme();
    return <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white', paddingBottom:'4rem' }}>
        <div>
            <Typography style={{ textAlign: "center", margin: "3rem 0rem 1rem 0rem", fontSize: '16px', fontWeight: 600, lineHeight: '27px', color: theme.palette.primary.main }}>
                Blog & News
            </Typography>
            <Typography style={{marginBottom:'1.5rem' ,textAlign: "center", fontSize: '48px', fontWeight: 600, lineHeight: '67px', color: theme.palette.secondary.main }}>
                Read Our Latest News
            </Typography>
            <Grid container spacing={8}>
                <Grid item xs={12} sm={6} md={4} style={{width:'auto'}}>
                    <News />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <News />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <News />
                </Grid>
            </Grid>
        </div>
    </div>
}

export default LatestNews;


