import Dentistry from "../../assets/SpecialisationIcons/Dentistry.svg"
import PrimaryCare from "../../assets/SpecialisationIcons/Primary Care.svg"
import Cardiology from "../../assets/SpecialisationIcons/Cardiology.svg"
import MRIResonance from "../../assets/SpecialisationIcons/MRI Resonance.svg"
import BloodTest from "../../assets/SpecialisationIcons/Blood Test.svg"
import Piscologist from "../../assets/SpecialisationIcons/Piscologist.svg"
import XRay from "../../assets/SpecialisationIcons/X-Ray.svg"

import { useTheme } from '@emotion/react';
const Specialisation = ({ name, link }) => {
    const theme = useTheme();
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: 'white', borderRadius: '10px', width: '270px', height: '180px' }}>
        {name === "Dentistry" && <img src={Dentistry} style={{ color: theme.palette.primary.main }} />}
        {name === "Primary Care" && <img src={PrimaryCare} style={{ color: theme.palette.primary.main }} />}
        {name === "Cardiology" && <img src={Cardiology} style={{ color: theme.palette.primary.main }} />}
        {name === "MRI Resonance" && <img src={MRIResonance} style={{ color: theme.palette.primary.main }} />}
        {name === "Blood Test" && <img src={BloodTest} style={{ color: theme.palette.primary.main }} />}
        {name === "Piscologist" && <img src={Piscologist} style={{ color: theme.palette.primary.main }} />}
        {name === "Laboratory" && <img src={Dentistry} style={{ color: theme.palette.primary.main }} />}
        {name === "X-Ray" && <img src={XRay} style={{ color: theme.palette.primary.main }} />}
        <div style={{ color: 'gray', marginTop: '20px' }}>{name}</div>
    </div>
}

export default Specialisation;