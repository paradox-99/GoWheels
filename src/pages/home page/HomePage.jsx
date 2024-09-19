import Banner from "./Banner";


import HowItWorks from "../../components/HowItWorks";
import WhyChooseUs from "../../components/WhyChooseUs";
import SpecialOffer from "../../components/HomeComponent/SpecialOffer";
import CustomerTestimonial from "./CustomerTestimonial";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <WhyChooseUs></WhyChooseUs>
            <SpecialOffer></SpecialOffer>
            <CustomerTestimonial></CustomerTestimonial>
        </div>
    );
};

export default HomePage;
