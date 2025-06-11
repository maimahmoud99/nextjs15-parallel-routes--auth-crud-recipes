export default function Loading() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-6 bg-yellow-100 rounded w-1/3"></div>
      {[...Array(3)].map((_, i) => (
        <div key={i} className="bg-yellow-50 p-4 rounded-lg">
          <div className="h-5 bg-yellow-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-yellow-100 rounded w-1/4"></div>
        </div>
      ))}
    </div>
  );
}
