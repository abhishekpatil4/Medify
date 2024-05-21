import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import medifyLogo from '../../assets/medify_logo.svg';
import CustomButton from "../Button/CustomButton";
import { useTheme } from "@emotion/react";
import Hidden from '@mui/material/Hidden';
import { useNavigate } from "react-router-dom"

const pages = [
    "Find Doctors",
    "Hospitals",
    "Medicines",
    "Surgeries",
    "Software for Provider",
    "Facilities",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar({ bgColor = 'inherit', isHospitalPage = false }) {
    const navigate = useNavigate();
    const theme = useTheme();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleNavigate = () => {
        navigate("/");
    }

    const handleMyBookings = () => {
        navigate("/bookings");
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" style={{ backgroundColor: bgColor, color: 'black', boxShadow: '0px 0px' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Hidden mdDown>
                        <img src={medifyLogo} style={{ height: '25px', cursor: 'pointer' }} alt="Logo" onClick={handleNavigate} />
                    </Hidden>
                    <Typography
                        onClick={handleNavigate}
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontWeight: 700,
                            color: theme.palette.primary.main,
                            textDecoration: "none",
                            marginLeft: '5px',
                            fontSize: '18px',
                            cursor: 'pointer'
                        }}
                    >
                        Medify
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                            <MenuItem onClick={handleMyBookings}>
                                <Typography textAlign="center">My Bookings</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Hidden mdUp>
                        <img src={medifyLogo} style={{ height: '25px' }} alt="Logo" onClick={handleNavigate} />
                    </Hidden>
                    <Typography
                        noWrap
                        onClick={handleNavigate}
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontWeight: 700,
                            color: theme.palette.primary.main,
                            textDecoration: "none",
                            marginLeft: '5px',
                            fontSize: '18px',
                        }}
                    >
                        Medify
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: { xs: 'none', md: 'flex-end' }, gap: { xs: 'none', md: 2, lg: 4 }, alignItems: 'center' }}>
                        <Box sx={{ borderBottom: isHospitalPage && `4px solid ${theme.palette.primary.main}` }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: isHospitalPage ? theme.palette.primary.main : "black", display: "block", textTransform: 'none' }}
                            >
                                Find Doctors
                            </Button>
                        </Box>
                        {pages.slice(1).map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "black", display: "block", textTransform: 'none' }}
                            >
                                {page}
                            </Button>
                        ))}
                        <CustomButton type={"My Bookings"} fun={handleMyBookings} />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
