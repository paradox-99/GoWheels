import background from '../../../public/asset/background.jpg'

const SignIn = () => {


    return (
        <div style={{ backgroundImage: `url(${background})` }} className='h-[100vh] bg-cover py-10 font-merriweather'>
            <div className='h-[55vh] w-[40vw] bg-[#fdfefe] mx-auto'>
                <div className='text-center mx-auto'>
                    <h1 className='text-5xl font-bold text-primary'>GoWheels</h1>
                    <h1 className='text-4xl font-bold text-secondary'>Sign in to your account</h1>
                </div>
                <div>
                    <form className='mt-10 px-10'> 
                        <div>                       
                            <input type="email" name="email" id="email" className='border-[1px] border-[#161616] outline-none w-full rounded-xl py-2 px-6 text-secondary' placeholder='Enter your email address'/>
                        </div>

                        <div className='mt-5'>                       
                            <input type="password" name="email" id="email" className='border-[1px] border-[#161616] outline-none w-full rounded-xl py-2 px-6 text-secondary' placeholder='Enter your password'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;