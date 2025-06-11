export async function GET(req, { params }) {
  const res = await fetch(`https://dummyjson.com/recipes/${params.id}`);
  if (!res.ok) return new Response("Not Found", { status: 404 });
  const data = await res.json();
  return Response.json(data);
}