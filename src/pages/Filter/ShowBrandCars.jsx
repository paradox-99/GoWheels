import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic.jsx";
import FeaturedCarts from "../../components/cart/FeaturedCarts.jsx";
import loaderImage from "/logo.gif"
import { Helmet } from "react-helmet-async";

const ShowBrandCars = () => {

    const { brand_name } = useParams();
    const axiosPublic = useAxiosPublic()

    const { isPending, data: cars } = useQuery({
        queryKey: ['carsData'],
        queryFn: async () => {
            const datas = await axiosPublic.get(`/carsRoute/brand/${brand_name}`);
            console.log(datas.data);
            return datas.data;
        }
    })

    if (isPending) {
        return <div className="w-full h-screen flex items-center justify-center">
        <div>
          <img src={loaderImage} alt="Loading..." className="w-[150px]" />
        </div>
      </div>;
    }


    return (
        <div className="px-4 md:px-10">
            <Helmet>
                <title>{brand_name} Cars</title>
            </Helmet>
            <h1 className="text-center">{brand_name} cars</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 justify-items-center">
                {
                    cars?.map((car) => (<FeaturedCarts
                        key={car._id}
                        car={car}
                    ></FeaturedCarts>))
                }
            </div>
        </div>
    );
};

export default ShowBrandCars;