import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useDriverList = ({role}) => {
    const axiosSecure = useAxiosSecure();
    const { data: driverData = [], isLoading, refetch } = useQuery({
        queryKey: ['driverData', role],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/driverRoute/drivers`);
            return data
        }
    })
    return {driverData, isLoading, refetch}

};

export default useDriverList;