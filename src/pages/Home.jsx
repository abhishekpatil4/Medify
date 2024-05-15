import Hero from "../components/Hero/Hero";
import SearchBox from "../components/SearchBox/SearchBox";
const Home = () => {
    return (
        <>
            <div style={{position:'relative'}}>
                <Hero />
                <SearchBox />
            </div>
        </>
    );
}

export default Home;
