import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/UseAuth";
import useAxiosSecure from "./useAxiosSecure";

const useDesignation = () => {

    const {user, loader} = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: userInfo= '' } = useQuery({
        queryKey: [user?.email, 'userInfo'],
        enabled: !loader && !!user?.email,
        queryFn: async () => {
            const {data} = await axiosSecure.get(`/usersRoute/users/${user?.email}`);
            return data;
        }
    })
    return {userInfo};
};


export default useDesignation;


