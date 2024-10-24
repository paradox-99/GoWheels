import { App as SendbirdApp } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';
import useDesignation from '../../hooks/useDesignation';

const Messaging = () => {

    const { userInfo } = useDesignation();
    const appID = import.meta.env.VITE_Send_Bird_appID;
    // const name = userInfo.firstName + " " + userInfo.lastName;
    let userID;
    let name;

    if(userInfo?.userRole === 'agency'){
        userID = userInfo?.agency_id;
        name = 
    }
    else{
        userID = userInfo?._id;
    }

    return (
        <div className='w-full h-[80vh]'>
            <SendbirdApp 
                appId={appID}
                userId={userID}
                profileUrl={userInfo.image}
                nickname={name}
            />
        </div>

    );
};

export default Messaging;