
import Available from "./Available Section/Available";
import Featured from "./Featured_Section/Featured";
import Banner from "./Banner";
import HowItWorks from "../../components/HowItWorks";
import WhyChooseUs from "../../components/WhyChooseUs";
import SpecialOffer from "../../components/HomeComponent/SpecialOffer";
import CustomerTestimonial from "./CustomerTestimonial";

const HomePage = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <div className="bg-[#F8F8F8] "><Banner></Banner></div>
            <Featured></Featured>
            {/* <Available></Available> */}
            <HowItWorks></HowItWorks>
            <WhyChooseUs></WhyChooseUs>
            <SpecialOffer></SpecialOffer>
            <CustomerTestimonial></CustomerTestimonial>
        </div>
    );
};

export default HomePage;
