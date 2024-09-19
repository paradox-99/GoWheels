import background from '../../../public/asset/background.jpg'

const SignIn = () => {


    return (
        <div style={{ backgroundImage: `url(${background})`}} className='h-[100vh] bg-cover py-10 font-merriweather'>
            <div className='h-[55vh] w-[40vw] bg-[#fdfefe] mx-auto'>
                    <div>
                        <h1>GoWheels</h1>
                        <h1>Sign in to your account</h1>
                    </div>
            </div>
        </div>
    );
};

export default SignIn;