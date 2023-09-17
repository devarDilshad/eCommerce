/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";

const CartItems = ({ item, cart, setCart, setUpdatedCart }) => {
  const [noItems, setNoItems] = useState(1);
  // removing this will make NAN ?
  item.totalPrice = 0;
  const total = item.price * noItems;

  // Set state on mount
  useEffect(() => {
    setNoItems(JSON.parse(window.localStorage.getItem(item.model)) || 1);
  }, []);

  // Update local storage & updatedCart state
  useEffect(() => {
    window.localStorage.setItem(item.model, noItems);
    let cartWOItem = cart.filter((product) => product.id !== item.model);
    setUpdatedCart([...cartWOItem, { ...item, totalPrice: total }]);
  }, [noItems]);

  const handleDec = () => {
    if (noItems === 1) {
      removeItem();
    } else {
      setNoItems(noItems - 1);
    }
  };

  const handleInc = () => {
    setNoItems(noItems + 1);
  };

  const removeItem = () => {
    const returnedItems = cart.filter(
      (removedItem) => removedItem.id !== item.id
    );
    setCart(returnedItems);
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-5 md:gap-0 items-center w-full mb-6">
      <img src={item.img} alt={item.brand} className="w-32 h-32" />
      <p className="capitalize md:w-[8rem]">{item.brand + " " + item.model}</p>
      <p>{item.price}</p>
      <div className="flex justify-center items-center gap-3">
        <button
          className="border-2 w-8 h-8 rounded hover:bg-primary hover:text-white"
          onClick={handleDec}
        >
          -
        </button>
        <span className="border-2 py-1 px-3 rounded"> {noItems} </span>
        <button
          className="border-2 w-8 h-8 rounded hover:bg-primary hover:text-white"
          onClick={handleInc}
        >
          +
        </button>
      </div>
      <button onClick={removeItem}>
        <i className="fa-solid fa-trash"></i>
      </button>
      <p className=" capitalize font-semibold">item total: ${total} </p>
    </div>
  );
};

export default CartItems;
