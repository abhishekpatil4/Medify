import { Container } from "@mui/material"
import { Typography } from "@mui/material"
import { useTheme } from "@mui/material"
import StatsCard from "./StatsCard"
import hospital1 from "../../../src/assets/SpecialisationIcons/Dentistry.svg"
import doctor from "../../../src/assets/StatsIcons/doctor.svg"
import hospital2 from "../../../src/assets/StatsIcons/Hospital2.svg"
import HandBelowHeart from "../../../src/assets/StatsIcons/handBelowheart.svg"

const Stats = () => {
    const theme = useTheme();
    return <Container maxWidth="xl" sx={{textAlign:{xs:"center", lg:'left'}, display: 'flex', alignItems: 'center', justifyContent:"space-evenly", padding:"3rem 0.5rem 5rem 0.5rem", flexWrap:'wrap' }}>
        <div>
            <Typography style={{ color: theme.palette.primary.main, fontSize: '17px', fontWeight: 600, lineHeight: '18px' }}>
                CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
            </Typography>
            <Typography style={{ color: theme.palette.secondary.main, fontSize: '48px', fontWeight: 600, lineHeight: '67px', margin:"1rem 0rem" }}>
                Our Families
            </Typography>
            <Typography style={{ color: '#77829D', fontSize: '17px', fontWeight: 500, lineHeight: '40px', maxWidth: '531px' }}>
                We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.
            </Typography>
        </div>
        <div style={{display:'flex', justifyContent:'space-between', gap:30}}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', gap:30 }}>
                <StatsCard icon={HandBelowHeart} count={5000} type={"Happy Patients"} iconColor={'brightness(0) saturate(100%) invert(49%) sepia(96%) saturate(2013%) hue-rotate(185deg) brightness(106%) contrast(101%)'} iconBgColor={'#EBF7FF'} />
                <StatsCard icon={hospital2} count={200} type={"Hospitals"} iconColor={'brightness(0) saturate(100%) invert(52%) sepia(11%) saturate(3173%) hue-rotate(321deg) brightness(101%) contrast(101%)'} iconBgColor={'#FFF2F0'} />
            </div>
            <div style={{position:'relative', top:'40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', gap:30 }}>
                <StatsCard icon={hospital1} count={1000} type={"Laboratories"} iconColor={'brightness(0) saturate(100%) invert(65%) sepia(96%) saturate(1340%) hue-rotate(359deg) brightness(101%) contrast(104%)'} iconBgColor={'#FFF7E6'} />
                <StatsCard icon={doctor} count={700} type={"Expert Doctors"} iconColor={'brightness(0) saturate(100%) invert(67%) sepia(56%) saturate(435%) hue-rotate(91deg) brightness(94%) contrast(89%)'} iconBgColor={'#EBFAF1'} />
            </div>
        </div>
    </Container>
}

export default Stats;