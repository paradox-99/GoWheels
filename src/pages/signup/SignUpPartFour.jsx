import axios from "axios";
import { useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const SignUpPartFour = () => {
    const [imageText, setImageText] = useState('image name.png');
    const [imagePreview, setImagePreview] = useState(null);
    const inputRef = useRef();
    const [dragActive, setDragActive] = useState(false);
    const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [zoomLevel, setZoomLevel] = useState(1); // New zoom state
    const [imageFile, setImageFile] = useState(null);
    const navigateNext = useNavigate();

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

        const image = imageFile;
        const formData = new FormData();
        formData.append('image', image);

        console.log(image)

        try {
            const response = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
                formData
            );
            
            const userImage = response.data.data.display_url;
            console.log(response)
            console.log("Image uploaded successfully:", userImage);
            if (userImage) {
                navigateNext('/join/signUpFive')
            }
        } catch (error) {
            console.log(error);
        }
    };
 
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
                    <div><h1 className="text-[#fdfefe] text-center mt-5">Upload your profile picture</h1></div>

                    {/* Upload Section */}
                    <div className="mt-3 mx-auto">
                        {/* Upload Button */}
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
                            <div className="mt-2">
                                {imagePreview ? <h1>{imageText}</h1> : <h1>Or</h1>}
                            </div>
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
                                    className='bg-primary px-3 py-1 rounded-xl text-white font-semibold cursor-pointer hover:bg-[#fdfefe] duration-500 hover:text-secondary'
                                >
                                    Browse from your device
                                </button>
                            </div>
                        </div>       

                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between lg:mt-5 mt-10">
                        <div>
                            <Link
                                type="button"
                                className='bg-primary px-3 py-1 rounded-xl text-white font-semibold cursor-pointer'
                                to="/"
                            >
                                Skip
                            </Link>
                        </div>
                        <div>
                            <button
                                disabled={imagePreview === null}
                                type="submit"
                                className={`bg-primary px-3 py-1 rounded-xl text-white font-semibold ${imagePreview === null ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                            >
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
