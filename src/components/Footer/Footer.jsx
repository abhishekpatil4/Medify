import { useTheme } from "@emotion/react";
import { Container } from "@mui/material";
import Grid from '@mui/material/Grid';
import medifyLogo from "../../assets/medify_logo.svg"
import { Typography } from "@mui/material";
import SocialMediaIcon from "./SocialMediaIcon";
import facebook from "../../assets/SocialMediaIcons/facebook.svg"
import pinterest from "../../assets/SocialMediaIcons/pinterest.svg"
import twitter from "../../assets/SocialMediaIcons/twitter.svg"
import youtube from "../../assets/SocialMediaIcons/youtube.svg"
import rightIcon from "../../assets/RightIcon.svg"
import Divider from '@mui/material/Divider';

const links1 = [
    {
        name: "About Us"
    },
    {
        name: "Our Pricing"
    },
    {
        name: "Our Gallary"
    },
    {
        name: "Appointment"
    },
    {
        name: "Privacy Policy"
    }
]
const links2 = [
    {
        name: "Orthology"
    },
    {
        name: "Neurology"
    },
    {
        name: "Dental Care"
    },
    {
        name: "Opthalmology"
    },
    {
        name: "Cardiology"
    }
]

const Footer = () => {
    const theme = useTheme();
    return <div style={{ backgroundColor: theme.palette.secondary.main, padding: "3rem 0rem" }}>
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={6} md={4}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', gap: 120 }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={medifyLogo} style={{ height: '30px' }} alt="Logo" />
                            <Typography
                                noWrap
                                component="a"
                                sx={{
                                    mr: 2,
                                    fontWeight: 700,
                                    color: theme.palette.primary.main,
                                    textDecoration: "none",
                                    marginLeft: '5px',
                                    fontSize: '24px',
                                }}
                            >
                                Medify
                            </Typography>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: "center", gap: 20 }}>
                            <SocialMediaIcon icon={facebook} />
                            <SocialMediaIcon icon={twitter} />
                            <SocialMediaIcon icon={youtube} />
                            <SocialMediaIcon icon={pinterest} />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} md={8}>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', gap: 100 }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', gap: 8 }}>
                            {
                                links1 && links1.map((d, idx) =>
                                    <div key={idx} style={{
                                        display: 'flex', alignItems: 'center', gap: 8
                                    }}>
                                        <img src={rightIcon} alt="" />
                                        <span style={{ fontWeight: 400, fontSize: '16px', color: 'white', lineHeight: '28px' }}>{d.name}</span>
                                    </div>
                                )
                            }
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', gap: 8 }}>
                            {
                                links2 && links2.map((d, idx) =>
                                    <div key={idx} style={{
                                        display: 'flex', alignItems: 'center', gap: 8
                                    }}>
                                        <img src={rightIcon} alt="" />
                                        <span style={{ fontWeight: 400, fontSize: '16px', color: 'white', lineHeight: '28px' }}>{d.name}</span>
                                    </div>
                                )
                            }
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', gap: 8 }}>
                            {
                                links1 && links1.map((d, idx) =>
                                    <div key={idx} style={{
                                        display: 'flex', alignItems: 'center', gap: 8
                                    }}>
                                        <img src={rightIcon} alt="" />
                                        <span style={{ fontWeight: 400, fontSize: '16px', color: 'white', lineHeight: '28px' }}>{d.name}</span>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Divider style={{backgroundColor:'gray', margin:"2rem 0rem"}} orientation="horizontal" variant="middle" flexItem />
            <Typography style={{ color: "white", fontSize: '16px', fontWeight: 400, lineHeight: "28px" }}>
                Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
            </Typography>
        </Container>
    </div>
}

export default Footer;