import image from '../../../public/asset/admin.jpg'

const AdminHome = () => {
    return (
        <div className=" mt-20">
            {/* <div className="ml-10 space-y-3 text-center">
                <h1 className="text-3xl ">Welcome to admin dashboard</h1>
                <div className="">
                    <div>
                        <p className="md:w-[60%] text-xl  mx-auto">
                            Manage your car rental business with ease. Here, you can oversee bookings, monitor fleet availability, review customer feedback, and track earnings—all in one place. Keep your operations running smoothly and make data-driven decisions to grow your business. Stay updated on the latest activities and manage everything efficiently with just a few clicks.
                        </p>
                    </div>
                </div>
            </div> */}
            <section id="services" className="py-20">
                <div className="container mx-auto px-16 items-center flex flex-col lg:flex-row">
                    <div className="lg:w-1/2">
                        <div className="lg:pr-32 xl:pr-48">
                            <h3 className="text-3xl font-semibold leading-tight">
                                Welcome To The Admin Dashboard
                            </h3>
                            <p className="mt-8 text-xl font-light leading-relaxed">
                                Manage your car rental business with ease. Here, you can oversee bookings, monitor fleet availability, review customer feedback, and track earnings—all in one place. Keep your operations running smoothly and make data-driven decisions to grow your business. Stay updated on the latest activities and manage everything efficiently with just a few clicks.
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:w-1/2 rounded  undefined">
                        <img className='lg:w-[1000px]  '  src={image} alt="" />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AdminHome;