import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";


const useRole = () => {
    const {user, loader} = UseAuth() || {};
    const axiosSecure = useAxiosSecure();

    const { data: userRole = '', isLoading, refetch } = useQuery({
        queryKey: ['userRole', user?.email],
        enabled: !loader && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure(`/usersRoute/users/${user?.email}`)
            return data?.userRole
        }
    })
   return {userRole, isLoading, refetch}
};

export default useRole;
