
import React from "react";

export default function ProductDetailsData({ data }) {
  if (!data) {
    return (
      <p className="p-6 text-center text-gray-500">
        Product details not available.
      </p>
    );
  }

  const {
    title,
    price,
    description,
    category,
    thumbnail,
    rating,
    stock,
    images,
  } = data;

  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="max-w-md lg:max-w-lg mx-auto">
            <img
              className="w-full rounded-lg"
              src={images?.[0] || thumbnail}
              alt={title}
            />
          </div>

          <div className="mt-6 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {title}
            </h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400 capitalize">
              {category}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                ${price}
              </p>

              <p className="text-yellow-500">
                ★ {rating ?? "N/A"} / 5
              </p>
            </div>

            <p className="mt-6 text-gray-600 dark:text-gray-400">
              {description}
            </p>

            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              {stock > 0 ? `${stock} items in stock` : "Out of stock"}
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <button
                type="button"
                className="flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
              >
                ♡ Add to favorites
              </button>

              <button
                type="button"
                className="rounded-lg bg-blue-700 px-5 py-3 text-sm font-medium text-white hover:bg-blue-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
