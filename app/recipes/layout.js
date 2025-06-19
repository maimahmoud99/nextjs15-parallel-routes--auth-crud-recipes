export default function RecipesLayout({
  children,
  featured,
  tags,
  recent,
}: {
  children: React.ReactNode;
  featured: React.ReactNode;
  tags: React.ReactNode;
  recent: React.ReactNode;
}) {
  return (
    <div>
      {featured}
      {tags}
      {recent}
      {children}
    </div>
  );
}
