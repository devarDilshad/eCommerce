/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import CartItems from "../components/CartItems";

const Cart = ({ cart, setCart }) => {
  const [updatedCart, setUpdatedCart] = useState([]);
  if (updatedCart.length) {
    var sum = 0;
    updatedCart.forEach((element) => {
      sum += element.totalPrice;
    });
    var tax = (sum / 100) * 2;
    var total = sum + tax;
  }

  const clearCart = () => {
    setCart([]);
    window.localStorage.clear();
  };

  return (
    <>
      {cart.length ? (
        <section>
          <div className="max-w-[130rem] mx-auto px-10 font-primary">
            <div className="flex flex-col justify-center items-center py-5 gap-4">
              <p className="capitalize text-3xl mr-4">your cart</p>
              <div className="md:flex justify-between w-full py-8 px-3 items-center uppercase hidden">
                <span>products</span>
                <span>name of product</span>
                <span>price</span>
                <span>quantity</span>
                <span>remove</span>
                <span>total</span>
              </div>
              {cart.map((item) => (
                <CartItems
                  key={item.id}
                  item={item}
                  cart={cart}
                  setCart={setCart}
                  updatedCart={updatedCart}
                  setUpdatedCart={setUpdatedCart}
                />
              ))}
              <div className="flex flex-col w-full items-end uppercase">
                <div className="flex justify-between items-center w-36">
                  <p>sub total :</p>
                  <span>${sum}</span>
                </div>
                <div className="flex justify-between items-center w-36">
                  <p>tax :</p>
                  <span>${tax}</span>
                </div>
                <div className="flex justify-between items-center w-36">
                  <p>total :</p>
                  <span>${total}</span>
                </div>
                <button
                  onClick={clearCart}
                  className="border-[1px] capitalize bg-blue-500 text-white w-36 text-lg rounded my-1"
                >
                  check out
                </button>
                <button
                  onClick={clearCart}
                  className="text-red-500 border-[1px] capitalize border-red-500 w-36 text-lg rounded"
                >
                  clear cart
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="h-[90vh] w-full text-center mt-20 text-3xl">
          Your Cart is currently empty
        </div>
      )}
    </>
  );
};

export default Cart;
