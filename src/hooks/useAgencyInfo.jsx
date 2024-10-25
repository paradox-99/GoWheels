import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAgencyInfo = (email) => {

    const axiosSecure = useAxiosSecure();

    const { data: agencyInfo= '' } = useQuery({
        queryKey: [email, 'agencyInfo'],
        queryFn: async () => {
            const {data} = await axiosSecure.get(`/agencyRoute/agencyInformation/${email}`);
            console.log(data)
            return data;
        }
    })
    return {agencyInfo};
};

export default useAgencyInfo;