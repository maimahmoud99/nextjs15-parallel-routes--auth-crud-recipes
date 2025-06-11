export async function generateStaticParams() {
  return [1, 2, 3, 4, 5].map((id) => ({ id: id.toString() }));
}

export async function generateMetadata({ params }) {
  return {
    title: ` number of Recipe ${params.id}`,
  };
}

export default async function RecipeDetails({ params }) {
  const res = await fetch(`https://dummyjson.com/recipes/${params.id}`);

  if (!res.ok) {
    throw new Error('not found  Recipe ');
  }

  const recipe = await res.json();

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="w-full rounded-lg mb-4" />
      <p className="mb-2">🍽️  number of servings: {recipe.servings}</p>
      <p className="mb-2">⏱️  preparation Time : {recipe.prepTimeMinutes} Min</p>
      <p className="mb-2">🔥  Cook Time: {recipe.cookTimeMinutes} Min</p>
      <p className="mb-2">🎯 difficulty: {recipe.difficulty}</p>
      <p className="mb-2">🌍 cuisine: {recipe.cuisine}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">ingredients:</h2>
      <ul className="list-disc list-inside space-y-1">
        {recipe.ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">instructions:</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
}