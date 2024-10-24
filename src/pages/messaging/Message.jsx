import '@sendbird/uikit-react/dist/index.css';
import useDesignation from '../../hooks/useDesignation';
import { useParams } from 'react-router-dom';
import { GroupChannel } from '@sendbird/uikit-react/GroupChannel';
import SendbirdProvider from '@sendbird/uikit-react/SendbirdProvider';


const Message = () => {
    const { userInfo } = useDesignation();
    const {url} = useParams();
    const appID = import.meta.env.VITE_Send_Bird_appID;

    const breakpoints = {
        mobile: "(max-width: 768px)",
        tablet: "(min-width: 769px) and (max-width: 1024px)",
        desktop: "(min-width: 1025px)"
      };
    
    return (
        <div className='w-full h-[80vh]'>
            <SendbirdProvider
                appId={appID}
                userId={userInfo?._id}
                breakpoint={'600px'}
            >
                {
                    url && <GroupChannel channelUrl={url}/>
                }
            </SendbirdProvider>
        </div>
    );
};

export default Message;