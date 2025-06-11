import Link from "next/link";
import FeaturedRecipes from "./@featured/page";
import RecentRecipes from "./@recent/page";
import TagsSlot from "./@tags/page";

export default async function RecipesPage() {
  const res = await fetch("http://localhost:3000/api/recipes");
  const data = await res.json();
  const recipes = data.recipes;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <FeaturedRecipes />
        </div>
        <div className="flex-1">
          <RecentRecipes />
        </div>
        <div className="flex-1">
          <TagsSlot />
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link
            href={`/recipes/${recipe.id}`}
            key={recipe.id}
            className="bg-white rounded-xl shadow hover:shadow-md transition p-4"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-2 font-bold text-lg">{recipe.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
