"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/common/ProductCard";
import axios from "axios";

export default function Product() {
  // wasie client side render nhi karna un pages ke upr jin pages ke andr jin pages prr seo ke parameter pass karna h
  let [product, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setProduct(res.data.products);
    // console.log(res.data.products)
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Product</h1>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {
          product.map((obj,index) => {
            return <ProductCard key={index} data={obj} />;
          })
        }
      </div>
    </div>
  );
}
