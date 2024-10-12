import { useEffect, useState } from "react";
import Title from "../../../components/Title/Title";
import FeaturedCarts from "../../../components/cart/FeaturedCarts";

const Featured = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("./featuredAndAvailable.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="pt-20 lg:pt-32 ">
      <Title title={"Featured Cars"}></Title>
      <div className="px-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center justify-items-center">
        {data.map((car) => (
          <FeaturedCarts key={car.id} car={car}></FeaturedCarts>
        ))}
      </div>
    </div>
  );
};

export default Featured;
