"use client";

import { useState } from "react";

export default function BannerSection() {
  let [modal, setModal] = useState(false);
  const openEnquireModal = () => {};
  return (
    <>
      <div
        className={`w-[350px] duration-300 fixed  ${modal ? "top-[50%]" : "top-[1000px]"} left-[50%] transform -translate-x-1/2 -translate-y-1/2`}
      >
        <form className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold relative">
            Enquire Now
            <button
              className="absolute top-0 right-0 text-gray-500 hover:text-gray-700 cursor-pointer"
              onClick={() => setModal(false)}
            >
              X
            </button>
          </h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Enquire Now
          </button>
        </form>
      </div>

      <section
        className="h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://www.travelaroundtheworldblog.com/wp-content/uploads/2025/10/Worlds-of-Adventure-Tickets-in-Dubai-1024x559.jpg")',
        }}
      >
        <div className="flex h-full flex-col items-center justify-center bg-black/40">
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            Worlds of Adventure
          </h1>

          <p className="mt-4 text-white md:text-2xl">
            Lorem ipsum dolor sit amet.
          </p>

          <button
            className="mt-6 rounded bg-red-500 px-4 py-2 text-white"
            onClick={() => setModal(true)}
          >
            Enquire Now
          </button>
        </div>
      </section>
    </>
  );
}
