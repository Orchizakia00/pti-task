import Banner from "../Components/Banner/Banner";
import Navbar from "../Components/Navbar/Navbar";
import Popular from "../Components/Popular/Popular";

const Home = () => {
    return (
        <div className="bg-base-200">
            <div className="lg:w-[1200px] mx-auto">
                <Navbar />
                <Banner />
                <Popular />
            </div>
        </div>
    );
};

export default Home;