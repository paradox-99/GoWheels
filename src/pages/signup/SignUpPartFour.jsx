
import { useEffect, useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";
import { imageUpload } from "../../api/utilities";
import loaderElement from '../../../public/logo.gif';
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useDesignation from "../../hooks/useDesignation";
import { Helmet } from "react-helmet-async";

const SignUpPartFour = () => {
    const [imageText, setImageText] = useState('image name.png');
    const [imagePreview, setImagePreview] = useState(null);
    const inputRef = useRef();
    const [dragActive, setDragActive] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const navigate = useNavigate();
    const { user, setUser, loader, setLoader, updateUserProfile } = UseAuth() || {};
    const { userInfo } = useDesignation();
    const location = useLocation();
    const { firstName, lastName } = location.state?.userInfo || {};
    const axiosPublic = useAxiosPublic();
    const { displayName } = user || {};

    useEffect(() => {
        if ((!user && !loader) || userInfo.image || userInfo.circleImage) {
            navigate('/join');
        }
    }, [loader, navigate, user, userInfo.circleImage, userInfo.image])

    const handleImage = (image) => {
        setImagePreview(URL.createObjectURL(image));
        setImageText(image.name);
        setImageFile(image)
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        const droppedFile = e.dataTransfer.files[0];
        setImageText(droppedFile.name);
        setImagePreview(URL.createObjectURL(droppedFile));
        setImageFile(droppedFile)
    };

    const handleInfo = async (e) => {
        e.preventDefault();
        const fullName = `${firstName} ${lastName}`;
        const image = imageFile;
        const email = user?.email;
        try {
            setLoader(true)
            const userImage = await imageUpload(image)

            if (userImage) {
                await updateUserProfile(fullName, userImage);
                setUser({ ...user, displayName: fullName, photoURL: userImage });

                const { data } = await axiosPublic.patch(`/usersRoute/users/${email}`, { image: userImage });
                if (data.modifiedCount) {
                    setLoader(false)
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Image Uploaded Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/join/signUpFive', {
                        state: {
                            userImage,
                            from: '/join/signUpFour',
                        }
                    });
                }
            }
        } catch (error) {
            setLoader(false)
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: 'Image uploading failed',
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    };

    if (loader) {
        return <div className='flex justify-center'>
            <img className='mx-auto' src={loaderElement} alt="" />
        </div>
    }

    return (
        <div className='lg:w-[40vw] bg-transparent lg:bg-[#fdfefe33] mx-auto px-10 rounded-lg py-5'>
            <Helmet>
                <title>Upload Image || Sign Up</title>
            </Helmet>
            <div className='text-center mx-auto'>
                <h1 className='text-3xl lg:text-5xl font-bold text-primary font-merriweather'>Hi! {displayName}</h1>
            </div>
            <section className='mt-3'>
                <form
                    onSubmit={handleInfo}
                    className='font-nunito'>
                    <div><h1 className="text-[#fdfefe] text-center mt-5">Upload your profile picture</h1></div>


                    <div className="mt-3 mx-auto">

                        <div className='flex flex-col items-center justify-center '>
                            <div
                                onDragOver={handleDragOver}
                                onDrop={handleDrop}
                                onDragLeave={handleDragLeave}
                                style={{
                                    backgroundImage: `url(${imagePreview})`
                                }}
                                className="border-dashed border-2 border-primary w-36 h-36 bg-no-repeat bg-center bg-cover px-5 pb-3 lg:flex flex-col items-center justify-center mt-2 hidden "
                            >
                                <FiUpload className="text-7xl text-primary" />
                                <div className="text-center">
                                    {imagePreview ? "" : <h1>Drag and Drop</h1>}
                                </div>
                            </div>
                            {
                                imagePreview && <div className="mt-2">
                                    <h1>{imageText.length > 15 ? imageText.split('.')[0].slice(0, 15) + '...' + imageText.split('.')[1] : imageText}</h1>
                                </div>
                            }
                            <div className="lg:mt-3">
                                <input
                                    onChange={e => handleImage(e.target.files[0])}
                                    type="file"
                                    name="image"
                                    id="profile"
                                    hidden
                                    accept='image/*'
                                    ref={inputRef}
                                />
                                <button
                                    onClick={() => inputRef.current.click()}
                                    type="button"
                                    className='bg-primary px-3 py-1 rounded text-white font-semibold cursor-pointer hover:bg-[#fdfefe] duration-500 hover:text-secondary'
                                >
                                    Browse from your device
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-between lg:mt-5 mt-10">
                        <div>
                            <Link
                                type="button"
                                className='bg-primary px-3 py-1 rounded text-white font-semibold cursor-pointer'
                                to="/"
                            >
                                Skip
                            </Link>
                        </div>
                        <div>
                            <button
                                disabled={imagePreview === null}
                                type="submit"
                                className={`bg-primary px-3 py-1 rounded text-white font-semibold ${imagePreview === null ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                                Proceed
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default SignUpPartFour;
