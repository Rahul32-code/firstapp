"use client";
import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080810] px-5 text-white">

      {/* Background glow */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-purple-600/30 blur-[120px]" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-pink-600/20 blur-[120px]" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-3xl text-center">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.5em] text-purple-300">
          Lost in space
        </p>

        <h1 className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-8xl font-black tracking-tighter text-transparent sm:text-[150px]">
          404
        </h1>

        <h2 className="mt-2 text-3xl font-bold sm:text-5xl">
          Oops! Page not found
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-gray-400 sm:text-lg">
          The page you are looking for has disappeared into the digital
          universe. Let’s get you back on track.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3.5 font-semibold shadow-lg shadow-purple-500/25 transition duration-300 hover:-translate-y-1 hover:shadow-pink-500/40"
          >
            ← Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="rounded-full border border-white/15 bg-white/5 px-8 py-3.5 font-semibold backdrop-blur-lg transition hover:border-purple-400/60 hover:bg-white/10"
          >
            Go Back
          </button>
        </div>

        <div className="mx-auto mt-12 h-px w-32 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

        <p className="mt-5 text-xs tracking-[0.3em] text-gray-600">
          ERROR 404 · PAGE NOT FOUND
        </p>
      </div>
    </section>
  );
}
