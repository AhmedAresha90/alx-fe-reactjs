import { useRecipeStore } from "./recipeStore";

export default function FavoritesList() {
  const recipes = useRecipeStore((s) => s.recipes);
  const favorites = useRecipeStore((s) => s.favorites);

  const favRecipes = favorites.map((id) =>
    recipes.find((r) => r.id === id)
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favRecipes.map((r) => (
        <div key={r.id}>
          <h3>{r.title}</h3>
        </div>
      ))}
    </div>
  );
}
