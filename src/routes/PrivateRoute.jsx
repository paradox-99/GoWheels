import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import loaderEliment from '../../public/logo.gif';

const PrivateRoute = ({children }) => {

const {user, loader} = UseAuth();
const location = useLocation();


if(loader) {
    return (
        <div className='flex justify-center'>
            <img className='mx-auto' src={loaderEliment} alt="loading" />
        </div>
    );
}

else if (user) {
    return children;
}

else {
    return <Navigate state={location.pathname} to='/join' replace={true}></Navigate>
}
};

export default PrivateRoute;