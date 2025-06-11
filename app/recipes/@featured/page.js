import { FaUtensils } from "react-icons/fa";

export const revalidate = 3600;

export default async function FeaturedRecipes() {
  const res = await fetch("http://localhost:3000/api/recipes");
  const data = await res.json();
  const topRecipes = data.recipes
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2 flex items-center">
        <FaUtensils className="mr-2 text-yellow-500" />
        Most Recent Recipes
      </h2>
      <div className="space-y-4">
        {topRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-blue-50 p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg">{recipe.name}</h3>
            <div className="flex items-center mt-1">
              <div className="text-xl">
                {renderStars(Math.round(recipe.rating))}
              </div>
              <span className="ml-2 text-gray-600">
                ({recipe.rating.toFixed(1)})
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
