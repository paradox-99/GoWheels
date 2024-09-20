

const SignUpPartFour = () => {

    const handleInfo = (e) => {
        e.preventDefault();
        console.log("clicked")
    }
    return (
        <div className='lg:w-[40vw] bg-transparent lg:bg-[#fdfefe33] mx-auto px-10 rounded-lg'>
            <div className='text-center mx-auto'>
                <h1 className='text-3xl lg:text-5xl font-bold text-primary font-merriweather'>GoWheels</h1>
                <h1 className='text-2xl lg:text-4xl font-bold text-[#fdfefe] font-merriweather'>Optional info</h1>
            </div>
            <section className='mt-3'>
                <form
                    onSubmit={handleInfo}
                    className='font-nunito'>
                    <div>
                        <input
                            type="address"
                            name="address"
                            id="address"
                            className='border-[1px] border-secondary outline-none w-full rounded-xl py-1 lg:py-2 px-6 text-secondary' placeholder='Enter your address'
                            required />
                    </div>

                    <div>
                        <div>
                            <h1>Upload your profile picture</h1>
                            <p>hello world</p>
                        </div>
                    </div>




                </form>
            </section>
        </div>
    );
};

export default SignUpPartFour;