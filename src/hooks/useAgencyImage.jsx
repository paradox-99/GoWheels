import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAgencyImage = (email) => {
    const axiosSecure = useAxiosSecure();

    const { data: agencyImage= '' } = useQuery({
        queryKey: [email, 'agencyImage'],
        queryFn: async () => {
            const {data} = await axiosSecure.get(`/usersRoute/agencyImage/${email}`);
            return data.image;
        }
    })
    return {agencyImage}
};

export default useAgencyImage;