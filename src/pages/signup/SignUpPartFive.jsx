import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";


const SignUpPartFive = () => {

    // const [isDragging, setIsDragging] = useState(false);
    // const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    // const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
    // const location = useLocation();
    // const imageRef = useRef(null);
    // const { userImage } = location.state || {};
    const [aspectRatio, setAspectRatio] = useState({ width: '350px', height: '350px' })
    const [zoomLevel, setZoomLevel] = useState(1);
    const { user } = UseAuth();
    const { displayName, photoURL } = user || {};

    console.log(displayName, photoURL)

    useEffect(() => {
        const img = new Image();
        img.src = photoURL;
        img.onload = () => {
            const aspectRatio = img.width / img.height;
            if (aspectRatio < 1) {
                setAspectRatio({ width: '300px', height: '400px' });
            } 
            else {
                setAspectRatio({ width: '400px', height: '300px' });
            }
        };
    }, [photoURL]);

    // const handleMouseDown = (e) => {
    //     e.preventDefault()
    //     setIsDragging(true);
    //     setStartPos({ x: e.clientX - imagePosition.x, y: e.clientY - imagePosition.y });
    // };

    // const handleMouseMove = (e) => {
    //     e.preventDefault()
    //     if (isDragging) {
    //         setImagePosition({
    //             x: e.clientX - startPos.x,
    //             y: e.clientY - startPos.y,
    //         });
    //     }
    // };


    // const handleMouseUp = (e) => {
    //     e.preventDefault()
    //     setIsDragging(false);
    // };

    const handleZoomChange = (e) => {
        e.preventDefault()
        setZoomLevel(e.target.value);
    };
    return (
        <div className='lg:w-[40vw] bg-transparent lg:bg-[#fdfefe33] mx-auto px-10 rounded-lg py-5'>
            <div className='text-center mx-auto'>
                <h1 className='text-3xl lg:text-5xl font-bold text-primary font-merriweather'>{user?.displayName}</h1>
            </div>

            <div className="relative flex justify-center items-center border">

                <div
                    style={{
                        backgroundImage: `url(${photoURL})`,
                        backgroundSize: 'cover',  // Ensures the image covers the container
                        backgroundPosition: 'center',  // Center the image in the container
                        width: aspectRatio.width,   // Set custom width for the container
                        height: aspectRatio.height,  // Set custom height for the container
                        backgroundRepeat: 'no-repeat',  // Prevent repeating
                    }}
                    // onMouseDown={handleMouseDown}
                    // onMouseMove={handleMouseMove}
                    // onMouseUp={handleMouseUp}
                    className="relative flex justify-center items-center bg-no-repeat ">

                    <div
                        className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-primary flex justify-center items-center ">
                    </div>

                </div>

            </div>
            <div className="mt-4 flex justify-center">
                <input
                    type="range"
                    min="1"
                    max="3"
                    step="0.01"
                    value={zoomLevel}
                    onChange={handleZoomChange}
                    className="w-40"
                />
            </div>
        </div>
    );
};

export default SignUpPartFive;
