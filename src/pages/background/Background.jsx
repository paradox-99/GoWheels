import { Outlet } from 'react-router-dom';
import background from '../../../public/asset/background.jpg';
import SignUpProvider from '../../provider/SignUpProvider';

const Background = () => {
    return (
        <SignUpProvider>
            <div style={{ backgroundImage: `url(${background})` }} className='h-[89vh] bg-center bg-cover bg-no-repeat pt-10'>
                <Outlet></Outlet>
            </div>
        </SignUpProvider>
    );
};

export default Background;