import { useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import Avatar from "react-avatar-edit";
import { Link, useNavigate } from "react-router-dom";

const SignUpPartFive = () => {

    const { user, setLoader, setImagePreview } = UseAuth() || {};
    const { displayName, photoURL } = user || {};
    const [preview, setPreview] = useState(null);
    const [src, setSrc] = useState(photoURL);
    const navigate = useNavigate();

    const onClose = () => {
        setPreview(photoURL);
    };

    const onCrop = (croppedPreview) => {
        setPreview(croppedPreview);
    };

    const handlesubmit = async (e) => {
        e.preventDefault();

        try {
            if (preview) {
                setLoader(true);
                setImagePreview(preview);
                navigate('/');
            }
        }
        catch (error) {
            setLoader(false)
            console.log(error)
        }
    }


    return (
        <div className='lg:w-[40vw] bg-transparent lg:bg-[#fdfefe33] mx-auto px-10 rounded-lg py-5'>
            <div className='text-center mx-auto'>
                <h1 className='text-3xl lg:text-5xl font-bold text-primary font-merriweather'>
                    {displayName}
                </h1>
            </div>

            <form onSubmit={handlesubmit}>
                <div className="relative flex justify-center items-center mt-5">

                    <Avatar
                        width={400}
                        height={300}
                        onCrop={onCrop}
                        onClose={onClose}
                        src={src}
                    />
                </div>

                <div className="flex justify-between lg:mt-5 mt-10">
                    <div>
                        <Link
                            type="button"
                            className='bg-primary px-3 py-1 rounded-xl text-white font-semibold cursor-pointer'
                            to="/join/signUpFour"
                        >
                            Back
                        </Link>
                    </div>
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
