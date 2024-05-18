import Hero from "../components/Hero/Hero";
import SearchBox from "../components/SearchBox/SearchBox";
import Offers from "../components/Offers/Offers";
import Specialisations from "../components/Specialisations/Specialisations";
import MedicalSpecialists from "../components/MedicalSpecialist/MedicalSpecialists";
import LatestNews from "../components/LatestNews/LatestNews";
import PatientCaring from "../components/PatientCaring/PatientCaring";
import Stats from "../components/Stats/Stats";
import FAQ from "../components/FAQ/FAQ";
import DownloadApp from "../components/DownloadApp/DownloadApp";

const Home = () => {
    return (
        <>
            <div style={{position:'relative'}}>
                <Hero />
                <SearchBox />
                <Offers />
                <Specialisations />
                <MedicalSpecialists />
                {/* <PatientCaring /> */}
                <LatestNews />
                <Stats />
                <FAQ />
                {/* <DownloadApp /> */}
            </div>
        </>
    );
}

export default Home;
