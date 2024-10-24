import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useVehicleData = () => {
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();

    const { data: cars = [] } = useQuery({
        queryKey: ["cars"],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/carsRoute/cars');
              return data;
        },
    });
    return { cars };
};

export default useVehicleData;