import { Outlet } from 'react-router-dom';
import background from '../../../public/asset/background.jpg';

const Background = () => {
    return (
        <div style={{ backgroundImage: `url(${background})` }} className='h-[89vh] bg-center bg-cover bg-no-repeat pt-10'>
           <Outlet></Outlet>
        </div>
    );
};

export default Background;