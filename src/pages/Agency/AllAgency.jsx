import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import AgencyCard from './AgencyCard';

const AllAgency = () => {

    const axiosPublic = useAxiosPublic();

    const { data, isPending } = useQuery({
        queryKey: ['agency'],
        queryFn: async () => {
            const agencies = await axiosPublic.get('/agencyRoute/agency')
            return agencies.data;
        }
    })

    if(isPending){
        return <div>
            loading...
        </div>
    }

    return (
        <div>
            {
                data?.map(agency => <AgencyCard
                    key={agency?._id}
                    agency={agency}
                ></AgencyCard>)
            }
        </div>
    );
};

export default AllAgency;