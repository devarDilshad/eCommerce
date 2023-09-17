/* eslint-disable react/prop-types */
import { devices } from "../constants/index";
import DeviceCard from "./DeviceCard";

const ProductList = ({ cart, setCart }) => {

  return (
    <section className="pb-10">
      <div className="max-w-[130rem] mx-auto px-6">
        <div className="flex justify-center items-center flex-wrap gap-10">
          {devices.map((device) => (
            <DeviceCard
              key={device.id}
              device={device}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
