import { Typography } from "@mui/material"
import { useTheme } from "@mui/material";
import Category from "./Category";
import doctorIcon from "../../assets/categoryIcons/Doctor.svg"
import CapsuleIcon from "../../assets/categoryIcons/Capsule.svg"
import DrugstoreIcon from "../../assets/categoryIcons/Drugstore.svg"
import HospitalIcon from "../../assets/categoryIcons/Hospital.svg"
import AmbulanceIcon from "../../assets/categoryIcons/Ambulance.svg"

const Categories = () => {
    const theme = useTheme();
    return <div>
        <Typography style={{ color: theme.palette.secondary.main, textAlign: "center", fontWeight: 500, fontSize: '20px', lineHeight: '30px', marginBottom: '2rem' }}>You may also be looking for</Typography>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: "wrap", gap: 10 }}>
            <Category icon={doctorIcon} textContent={"Doctors"} />
            <Category icon={DrugstoreIcon} textContent={"Labs"} />
            <Category icon={HospitalIcon} textContent={"Hospitals"} selected={true} />
            <Category icon={CapsuleIcon} textContent={"Medical Store"} />
            <Category icon={AmbulanceIcon} textContent={"Ambulance"} />
        </div>
    </div>
}

export default Categories;