import Banner from "./Banner";
<<<<<<< HEAD
import CustomerTestimonial from "./CustomerTestimonial";

const HomePage = () => {
  return (
    <div>
      <h1>Hello Dev Dynamos</h1>
      <Banner></Banner>{" "}
      <CustomerTestimonial></CustomerTestimonial>
    </div>
  );
=======
import HowItWorks from "../../components/HowItWorks";
import WhyChooseUs from "../../components/WhyChooseUs";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <WhyChooseUs></WhyChooseUs>
            <HowItWorks></HowItWorks>
        </div>
    );
>>>>>>> 0f5e982c6b0d149483daaed68d9eb51274aa78b1
};

export default HomePage;
