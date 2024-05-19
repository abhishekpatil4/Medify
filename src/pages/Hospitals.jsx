import { useParams } from "react-router-dom"

const Hospitals  = () => {
    let { state, city } = useParams();
    return <div>
        <h1>state: {state}</h1>
        <h1>city: {city}</h1>
    </div>
}

export default Hospitals;