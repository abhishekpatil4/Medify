import Hero from "../components/Hero/Hero";
import SearchBox from "../components/SearchBox/SearchBox";
import Offers from "../components/Offers/Offers";
import Specialisations from "../components/Specialisations/Specialisations";
import MedicalSpecialists from "../components/MedicalSpecialist/MedicalSpecialists";
const Home = () => {
    return (
        <>
            <div style={{position:'relative'}}>
                <Hero />
                <SearchBox />
                <Offers />
                <Specialisations />
                <MedicalSpecialists />
            </div>
        </>
    );
}

export default Home;
