/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const App = () => {
  const [cart, setCart] = useState([]);
  const cartItemsNo = cart.length;

  const location = useLocation();
  // Scroll to top when changing routes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(()=> {
    window.localStorage.clear();
  },[])

  // Little hack for optimizing the modal backdrop to fit larger screen sizes
  let homeRoute;
  if (location.pathname === "/") {
    homeRoute = true;
  }

  return (
    <div className={`${homeRoute ? "relative" : ""}`}>
      <Navbar cartItemsNo={cartItemsNo} />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route
          path="/details/:brandName/:modelName"
          element={<Details cart={cart} setCart={setCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </div>
  );
};

export default App;
