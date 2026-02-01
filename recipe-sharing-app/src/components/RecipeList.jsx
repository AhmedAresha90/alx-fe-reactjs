// RecipeList component
import { useRecipeStore } from "./recipeStore";

export default function RecipeList() {
  const recipes = useRecipeStore((s) => s.filteredRecipes);

  return (
    <div>
      {recipes.map((r) => (
        <div key={r.id}>
          <h3>{r.title}</h3>
        </div>
      ))}
    </div>
  );
}

  
