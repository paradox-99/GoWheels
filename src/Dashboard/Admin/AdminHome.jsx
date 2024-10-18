import { FaDollarSign, FaRegHandshake, FaUsers } from 'react-icons/fa';


import image from '../../../public/asset/admin.jpg'
import { LiaCarSideSolid } from 'react-icons/lia';
import UserActivityChart from './AdminComponent/UserActivityChart';
import TotalInfoChart from './AdminComponent/TotalnfoChart';

const AdminHome = () => {



    return (
        <div className=" lg:px-20 mt-20">
            <section className='grid lg:px-10 lg:grid-cols-4 lg:gap-10 '>
                {/* total users */}
                <div className='p-2 rounded-lg shadow-lg shadow-slate-400 px-10 py-5'>
                    <FaUsers className='text-indigo-600 ' size={30}></FaUsers>
                    <p><span className='text-lg font-bold'>Total Users</span> </p>
                    <p className='text-xl'>1,263</p>
                </div>
                {/* total agency */}
                <div className=' rounded-lg shadow-lg shadow-slate-400 px-10 py-5'>
                <FaRegHandshake className='text-amber-500 ' size={30}></FaRegHandshake>
                    <p><span className='text-lg font-bold'>Total agency</span> </p>
                    <p className='text-xl'>123</p>
                </div>
                {/* total car */}
                <div className=' rounded-lg shadow-lg shadow-slate-400 px-10 py-5'>
                    <LiaCarSideSolid  className='text-primary ' size={30}/>

                    <p><span className='text-lg font-bold'>Total Cars</span> </p>
                    <p className='text-xl'>23</p>
                </div>
                {/* total revenue */}
                <div className=' rounded-lg shadow-lg shadow-slate-400 px-10 py-5'>
                    <FaDollarSign  className='text-fuchsia-700 ' size={30}/>

                    <p><span className='text-lg font-bold'>Revenue</span> </p>
                    <p className='text-xl'>$ 16,734</p>
                </div>
            </section>
            {/* ************* */}
            {/* ************* */}
            <section className='mt-28 lg:flex gap-10'>
                <UserActivityChart></UserActivityChart>
                <TotalInfoChart></TotalInfoChart>
            </section>
            {/* ************* */}

            {/* <section id="services" className="py-20">
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
                        <img className='lg:w-[1000px]  ' src={image} alt="" />
                    </div>
                </div>
            </section> */}

            {/* *********** */}
            <section>

            </section>

        </div>
    );
};

export default AdminHome;