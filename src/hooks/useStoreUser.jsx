import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userDataSlice";
import { setAgencyData } from "../redux/agencyDataSlice";
import useAxiosPublic from "./useAxiosPublic";

const useStoreUser = () => {
    const axiosPublic = useAxiosPublic()
    const dispatch = useDispatch();
    
    const setData = async(email) => {
        const {data: userInfo} = await axiosPublic.get(`/usersRoute/users/${email}`);
        if (userInfo.userRole === "user")
        {
            dispatch(setUserData(userInfo));
            console.log(userInfo);
        }

        console.log("called");
    
        if(userInfo.userRole === "agency"){
            const {data: agencyInfo} = await axiosPublic.get(`/agencyRoute/agency/${userInfo.agency_id}`);
            console.log(agencyInfo);
            dispatch(setUserData(userInfo));
            dispatch(setAgencyData(agencyInfo));
        }
    }

    return {setData}
};

export default useStoreUser;