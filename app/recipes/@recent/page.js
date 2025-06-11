import { Suspense } from "react";
import { FaUtensils } from "react-icons/fa";

export default async function RecentRecipes() {
  const res = await fetch("http://localhost:3000/api/recipes");
  const data = await res.json();
  const recent = data.recipes.slice(-3).reverse();

  return (
    <div>
     <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2 flex items-center">
        <FaUtensils className="mr-2 text-yellow-500" />
        Recent Recipes
      </h2>
     <div className="space-y-4">
        {recent.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-yellow-50 p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg">{recipe.name}</h3>
            <p className="text-sm text-gray-600"> number of servings: {recipe.servings}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
