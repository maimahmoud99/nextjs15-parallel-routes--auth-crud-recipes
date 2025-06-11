"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-orange-100 to-yellow-50 text-gray-800">
      <main className="text-center flex flex-col items-center gap-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-600">
          🍽️ Welcome to Recipe Manager
        </h1>
        <p className="text-lg sm:text-xl max-w-md text-gray-700">
          Explore delicious recipes, manage your own, and discover new dishes every day.
        </p>

        <Link
          href="/recipes"
          className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
        >
          Browse Recipes
        </Link>
      </main>

     
    </div>
  );
}