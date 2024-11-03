import { Helmet } from "react-helmet-async";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ModeratorProfile = () => {
  return (
    <div className="px-10 py-5">
      <Helmet>
        <title>Name || Profile</title>
      </Helmet>
      <div className="flex justify-start items-center gap-10">
        <figure className="w-32 h-32">
          <img
            src="https://i.ibb.co.com/1865M2m/1000026021-01.jpg"
            alt=""
            className="size-36 object-cover rounded-full border-4 border-primary"
          />
        </figure>
        <div className="text-xl hidden lg:block">
          <h3>Moderator Name</h3>
          <h3 className="text-secondary text-base font-bold">Moderator</h3>
        </div>
      </div>
      <div className="pt-20 flex justify-start items-center lg:flex-row flex-col gap-20">
        <div className="flex flex-col gap-5 text-xl">
          <h3 className="flex gap-10">
            <span className="text-secondary">FirstName*</span>{" "}
            <span className="font-bold">Moderator FirstName</span>
          </h3>
          <h3 className="flex gap-10">
            <span className="text-secondary">LastName*</span>{" "}
            <span className="font-bold">Moderator LastName</span>
          </h3>
          <h3 className="flex gap-[90px]">
            <span className="text-secondary">Role*</span>{" "}
            <span className="font-bold">Moderator</span>
          </h3>
        </div>
        <div className="flex flex-col gap-5 text-xl">
          <h3 className="flex gap-10">
            <span className="text-secondary">Email*</span>{" "}
            <span className="font-bold">moderator@gmail.com</span>
          </h3>
          <h3 className="flex gap-10">
            <span className="text-secondary">Phone*</span>{" "}
            <span className="font-bold">+8801700000000</span>
          </h3>
          <h3 className="flex gap-10">
            <span className="text-secondary">Address*</span>{" "}
            <span className="font-bold">Dhaka, Bangladesh</span>
          </h3>
        </div>
        <div className="flex justify-center items-center gap-5 text-xl border-b-2 border-primary">
          <FaEdit className="text-primary" />
          <span>Edit information</span>
        </div>
      </div>
      <div className="pt-10">
        <Link
          to={"/dashboard/approve-agency"}
          className="bg-primary hover:bg-transparent hover:border-2 border-primary hover:text-primary duration-500 active:scale-75 shadow-inner shadow-secondary border-2 px-4 py-2 text-background rounded-lg font-nunito font-semibold"
        >
          Approve Agency
        </Link>
      </div>
    </div>
  );
};

export default ModeratorProfile;
