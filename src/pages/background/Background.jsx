import { Outlet, useLocation } from 'react-router-dom';
import background from '../../../public/asset/top_ph002.png';

const Background = () => {
    const location = useLocation();

    return (
        <div
            style={{ backgroundImage: `url(${background})` }}
            className={`min-h-screen bg-center bg-cover bg-no-repeat pt-10 
            ${(location.pathname === '/join/signUpFour' || location.pathname === '/join/signUpFive' || location.pathname === '/join/login-Info' || location.pathname === '/join/otpRoute') && 'min-h-screen'}`}>
            <Outlet></Outlet>
        </div>
    );
};

export default Background;