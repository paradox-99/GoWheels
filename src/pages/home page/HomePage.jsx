import Banner from "./Banner";
import HowItWorks from "../../components/HowItWorks";
import WhyChooseUs from "../../components/WhyChooseUs";
import SpecialOffer from "../../components/HomeComponent/SpecialOffer";
import CustomerTestimonial from "./CustomerTestimonial";
import HandleSearch from "./HandleSearch";
const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            
            <div className="max-w-7xl mx-auto">
                <HowItWorks></HowItWorks>
                <WhyChooseUs></WhyChooseUs>
                <SpecialOffer></SpecialOffer>
                <CustomerTestimonial></CustomerTestimonial>
            </div>
        </div>
    );
};

export default HomePage;
