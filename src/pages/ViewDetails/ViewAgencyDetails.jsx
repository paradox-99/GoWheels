import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { TbMessageCircle } from "react-icons/tb";
import SendBird from "sendbird";
import useDesignation from "../../hooks/useDesignation";
import { Skeleton } from "@mui/material";
import { Helmet } from "react-helmet-async";

const ViewAgencyDetails = () => {

    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { userInfo } = useDesignation()
    const sendbirdInstance = new SendBird({ appId: import.meta.env.VITE_Send_Bird_appID })

    const { data, isPending } = useQuery({
        queryKey: ['agency', id],
        queryFn: async () => {
            const response = await axiosPublic.get(`/agencyRoute/agency/${id}`);
            return response.data;
        }
    })

    if (isPending) {
        return <div className="flex flex-col justify-center items-center gap-4 h-[80vh]">
            <Skeleton variant="rectangular" animation="wave" width={400} height={120}></Skeleton>
            <Skeleton variant="rectangular" animation="wave" width={400} height={120}></Skeleton>
            <Skeleton variant="rectangular" animation="wave" width={400} height={120}></Skeleton>
        </div>
    }

    const createOrOpenChannel = async (userId, agencyId) => {
        try {
            await sendbirdInstance.connect(userId);
            // Check if a channel already exists with the agency
            const params = new sendbirdInstance.GroupChannelParams();
            params.addUserIds([agencyId]); // Add the agency's user ID
            params.isDistinct = true; // This will ensure only one distinct channel is created per agency-user pair
            // Create or get the existing channel
            sendbirdInstance.GroupChannel.createChannel(params, (channel, error) => {
                if (error) {
                    console.error('Channel creation error: ', error);
                    return;
                }
                const channelUrl = channel.url;
                navigate(`/send-message/${channelUrl}`);
            });
        } catch (error) {
            console.error('Error creating/opening the channel:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center mt-20 mb-32">
            <Helmet>
                <title>Agency Details || { }</title>
            </Helmet>
            <h1 className="mb-10 text-5xl font-semibold">Agency Information</h1>
            <div className="bg-slate-200 p-10 rounded w-2/3">
                <div>
                    <div className="flex font-nunito justify-between w-full text-lg">
                        <p className=" w-[40%]"><span className="font-semibold">Agency name:</span> {data?.agencyName}</p>
                        <p className=" w-[36%]"><span className="font-semibold">Email:</span> {data?.userEmail}</p>
                    </div>
                    <div className="flex font-nunito justify-between w-full text-lg mt-2">
                        <p className=" w-[40%]"><span className="font-semibold">Owner name:</span> {userInfo.firstName} {userInfo.lastName}</p>
                        <p className=" w-[36%]"><span className="font-semibold">Phone:</span> {userInfo.phone}</p>
                    </div>
                    <div className="flex font-nunito justify-between w-full text-lg mt-2">
                        <p className=" w-[40%]"><span className="font-semibold">Number of cars:</span> {data?.numberOfVehicles}</p>
                        <p className=" w-[36%]"><span className="font-semibold">Registration number:</span> {data?.businessRegNumber}</p>
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-center font-bold text-lg">Agency Address</h3>
                    <div className="mt-3">
                        <div className="flex justify-between text-lg">
                            <p className="w-[40%]"><span className="font-semibold">Division: </span>{data?.agencyAddress.division}</p>
                            <p className="w-[36%]"><span className="font-semibold">District: </span>{data?.agencyAddress.district}</p>
                        </div>
                        <div className="flex justify-between text-lg">
                            <p className="w-[40%]"><span className="font-semibold">Upazilla/City: </span>{data?.agencyAddress.upazilla}</p>
                            {
                                data?.agencyAddress.area && <p className="w-[36%]"><span className="font-semibold">Area: </span>{data?.agencyAddress.area}</p>
                            }
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-14">
                    <button onClick={() => createOrOpenChannel(userInfo._id, id)} className="border-2 rounded px-5 py-2 border-primary flex justify-center items-center gap-3">
                        <TbMessageCircle className="w-5 h-5" /> Send Message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewAgencyDetails;