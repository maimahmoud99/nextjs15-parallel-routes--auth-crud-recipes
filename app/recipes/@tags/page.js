export const dynamic = 'force-dynamic';
import { FaUtensils } from "react-icons/fa";

export default async function TagsSlot() {
  const res = await fetch("https://dummyjson.com/recipes/tags");
  const data = await res.json();
console.log("Tags data:", data);

  const tags = Array.isArray(data) ? data.slice(0, 4) : [];

  return (
    <div>
  <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2 flex items-center">
        <FaUtensils className="mr-2 text-yellow-500" />
        popular
      </h2>
      <div className="space-y-4">
        {tags.map((tag, i) => (
          <div
            key={i}
            className="bg-yellow-50 p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg">{tag}</h3>
          </div>
        ))}
      </div>
       
    </div>
  );
}

