import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = UseAuth();

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('accessToken')
        config.headers.authorization = `Carrier ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/join');
        }
        return Promise.reject(error);
    })

    return axiosSecure;
};

export default useAxiosSecure;