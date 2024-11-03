import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic.jsx";
import FeaturedCarts from "../../components/cart/FeaturedCarts.jsx";
import { Helmet } from "react-helmet-async";
import { Skeleton } from "@mui/material";

const ShowBrandCars = () => {

    const { brand_name } = useParams();
    const axiosPublic = useAxiosPublic()

    const { isPending, data: cars } = useQuery({
        queryKey: ['carsData'],
        queryFn: async () => {
            const response = await axiosPublic.get(`/carsRoute/brand/${brand_name}`);
            return response.data;
        }
    })

    if (isPending) {
        return <div className="flex flex-col justify-center items-center gap-4 h-[80vh]">
            <Skeleton variant="rectangular" animation="wave" width={400} height={120}></Skeleton>
            <Skeleton variant="rectangular" animation="wave" width={400} height={120}></Skeleton>
            <Skeleton variant="rectangular" animation="wave" width={400} height={120}></Skeleton>
        </div>
    }

    return (
        <div className="px-4 md:px-10 mt-10">
            <Helmet>
                <title>{brand_name} Cars</title>
            </Helmet>
            <div className="bg-secondary w-20 h-2 mb-5"></div>
            <h1 className="text-5xl font-merriweather font-bold mb-5">{brand_name} Cars</h1>
            {
                cars?.length === 0 ? <div className="w-full h-[30vh] text-2xl font-nunito flex items-center justify-center">Sorry. No car found.</div> : <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 justify-items-center">
                        {
                            cars?.map((car) => (<FeaturedCarts
                                key={car._id}
                                car={car}
                            ></FeaturedCarts>))
                        }
                    </div>
            }
        </div>
    );
};

export default ShowBrandCars;