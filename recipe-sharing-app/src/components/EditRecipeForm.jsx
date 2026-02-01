import { useState } from "react";
import useRecipeStore from "../store/useRecipeStore";

export default function EditRecipeForm({ recipe }) {
  const [title, setTitle] = useState(recipe.title);
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);

  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => updateRecipe(recipe.id, { title })}>
        Save
      </button>
    </div>
  );
}
