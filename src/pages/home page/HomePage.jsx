import Banner from "./Banner";
import HowItWorks from "../../components/HowItWorks";
import WhyChooseUs from "../../components/WhyChooseUs";
import SpecialOffer from "../../components/HomeComponent/SpecialOffer";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <WhyChooseUs></WhyChooseUs>
            <HowItWorks></HowItWorks>
            <SpecialOffer></SpecialOffer>
        </div>
    );
};

export default HomePage;
