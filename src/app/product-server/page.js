
import React, { Suspense } from 'react';
import { getProduct } from '../api-services/productApp';
import ProductList from '../components/productList/ProductList';

async function ProductData() {
  const obj = await getProduct();

  return <ProductList data={obj || []} />;
}

export default function ProductServer() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">
        Product Server
      </h1>

      <Suspense fallback={<p>Loading products...</p>}>
        <ProductData />
      </Suspense>
    </div>
  );
}
