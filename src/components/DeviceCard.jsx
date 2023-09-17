/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ItemModal from "./ItemModal";
import { useState } from "react";

const DeviceCard = ({ cart, device, setCart }) => {
  const [showModal, setShowModal] = useState(false);

  const addToCart = (device) => {
    setShowModal(true);
    const newArray = [...cart, device];
    setCart(newArray);
  };

  let isInCart;
  cart.map((item) => {
    if (item.id === device.id) {
      isInCart = true;
    }
  });

  return (
    <div className="">
      {showModal && <ItemModal device={device} setShowModal={setShowModal} />}
      <div key={device.model} className="w-[18rem] group">
        <div className="flex flex-col rounded shadow-2xl">
          <Link to={`details/${device.brand + "/" + device.model}`}>
            <img
              src={device.img}
              alt={device.brand + " " + device.model}
              className="scale-90 group-hover:scale-100 ease-linear duration-300 cursor-pointer"
            />
          </Link>
          <div className="flex justify-end items-center">
            {isInCart ? (
              <span className="rounded-tl py-1 px-2 bg-sky-400 cursor-pointer text-white hover:text-secondary capitalize">
                in cart
              </span>
            ) : (
              <button
                className="rounded-tl py-1 px-2 bg-sky-400 cursor-pointer text-white hover:text-secondary"
                onClick={() => {
                  addToCart(device);
                }}
              >
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            )}
          </div>
          <div className="flex justify-between items-center py-1 px-3 bg-gray-100 rounded-b">
            <p className="capitalize">
              {device.brand} {device.model}
            </p>
            <p>${device.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceCard;
