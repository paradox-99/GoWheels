import { Outlet } from 'react-router-dom';
import background from '../../../public/asset/background.jpg';
import background2 from '../../../public/asset/top_ph002.png';
import SignUpProvider from '../../provider/SignUpProvider';

const Background = () => {
    return (
        <SignUpProvider>
            <div style={{ backgroundImage: `url(${background2})` }} className='h-screen xl:h-[89vh] bg-center bg-cover bg-no-repeat pt-10'>
                <Outlet></Outlet>
            </div>
        </SignUpProvider>
    );
};

export default Background;