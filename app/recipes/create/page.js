"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CreateRecipe() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    prepTimeMinutes: "",
    cookTimeMinutes: "",
    servings: "",
    difficulty: "",
    cuisine: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericFields = ["prepTimeMinutes", "cookTimeMinutes", "servings"];
    const newValue = numericFields.includes(name) ? Number(value) : value;
    setForm((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("must be logged in first");
        setLoading(false);
        return;
      }

      const res = await fetch("/api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("failing to add, try again");

      router.push("/recipes");
    } catch (err) {
      setError(err.message || "unexpected error try again  ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-left"> Add new recipes</h2>
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        {Object.entries(form).map(([key, value]) => (
          <div key={key}>
            <label className="block mb-1 font-medium">
              {getArabicLabel(key)}
            </label>
            <input
              type={isNumberField(key) ? "number" : "text"}
              name={key}
              value={value}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
        ))}

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 w-full"
        >
          {loading ? "loading... " : "add"}
        </button>
      </form>
    </div>
  );
}

function getArabicLabel(key) {
  const labels = {
    name: " recipe name",
    ingredients: "ingredients",
    instructions: "preparation method ",
    prepTimeMinutes: " time of preparation (min)",
    cookTimeMinutes: "time of cooking  (min)",
    servings: " number of servings",
    difficulty: "difficulty",
    cuisine: "cuisine ",
  };
  return labels[key] || key;
}

function isNumberField(key) {
  return ["prepTimeMinutes", "cookTimeMinutes", "servings"].includes(key);
}
