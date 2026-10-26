"use client";
import React, { useState } from "react";
import ProductCard from "../common/ProductCard";

export default function ProductList({ data }) {
    let [product, setProduct] = useState(data);
  return (
    <div>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {product.map((obj, index) => {
          return <ProductCard key={index} data={obj} />;
        })}
      </div>
    </div>
  );
}
