import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

export default function EditRecipeForm({ recipe }) {
  const [title, setTitle] = useState(recipe.title);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (event) => {
    event.preventDefault();

    updateRecipe(recipe.id, { title });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
}
