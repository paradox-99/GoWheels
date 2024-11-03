import { useNavigate } from "react-router-dom";
import { top_brands } from "../../../public/locationData";

const TopCars = () => {

    const navigate = useNavigate();

    const handleBrand = brand_name => {
        navigate(`/brand/${brand_name}`)
    }

    return (
        <div>
            <div className="mt-28">
                <div className="bg-secondary w-20 h-1 mb-8"></div>
                <h1 className="text-5xl font-merriweather font-bold">Top Brands</h1>
                <div className="mt-10 flex flex-wrap lg:flex-nowrap lg:flex-row justify-center gap-5">
                    {
                        top_brands.map(brand =>
                            <div key={brand.name}>
                                <div className="bg-slate-200 rounded-md relative" onClick={() => handleBrand(brand.name)}>
                                    <img src={brand.image} alt="" className="w-[300px] h-[200px] -z-10" />
                                    <img src={brand.logo} alt="" className="w-[300px] h-[200px] hover:bg-secondary absolute top-0 left-0 rounded-md opacity-0 hover:opacity-100 transition ease-in-out duration-700 z-10" />
                                </div>
                                <h3 className="text-center font-nunito text-2xl font-semibold mt-4">{brand.name}</h3>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopCars;