import React from "react";

export default function Loading() {
  return (
    <main className="flex flex-1 items-center justify-center bg-slate-50 px-6 py-20">
      <section
        aria-live="polite"
        aria-busy="true"
        className="flex w-full max-w-md flex-col items-center rounded-2xl border border-slate-200 bg-white px-8 py-12 text-center shadow-sm sm:px-12"
      >
        <div className="relative mb-7 flex h-16 w-16 items-center justify-center">
          <span className="absolute inset-0 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
        </div>
        <h1 className="text-xl font-semibold tracking-tight text-slate-900">
          Getting things ready
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Please wait a moment while we load this page.
        </p>
        <div className="mt-8 h-1.5 w-40 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-indigo-600" />
        </div>
      </section>
    </main>
  );
}