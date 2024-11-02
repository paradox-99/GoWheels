import { Helmet } from "react-helmet-async";
import AllAgency from "../Agency/AllAgency";

const AboutPage = () => {
    return (
        <div>
            <Helmet>
                <title>All Agencies</title>
            </Helmet>
            <AllAgency/>
        </div>
    );
};

export default AboutPage;