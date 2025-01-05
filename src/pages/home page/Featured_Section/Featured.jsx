<<<<<<< HEAD
=======

>>>>>>> ec011bd69ddec75dc5029ffd7534b56026ea726d
import Title from "../../../components/Title/Title";
import FeaturedCarts from "../../../components/cart/FeaturedCarts";
import useVehicleData from "../../../hooks/useVehicleData";

const Featured = () => {
  const {cars} = useVehicleData();
  console.log(cars);
  return (
    <div className="pt-20 lg:pt-32 ">
      <Title title={"Featured Cars"}></Title>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center justify-items-center">
        {cars.map((car) => (
          <FeaturedCarts key={car.id} car={car}></FeaturedCarts>
        ))}
      </div>
    </div>
  );
};

export default Featured;
