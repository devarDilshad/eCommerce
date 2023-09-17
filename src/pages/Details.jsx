/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom";
import { devices } from "../constants/index";
import { useState } from "react";
import ItemModal from "../components/ItemModal";

const Details = ({ cart, setCart }) => {
  const [showModal, setShowModal] = useState(false);
  const { brandName } = useParams();
  const { modelName } = useParams();
  const selectedDevice = devices.filter(
    (device) => device.model === modelName && device.brand === brandName
  );
  const device = selectedDevice[0];

  let isInCart;
  cart.map((item) => {
    if (item.id === device.id) {
      isInCart = true;
    } else {
      isInCart = false;
    }
  });

  const addToCart = (device) => {
    const newArray = [...cart, device];
    setCart(newArray);
    setShowModal(true);
  };

  return (
    <section className="py-14 md:py-28">
      <div className="max-w-[130rem] mx-auto px-10">
        {showModal && <ItemModal setShowModal={setShowModal} device={device} />}
        <h1 className="text-center text-3xl mr-3 mb-10 capitalize">
          {brandName} {modelName}
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-10">
          <img
            src={device.img}
            className="border-b-2 sm:border-r-[1px] border-primary sm:border-b-0 px-10 sm:mr-14"
            alt={device.brand + " " + device.model}
          />
          <div className="flex flex-col max-w-[30rem] gap-2 text-center sm:text-left">
            <p className="font-bold">
              Model: {device.brand + " " + device.model}
            </p>
            <p className=" capitalize text-gray-400">made by: {device.brand}</p>
            <span>Price: ${device.price}</span>
            <p className="mt-5">{device.desc}</p>
            <div className="flex flex-col-reverse md:flex-row md:justify-start justify-center items-center gap-2 my-5 font-primary">
              <button
                className={`${
                  isInCart && "bg-blue-500 text-white"
                } border-2 py-1 px-2 rounded border-blue-500 w-40 capitalize`}
              >
                <Link to="/">back to products</Link>
              </button>
              {isInCart ? (
                <span className="py-1 px-2 rounded border-blue-500 w-40 capitalize border-2 text-center">
                  item in cart
                </span>
              ) : (
                <button
                  className="py-1 px-2 rounded bg-blue-500 text-white w-40 capitalize border-blue-500 border-2 hover:bg-blue-600 ease-in-out duration-150"
                  onClick={() => addToCart(device)}
                >
                  add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
