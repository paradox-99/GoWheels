import { App as SendbirdApp } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';
import { useSelector } from 'react-redux';

const Messaging = () => {

    const user = useSelector((state) => state.user.userData)
    const agency = useSelector((state) => state.agency.agencyData)
    console.log(user);
    console.log(agency);
    const appID = import.meta.env.VITE_Send_Bird_appID;

    let userID;
    let name;

    if (user?.userRole === 'agency') {
        userID = user?.agency_id;
        name = agency.agencyName;
    }
    else {
        userID = user?._id;
        name = user?.firstName + " " + user?.lastName;
    }

    return (
        <div className='w-full h-[80vh]'>
            <SendbirdApp
                appId={appID}
                userId={userID}
                profileUrl={user?.image}
                nickname={name}
                breakpoint={'760px'}
            />
        </div>

    );
};

export default Messaging;