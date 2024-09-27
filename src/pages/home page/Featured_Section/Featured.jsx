import { useEffect, useState } from "react";
import Title from "../../../components/Title/Title";
import FeaturedCarts from "../../../components/cart/FeaturedCarts";

const Featured = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./featuredAndAvaiable.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="pt-20 lg:pt-32 bg-background ">
      <Title title={"Featured Cars"}></Title>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center justify-items-center">
        {data.map((car) => (
          <FeaturedCarts key={car.name} car={car}></FeaturedCarts>
        ))}
      </div>
    </div>
  );
};

export default Featured;
