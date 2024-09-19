import Banner from "./Banner";


import HowItWorks from "../../components/HowItWorks";
import WhyChooseUs from "../../components/WhyChooseUs";
import CustomerTestimonial from "./CustomerTestimonial";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <WhyChooseUs></WhyChooseUs>
            <HowItWorks></HowItWorks>
            <CustomerTestimonial></CustomerTestimonial>
        </div>
    );
};

export default HomePage;
