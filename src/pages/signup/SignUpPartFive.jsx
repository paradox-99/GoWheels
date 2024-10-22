import UseAuth from "../../hooks/UseAuth";
import Avatar from "react-avatar-edit";
import { useLocation, useNavigate } from "react-router-dom";
import { imageUpload } from "../../api/utilities";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import loaderEliment from '../../../public/logo.gif';
import useDesignation from "../../hooks/useDesignation";
import { Helmet } from "react-helmet-async";

const SignUpPartFive = () => {

    const { user, loader, setLoader } = UseAuth() || {};
    const { userInfo } = useDesignation();
    const { displayName } = user || {};
    const [preview, setPreview] = useState(null);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const location = useLocation();
    const { userImage, from } = location.state || {};
 
    useEffect(() => {
        if ((!user && !loader) || !from) {
            navigate('/join');
        }
        else if ((userInfo.image && userInfo.circleImage) ){
            navigate('/')
        }
    }, [from, loader, navigate, user, userInfo.circleImage, userInfo.image])

    const onClose = () => {
        setPreview(userImage);
    };

    const onCrop = (croppedPreview) => {
        setPreview(croppedPreview);
    };

    const base64ToFile = (base64, filename) => {
        const arr = base64.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    };


    const handlesubmit = async (e) => {
        e.preventDefault();
        const email = user?.email;

        try {
            if (preview) {
                setLoader(true);
                const croppedImageFile = base64ToFile(preview, `${user?.displayName} cropped-image.jpg`);
                const userCropImage = await imageUpload(croppedImageFile);

                if (userCropImage) {
                    const { data } = await axiosPublic.patch(`/usersRoute/user/${email}`, { userCropImage })
                    if (data.modifiedCount) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Image cropped Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');
                    }
                }
            }
        }
        catch (error) {
            setLoader(false)
            console.log(error)
        }
    }

    if (loader) {
        return <div className='flex justify-center'>
            <img className='mx-auto' src={loaderEliment} alt="" />
        </div>
    }
    return (
        <div className='lg:w-[40vw] bg-transparent lg:bg-[#fdfefe33] mx-auto px-10 rounded-lg py-5'>
            <Helmet>
                <title>Crop Image || Sign Up</title>
            </Helmet>
            <div className='text-center mx-auto'>
                <h1 className='text-3xl lg:text-5xl font-bold text-primary font-merriweather'>
                    {displayName}
                </h1>
            </div>

            <form onSubmit={handlesubmit}>
                <div className="relative flex justify-center items-center mt-5">
                    {user && <>
                        <Avatar
                            width={400}
                            height={300}
                            onCrop={onCrop}
                            onClose={onClose}
                            src={user?.photoURL}
                        />
                    </>}
                </div>

                <div className="flex justify-center lg:mt-5 mt-10">
                    <div>
                        <button
                            type="submit"
                            className='bg-primary px-3 py-1 rounded-xl text-white font-semibold'
                        >
                            Crop and save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};


export default SignUpPartFive;
