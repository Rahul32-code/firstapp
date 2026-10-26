
import Link from "next/link";

export default function ProductCard({ data }) {
  if (!data) {
    return <p>No product data available.</p>;
  }

  const { id, title, description, price, thumbnail } = data;

  return (
    <figure className="bg-white rounded-lg shadow-md p-4">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-48 object-cover rounded"
      />

      <h2 className="text-xl font-bold py-2">
        {title} - ${price}
      </h2>

      <p className="text-gray-600 py-2">
        {description}
      </p>

      <Link
        href={`/product-server/${id}`}
        className="inline-block bg-red-500 text-white px-4 py-2 rounded"
      >
        Read More
      </Link>
    </figure>
  );
}
