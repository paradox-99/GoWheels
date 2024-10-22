import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useDesignation from "./useDesignation";

const useAgencyData = () => {
  const axiosSecure = useAxiosSecure();
  const { userInfo } = useDesignation();

  const { data: agencyData = {}, isLoading, refetch } = useQuery({
    queryKey: ['agencyData', userInfo?.userEmail],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/agencyRoute/agencyData/${userInfo?.userEmail}`);
      return data;
    },
  });

  return { agencyData, isLoading, refetch };
};

export default useAgencyData;
