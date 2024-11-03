
const SkeletonLoader  = () => {
    return (
        <div className="border border-[#FFE2DE] rounded-xl p-6 animate-pulse">
            {/* Image Skeleton */}
            <div className="w-[280px] h-[180px] bg-gray-300 rounded-md mb-4"></div>

            {/* Review Skeleton */}
            <div className="flex items-center gap-2 pb-3">
                <div className="w-10 h-4 bg-gray-300 rounded-md"></div>
                <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-gray-300 rounded-md"></div>
                    ))}
                </div>
            </div>

            {/* Title Skeleton */}
            <div className="w-48 h-6 bg-gray-300 rounded-md mb-4"></div>

            {/* Info Skeleton */}
            <div className="grid grid-cols-2 gap-3">
                <div className="w-24 h-4 bg-gray-300 rounded-md"></div>
                <div className="w-24 h-4 bg-gray-300 rounded-md"></div>
                <div className="w-24 h-4 bg-gray-300 rounded-md"></div>
                <div className="w-24 h-4 bg-gray-300 rounded-md"></div>
            </div>

            {/* Button Skeleton */}
            <div className="flex justify-end mt-4">
                <div className="w-24 h-6 bg-gray-300 rounded-md"></div>
            </div>
        </div>
    );
};

export default SkeletonLoader ;