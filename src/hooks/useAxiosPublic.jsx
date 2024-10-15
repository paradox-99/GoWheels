import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'http://localhost:3000/api'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;