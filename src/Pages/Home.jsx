import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Popular from "../Components/Popular/Popular";
import Recommended from "../Components/Recommended/Recomended";

const Home = () => {
    return (
        <div className="bg-base-200">
            <div className="lg:w-[1200px] mx-auto">
                <Navbar />
                <Banner />
                <Popular />
                <Recommended />
            </div>
            <Footer />
        </div>
    );
};

export default Home;