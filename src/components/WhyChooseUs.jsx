import { GiFlexibleStar } from "react-icons/gi";
import BasicHeading from "./BasicHeading";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// AOS.init({
//     duration: 1000,
//     easing: 'ease-in-out',
//     // once: true,
//     mirror: false,
// });

const WhyChooseUs = () => {
    return (
        <div className="max-w-6xl mx-auto mt-20 lg:mt-32 px-6 pb-10">
            <BasicHeading title="FEATURES" heading={"Why Choose Us"} desc="Choose us for affordable rates, diverse vehicle options, excellent service, flexible rentals, and a seamless booking experience."></BasicHeading>

            <div className="flex flex-col lg:flex-row gap-6 items-center">
                {/* part 1 */}
                <div className="space-y-6">
                    {/* Flexible Rentals */}
                    <div
                        // data-aos="fade-left"
                        // data-aos-delay="0"
                        // data-aos-duration="800"
                        className="flex gap-8 items-center">
                        <div className="p-4 -mt-6 rounded-sm bg-primary text-white">
                            <GiFlexibleStar className="text-3xl" />
                        </div>
                        <div className=" mt-12">
                            <h3 className=" font-bold">Flexible Rentals</h3>
                            <p className="mt-3">Rent a vehicle for as long as you need, with easy adjustments to fit your unique schedule and plans.</p>
                        </div>
                    </div>
                    {/* No hidden fees */}
                    <div
                        // data-aos="fade-left"
                        // data-aos-delay="100"
                        // data-aos-duration="800"
                        className="flex gap-8 items-center">
                        <div className="p-4 -mt-6 rounded-sm bg-primary text-white">
                            <GiFlexibleStar className="text-3xl" />
                        </div>
                        <div className=" mt-12">
                            <h3 className=" font-bold">No hidden fees</h3>
                            <p className="mt-3">Enjoy transparent pricing with no unexpected costs or extra charges, ensuring you only pay what you see.</p>
                        </div>
                    </div>
                </div>

                {/* Center (Car Image) */}
                <div className="flex justify-center">
                    <img src="/car.png" alt="Car" className="max-w-full" />
                </div>

                {/* part 3 */}
                <div className="space-y-6">
                    {/* First-Class Services */}
                    <div
                        // data-aos="fade-right"
                        // data-aos-delay="0"
                        // data-aos-duration="800"
                        className="flex flex-row-reverse gap-8 items-center">
                        <div className="p-4 -mt-6  rounded-sm bg-primary text-white">
                            <GiFlexibleStar className="text-3xl" />
                        </div>
                        <div className="mt-12">
                            <h3 className="text-end font-bold">First-Class Services</h3>
                            <p className="text-end mt-3">Rent a vehicle for as long as you need, with easy adjustments to fit your unique schedule and plans.</p>
                        </div>
                    </div>
                    {/* Price Match Guarantee */}
                    <div
                        // data-aos="fade-right"
                        // data-aos-delay="100"
                        // data-aos-duration="800"
                        className="flex flex-row-reverse gap-8 items-center">
                        <div className="p-4 -mt-6 rounded-sm bg-primary text-white">
                            <GiFlexibleStar className="text-3xl" />
                        </div>
                        <div className="mt-12">
                            <h3 className=" font-bold text-end">Price Match Guarantee</h3>
                            <p className="text-end mt-3">We guarantee to match any competitor’s rate, ensuring you get the best deal available for your car rental.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;