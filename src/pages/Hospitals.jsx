import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"
import Navbar from '../components/Navbar/Navbar'

const Hospitals = () => {
    const [hospitals, setHospitals] = useState();
    const { state, city } = useParams();
    useEffect(() => {
        const getHospitals = async() => {
            const url = `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`;
            try {
                const res = await axios.get(url);
                console.log("res", res.data);
            } catch (error) {
                console.log(error.response);
            }
        }
        getHospitals();
    }, [])
    return <div>
        <Navbar bgColor={"white"}/>
    </div>
}

export default Hospitals;