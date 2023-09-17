/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ItemModal = ({ device, setShowModal }) => {
  return (
    <>
      <div
        className={`z-10 w-full h-full bg-black opacity-25 absolute top-0 left-0 bottom-0`}
        onClick={() => setShowModal(false)}
      ></div>
      <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
        <div className="w-[18rem] md:w-[26rem] bg-white rounded-2xl shadow-2xl">
          <div className="overflow-hidden flex flex-col justify-center items-center gap-2 py-8 font-primary font-medium">
            <h2 className="text-2xl capitalize">item added to cart</h2>
            <img
              src={device.img}
              alt={device.brand}
              className="w-[15rem] md:w-[20rem]"
            />
            <p className="text-xl capitalize">
              {device.brand} {device.model}
            </p>
            <p className="text-gray-500">Price: ${device.price}</p>
            <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-2">
              <button
                className="border-2 py-1 px-2 rounded border-blue-400 w-40 capitalize"
                onClick={() => setShowModal(false)}
              >
                <Link to="/">continue shopping</Link>
              </button>
              <button className="py-1 px-2 rounded bg-blue-500 text-white w-40 capitalize border-blue-500 border-2">
                <Link to="/cart">go to cart</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemModal;
