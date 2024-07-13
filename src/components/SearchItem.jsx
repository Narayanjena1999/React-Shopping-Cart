import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";

const SearchItem = ({ cart, setCart }) => {
  const [filterData, setFilterData] = useState([]);
  const { term } = useParams();

  useEffect(() => {
    const filteredData = () => {
      const data = items.filter((p) =>
        p.title.toLowerCase().includes(term.toLowerCase())
      );
      console.log(data);
      setFilterData(data);
    };
    filteredData();
  }, [term]);

  return <Product cart={cart} setCart={setCart} items={filterData} />;
};

export default SearchItem;
