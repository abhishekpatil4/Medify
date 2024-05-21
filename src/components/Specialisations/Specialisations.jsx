import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Specialisation from "./Specialisation";
import CustomButton from "../Button/CustomButton";

const data = [
    {
        id: 1,
        name: 'Dentistry'
    },
    {
        id: 2,
        name: 'Primary Care'
    },
    {
        id: 3,
        name: 'Cardiology'
    },
    {
        id: 4,
        name: 'MRI Resonance'
    },
    {
        id: 5,
        name: 'Blood Test'
    },
    {
        id: 6,
        name: 'Piscologist'
    },
    {
        id: 7,
        name: 'Laboratory'
    },
    {
        id: 8,
        name: 'X-Ray'
    }
]

const Specialisations = () => {
    const theme = useTheme();
    return <Container maxWidth="xl">
        <Typography sx={{ fontSize: { xs: '30px', md: '48px' }, textAlign: 'center', fontWeight: '600', color: theme.palette.secondary.main, paddingBottom: { xs: '2rem', md: '0rem' } }}>Find By Specialisation</Typography>
        <Box sx={{ flexGrow: 1, margin: { md: '3rem 5rem 0rem 5rem', sm: "3rem 0rem 0rem 0rem" } }}>
            <Grid container rowSpacing={5}>
                {
                    data && data.map((d) =>
                        <Grid key={d.id} item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Specialisation name={d.name} />
                        </Grid>
                    )
                }
            </Grid>
        </Box>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', marginBottom: '6rem' }}>
            <CustomButton type={"View All"} />
        </div>
    </Container>
}

export default Specialisations;