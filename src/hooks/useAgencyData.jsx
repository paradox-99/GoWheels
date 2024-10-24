import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAgencyData = (email) => {

    const axiosSecure = useAxiosSecure();

    const { data: agencyInfo= '' } = useQuery({
        queryKey: [email, 'agencyInfo'],
        queryFn: async () => {
            const {data} = await axiosSecure.get(`/agencyRoute/agencyData/${email}`);
            return data;
        }
    })
    return {agencyInfo};
};

export default useAgencyData;