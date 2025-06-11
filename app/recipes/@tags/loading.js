export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="h-6 bg-green-100 rounded w-1/3 mb-4"></div>
      <div className="flex flex-wrap gap-2">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-6 w-20 bg-green-200 rounded-full"
          ></div>
        ))}
      </div>
    </div>
  );
}