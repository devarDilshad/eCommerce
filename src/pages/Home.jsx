/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ProductList from "../components/ProductList";
import FilterBar from "../components/FilterBar";

const Home = ({ cart, setCart}) => {
  return (
    <>
      <FilterBar />
      <ProductList cart={cart} setCart={setCart} />
    </>
  );
};

export default Home;
