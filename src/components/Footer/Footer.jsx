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
import Divider from '@mui/material/Divider';
import DropDownItem from "./DropDownItem";
import Box from "@mui/material/Box";

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
    return <div style={{ backgroundColor: theme.palette.secondary.main, padding: "3rem 0rem 2rem 0rem", position:'relative', bottom:'0px', zIndex:1}}>
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={4} sx={{marginBottom:{xs:'2rem', lg:0}}}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: { lg: 'flex-start', md: 'center', sm: 'center', xs: 'center' }, gap:{md: 12, xs:6} }}>
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
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 20 }}>
                            <SocialMediaIcon icon={facebook} />
                            <SocialMediaIcon icon={twitter} />
                            <SocialMediaIcon icon={youtube} />
                            <SocialMediaIcon icon={pinterest} />
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={8}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', gap: 0, flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column' } }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', gap: 8 }}>
                            {
                                links1 && links1.map((d, idx) =>
                                    <DropDownItem key={idx} name={d.name} />
                                )
                            }
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', gap: 8 }}>
                            {
                                links2 && links2.map((d, idx) =>
                                    <DropDownItem key={idx} name={d.name} />
                                )
                            }
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', gap: 8 }}>
                            {
                                links1 && links1.map((d, idx) =>
                                    <DropDownItem key={idx} name={d.name} />
                                )
                            }
                        </div>
                    </Box>
                </Grid>
            </Grid>
            <Divider style={{ backgroundColor: '#315081', margin: "4rem 0rem 2rem 0rem" }} orientation="horizontal" variant="middle" flexItem />
            <Typography sx={{ textAlign: { xs: 'center', sm: 'center' }, color: "white", fontSize: '16px', fontWeight: 400, lineHeight: "28px" }}>
                Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
            </Typography>
        </Container>
    </div>
}

export default Footer;