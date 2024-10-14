import { useEffect, useState } from "react";
import Title from "../../../components/Title/Title";
import FeaturedCarts from "../../../components/cart/FeaturedCarts";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Featured = () => {
  const axiosPublic = useAxiosPublic()
  
  const { data: cars = [] } = useQuery({
    queryKey: ["carsRoute/cars"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/carsRoute/cars`);
      return res.data;
    },
  });

  console.log(cars)

  return (
    <div className="pt-20 lg:pt-32 ">
      <Title title={"Featured Cars"}></Title>
<<<<<<< HEAD

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center justify-items-center">
        {cars.map((car) => (
=======
      <div className="px-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center justify-items-center">
        {data.map((car) => (
>>>>>>> 40bf332096fe5c3e027685f7624b6ed61bfa9235
          <FeaturedCarts key={car.id} car={car}></FeaturedCarts>
        ))}
      </div>
    </div>
  );
};

export default Featured;
