
import React from "react";
import { notFound } from "next/navigation";
import ProductDetailsData from "@/app/components/productList/ProductDetails";
import { getProductById } from "../../api-services/productApp";

export default async function ProductDetail({ params }) {
  const { psid } = await params;

  const data = await getProductById(psid);

  if (!data) {
    notFound();
  }

  return (
    <div>
      <ProductDetailsData data={data} />
    </div>
  );
}
