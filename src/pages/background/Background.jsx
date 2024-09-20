import background from '../../../public/asset/background.jpg'
import SignIn from '../sign in page/SignIn';

const Background = () => {
    return (
        <div style={{ backgroundImage: `url(${background})` }} className='h-[100vh] bg-center bg-cover  bg-no-repeat'>
            <SignIn></SignIn>
        </div>
    );
};

export default Background;