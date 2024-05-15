import Hero from "../components/Hero/Hero";
import SearchBox from "../components/SearchBox/SearchBox";
import Offers from "../components/Offers/Offers";
const Home = () => {
    return (
        <>
            <div style={{position:'relative'}}>
                <Hero />
                <SearchBox />
                <Offers />
            </div>
        </>
    );
}

export default Home;
