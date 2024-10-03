import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ShowCars from "./ShowCars.jsx";
import useAxiosPublic from "../../hooks/useAxiosPublic.jsx";

const ShowBrandCars = () => {

    const {brand_name} = useParams();
    const axiosPublic = useAxiosPublic()

    const { data: cars} = useQuery({
        queryKey: ['carsData'],
        queryFn: async() => {
            const datas = await axiosPublic.get(`/carsRoute/brand/${brand_name}`);
            console.log(datas.data);
            return datas.data;
        }
    })

    console.log(cars);
    

    return (
        <div className="grid grid-cols-3 gap-10 mt-10">
            {
                cars?.map((car) => (<ShowCars 
                    key={car._id}
                    car={car}
                ></ShowCars>))
            }
        </div>
    );
};

export default ShowBrandCars;