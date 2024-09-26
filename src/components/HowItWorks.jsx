import BasicHeading from "./BasicHeading";
import { FaHourglassStart, FaSearch, FaCar, FaRoad, FaSmile, FaCarAlt } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const HowItWorks = () => {
    return (
        <div className="max-w-6xl mx-auto mt-20 lg:px-0 px-6">
            <BasicHeading title={"PROCESS"} heading={"How It Works"} desc={"Select your car, book online, and pick it up hassle-free. Flexible rentals, easy payments, and 24/7 customer support."}></BasicHeading>
            <div>
                <div className='mt-10 lg:mt-20'>
                    <VerticalTimeline className='before:!bg-primary'>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work border-r-primary"
                            contentStyle={{ background: "#EFEFEF", boxShadow: "20px 0px 150px 0px #EDEDED" }}
                            contentArrowStyle={{ borderRight: '15px solid #EFEFEF' }}
                            date="Step 1"
                            dateClassName={"text-heading"}
                            iconStyle={{ background: '#FF4C30', color: '#fff' }}
                            icon={<FaHourglassStart />}
                        >
                            <h3 className="text-3xl font-light text-heading">Register</h3>
                            <p className='font-secondary leading-[26px]  !font-normal'>
                                Create an account on our platform with your basic details to get started.
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work border-r-primary"
                            contentStyle={{ background: "#EFEFEF", boxShadow: "20px 0px 150px 0px #EDEDED" }}
                            contentArrowStyle={{ borderRight: '15px solid #EFEFEF' }}
                            date="Step 2"
                            dateClassName={"text-heading"}
                            iconStyle={{ background: '#FF4C30', color: '#fff' }}
                            icon={<FaSearch />}
                        >
                            <h3 className="text-3xl font-light text-heading">Search for a Vehicle</h3>
                            <p className='font-secondary leading-[26px] !font-normal'>
                                Use our search tools to find a vehicle that fits your needs and preferences.
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work border-r-primary"
                            contentStyle={{ background: "#EFEFEF", boxShadow: "20px 0px 150px 0px #EDEDED" }}
                            contentArrowStyle={{ borderRight: '15px solid #EFEFEF' }}
                            date="Step 3"
                            dateClassName={"text-heading"}
                            iconStyle={{ background: '#FF4C30', color: '#fff' }}
                            icon={<FaCar />}
                        >
                            <h3 className="text-3xl font-light text-heading">Choose Your Vehicle</h3>
                            <p className='font-secondary leading-[26px] !font-normal'>
                                Select the car that suits you from our wide range of vehicles available for rent.
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work border-r-primary"
                            contentStyle={{ background: "#EFEFEF", boxShadow: "20px 0px 150px 0px #EDEDED" }}
                            contentArrowStyle={{ borderRight: '15px solid #EFEFEF' }}
                            date="Step 4"
                            dateClassName={"text-heading"}
                            iconStyle={{ background: '#FF4C30', color: '#fff' }}
                            icon={<FaCarAlt />}
                        >
                            <h3 className="text-3xl font-light text-heading">Pick Up Your Vehicle</h3>
                            <p className='font-secondary leading-[26px] !font-normal'>
                                Visit our location or arrange delivery to pick up your chosen car.
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work border-r-primary"
                            contentStyle={{ background: "#EFEFEF", boxShadow: "20px 0px 150px 0px #EDEDED" }}
                            contentArrowStyle={{ borderRight: '15px solid #EFEFEF' }}
                            date="Step 5"
                            dateClassName={"text-heading"}
                            iconStyle={{ background: '#FF4C30', color: '#fff' }}
                            icon={<FaRoad />}
                        >
                            <h3 className="text-3xl font-light text-heading">Enjoy Your Ride</h3>
                            <p className='font-secondary leading-[26px] !font-normal'>
                                Drive your rental and enjoy the freedom to travel where you want.
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work border-r-primary"
                            contentStyle={{ background: "#EFEFEF", boxShadow: "20px 0px 150px 0px #EDEDED" }}
                            contentArrowStyle={{ borderRight: '15px solid #EFEFEF' }}
                            date="Step 6"
                            dateClassName={"text-heading"}
                            iconStyle={{ background: '#FF4C30', color: '#fff' }}
                            icon={<FaSmile />}
                        >
                            <h3 className="text-3xl font-light text-heading">Return the Vehicle</h3>
                            <p className='font-secondary leading-[26px] !font-normal'>
                                Return the vehicle to the designated location at the end of your rental period.
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
