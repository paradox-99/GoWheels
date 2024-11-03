import { NavLink } from "react-router-dom";

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex p-1 pl-4 gap-2 items-center rounded-lg transition-colors duration-300 
              ${
                isActive
                  ? "bg-gradient-to-r from-[#ff4c30] to-white text-white"
                  : "text-gray-700"
              }`
      }
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span className="mx-4 font-medium">{label}</span>
      {/* {children} */}
    </NavLink>
  );
};

export default MenuItem;
