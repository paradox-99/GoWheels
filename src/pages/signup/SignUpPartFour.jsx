import axios from "axios";
import { useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { Link } from "react-router-dom";


const SignUpPartFour = () => {
    const [imageText, setImageText] = useState('image name.png');
    const [imagePreview, setImagePreview] = useState();
    const inputRef = useRef()
    const [dragActive, setDragActive] = useState(false);


    const hnadleImage = (image) => {
        setImagePreview(URL.createObjectURL(image));
        setImageText(image.name)
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
    };

    const handleInfo = async (e) => {
        e.preventDefault();

        const userImage = imageText;
        console.log(userImage)

        const formData = new FormData();
        formData.append('image', userImage)

        try {
            const response = await axios.post(
                `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
                formData
            );
            const productImage = response.data.data.display_url;
            console.log(productImage)
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='lg:w-[40vw] bg-transparent lg:bg-[#fdfefe33] mx-auto px-10 rounded-lg py-5'>
            <div className='text-center mx-auto'>
                <h1 className='text-3xl lg:text-5xl font-bold text-primary font-merriweather'>GoWheels</h1>
                <h1 className='text-2xl lg:text-4xl font-bold text-[#fdfefe] font-merriweather'>Optional info</h1>
            </div>
            <section className='mt-3'>
                <form
                    onSubmit={handleInfo}
                    className='font-nunito'>
                    <div>
                        <input
                            type="address"
                            name="address"
                            id="address"
                            className='border-[1px] border-secondary outline-none w-full rounded-xl py-1 lg:py-2 px-6 text-secondary' placeholder='Enter your address'
                        />
                    </div>
                    <div><h1 className="text-[#fdfefe] text-center mt-5">upload your profile picture</h1></div>
                    <div className="mt-3 flex flex-col-reverse lg:flex-row gap-2 lg:gap-0  items-center lg:justify-between">
                        <div>
                            <div
                                onDragOver={handleDragOver}
                                onDrop={handleDrop}
                                onDragLeave={handleDragLeave}
                                className=" border-dashed border-[2px] border-primary lg:flex flex-col items-center bg-[#fdfefe80] mt-2 hidden ">
                                <FiUpload className="text-7xl text-primary" />
                                <div className="text-center">
                                    <h1>Drag and Drop</h1>
                                    <h1>Or</h1>
                                </div>
                            </div>
                            <div className="lg:mt-3">
                                <input
                                    onChange={e => hnadleImage(e.target.files[0])}
                                    type="file"
                                    name="profile"
                                    id="profile"
                                    hidden
                                    accept='image/*'
                                    ref={inputRef}
                                />

                                <button
                                    onClick={() => inputRef.current.click()}
                                    type="button"
                                    className='bg-primary px-3 py-1 rounded-xl text-white font-semibold cursor-pointer hover:bg-[#fdfefe] duration-500 hover:text-secondary'>
                                    Browse from your device
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-40 h-40 border-2 border-primary rounded-full overflow-hidden flex justify-center items-center cursor-pointer">
                                {imagePreview && <img src={imagePreview} />}

                            </div>
                            {
                                imageText.length > 15 ? imageText.split('.')[0].slice(0, 15) + '...' + imageText.split('.')[1] : imageText
                            }
                        </div>
                    </div>

                    <div className="flex justify-between lg:mt-5 mt-10">
                        <div>
                            <Link
                                className='bg-primary px-3 py-1 rounded-xl text-white font-semibold cursor-pointer'>
                                skip
                            </Link>
                        </div>
                        <div>
                            <button
                                type="sumbit"
                                className='bg-primary px-3 py-1 rounded-xl text-white font-semibold cursor-pointer'>
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