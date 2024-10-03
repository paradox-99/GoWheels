import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/UseAuth";
import useAxiosSecure from "./useAxiosSecure";

const useDesignation = () => {

    const {user, loader} = useAuth();
    const axiosSecure = useAxiosSecure();

    console.log(user?.email);
    

    const { data: role, isPending: isRole } = useQuery({
        queryKey: [user?.email, 'designation'],
        enabled: !loader,
        queryFn: async () => {
            const res = await axiosSecure.get(`/usersRoute/users/${user?.email}`);
            console.log(res);
            return res.data[0];
        }
    })

    return [role, isRole]
};


export default useDesignation;