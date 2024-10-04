import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic.jsx";
import FeaturedCarts from "../../components/cart/FeaturedCarts.jsx";

const ShowBrandCars = () => {

    const {brand_name} = useParams();
    const axiosPublic = useAxiosPublic()

    const { isPending, data: cars} = useQuery({
        queryKey: ['carsData'],
        queryFn: async() => {
            const datas = await axiosPublic.get(`/carsRoute/brand/${brand_name}`);
            console.log(datas.data);
            return datas.data;
        }
    })

    if(isPending){
        return <div>Loading...</div>;
    }
    

    return (
        <div className="grid grid-cols-3 gap-10 mt-10">
            {
                cars?.map((car) => (<FeaturedCarts 
                    key={car._id}
                    car={car}
                ></FeaturedCarts>))
            }
        </div>
    );
};

export default ShowBrandCars;