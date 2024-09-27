import { NavLink } from "react-router-dom";


const MenuItem = ({ label, address, icon: Icon }) => {

    const Content = (
        <>
            {Icon && <Icon className='w-5 h-5' />}
            {label && <span>{label}</span>}
        </>
    );
    return (
        address ? (
            <NavLink
                to={address}
                end
                className={({ isActive }) =>
                    `flex p-2 gap-2 items-center font-light hover:bg-[#ff4c30] hover:bg-gradient-to-r from-[#ff4c30] to-white hover:text-white duration-500 ${isActive
                        ? 'bg-[#ff4c30] bg-gradient-to-r from-[#ff4c30] to-white text-white'
                        : 'text-gray-600'
                    }`}
            >
                {Content}
            </NavLink>
        ) : (
            <div className="flex p-2 gap-2 items-center font-light text-gray-600 cursor-pointer hover:bg-[#ff4c30] hover:bg-gradient-to-r from-[#ff4c30] to-white hover:text-white duration-500">
                {Content}
            </div>
        )
    );
};

export default MenuItem;