import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";


const SignUpPartFive = () => {
    // const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    // const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
    const [aspectRatio, setAspectRatio] = useState(null);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
    const location = useLocation();
    const imageRef = useRef(null);
    const { userImage } = location.state || {};
    const [zoomLevel, setZoomLevel] = useState(1);

    useEffect(() => {
        const img = new Image();
        img.src = userImage;
        img.onload = () => {
            setAspectRatio(img.width / img.height);
        };
    }, [userImage]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartPos({ x: e.clientX - imagePosition.x, y: e.clientY - imagePosition.y });
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            setImagePosition({
                x: e.clientX - startPos.x,
                y: e.clientY - startPos.y,
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // const handleMouseMove = (e) => {

    //     if (!dragging) return;

    //     const newPosition = { ...position };
    //     const deltaX = e.clientX - startPosition.x;
    //     const deltaY = e.clientY - startPosition.y;

    //     if (aspectRatio > 1) {

    //         newPosition.x = deltaX;
    //         setStartPosition({ x: e.clientX, y: startPosition.y });
    //     } else {

    //         newPosition.y = deltaY;
    //         setStartPosition({ x: startPosition.x, y: e.clientY });
    //     }

    //     setPosition(newPosition);
    // };

    const handleZoomChange = (e) => {
        setZoomLevel(e.target.value);
    };
    return (
        <div className='lg:w-[40vw] bg-transparent lg:bg-[#fdfefe33] mx-auto px-10 rounded-lg py-5'>
            <div className='text-center mx-auto'>
                <h1 className='text-3xl lg:text-5xl font-bold text-primary font-merriweather'>GoWheels</h1>
            </div>

            <div className="relative flex justify-center items-center">


                <div className="relative flex justify-center items-center ">

                    <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-primary flex justify-center items-center">
                        <div
                            className="absolute w-full h-full cursor-grab bg-no-repeat"
                            style={{
                                backgroundImage: `url(${userImage})`,
                                backgroundSize: `${zoomLevel * 100}%`,
                                backgroundPosition: `${imagePosition.x}px ${imagePosition.y}px`,
                                transform: `translate(${imagePosition.x}px, ${imagePosition.y}px)`,
                            }}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                        ></div>
                    </div>
                </div>

                {/* <div
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onMouseDown={handleMouseDown}
                    className="relative flex justify-center items-center py-10">
                    <div className="relative w-[21vw]">
                        <img
                        style={{
                            backgroundSize: `${zoomLevel * 100}%`,
                            backgroundPosition: `${imagePosition.x}px ${imagePosition.y}px`,
                            transform: `translate(${imagePosition.x}px, ${imagePosition.y}px)`,
                        }}
                            // style={{
                            //     transform: `translate(${position.x}px, ${position.y}px)`,
                            //     transition: dragging ? "none" : "transform 0.1s ease-out",
                            // }}
                            ref={imageRef}
                            src={productImage}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                maskImage: 'radial-gradient(circle at center, transparent 7.5rem, black 7.5rem)',
                            }}
                        ></div>
                        <div
                            className="h-60 w-60 rounded-full border border-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        ></div>
                    </div>
                </div> */}


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
