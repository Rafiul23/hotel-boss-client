import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import SpecialOffers from "../SpecialOffers/SpecialOffers";
import Welcome from "../Welcome/Welcome";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <Reviews></Reviews>
            <SpecialOffers></SpecialOffers>
        </div>
    );
};

export default Home;