import axios from "axios";

export const imageUpload = async (image) => {

    const formData = new FormData();
    formData.append('image', image);
    const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
        formData
    );
    return data.data.display_url;
}


export const googleLogin = async (loginWithGoogle) => {
    try {
        const { user } = await loginWithGoogle();
        return user;
    } catch (error) {
        console.error('Google login error:', error);
        throw error;
    }
};

export const getDataFromLocalStorage = () => {
    const storedData = localStorage.getItem('bookingData');
    
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        return parsedData;
    }
    
    return null;
};


export const calculateAge = (date) => {

        const inputDate = new Date(date);
        const today = new Date();

        let calculatedAge = today.getFullYear() - inputDate.getFullYear();
        const monthDifference = today.getMonth() - inputDate.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < inputDate.getDate())) {
            calculatedAge--;
        }

        return calculatedAge
    }