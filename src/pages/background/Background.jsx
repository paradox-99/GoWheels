import { Outlet } from 'react-router-dom';
import background from '../../../public/asset/background.jpg'


const Background = () => {
    return (
        <div style={{ backgroundImage: `url(${background})` }} className='h-[100vh] bg-center bg-cover  bg-no-repeat'>
            <Outlet></Outlet>
        </div>
    );
};

export default Background;