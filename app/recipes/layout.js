// export default function RecipesLayout({ children }) {
//   return <>{children}</>;
// }
export default function RecipesLayout({ children, featured, tags, recent }) {
  return (
    <>
      {featured}
      {tags}
      {recent}
      {children}
    </>
  );
}
