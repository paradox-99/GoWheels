import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { TbMessageCircle } from "react-icons/tb";
import SendBird from "sendbird";
import useDesignation from "../../hooks/useDesignation";


const ViewAgencyDetails = () => { 

    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const {userInfo} = useDesignation()
    const sendbirdInstance = new SendBird({ appId: import.meta.env.VITE_Send_Bird_appID })

    const { data } = useQuery({
        queryKey: ['agency', id],
        queryFn: async () => {
            const response = await axiosPublic.get(`/agencyRoute/agency/${id}`);
            return response.data;
        }
    })

    console.log(data)

    const createOrOpenChannel = async (userId,agencyId) => {
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

                console.log('Channel created or retrieved successfully:', channel);
                // You can now navigate to the chat interface using this channel URL
                const channelUrl = channel.url;
                console.log('Channel URL:', channelUrl);
                navigate(`/send-message/${channelUrl}`);
            });
        } catch (error) {
            console.error('Error creating/opening the channel:', error);
        }
    };

    return (
        <div className="my-32 flex justify-center">
            <button onClick={() => createOrOpenChannel(userInfo._id, id)} className="border-2 rounded px-5 py-2 border-primary flex justify-center items-center gap-3">
                <TbMessageCircle className="w-5 h-5" /> Send Message
            </button>
        </div>
    );
};

export default ViewAgencyDetails;