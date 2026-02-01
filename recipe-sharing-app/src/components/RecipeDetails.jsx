import { useParams } from "react-router-dom";
import useRecipeStore from "../store/useRecipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

export default function RecipeDetails() {
  const addFavorite = useRecipeStore((s) => s.addFavorite);

<button onClick={() => addFavorite(recipe.id)}>
  Add to Favorites
</button>
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton id={recipe.id} />
    </div>
  );
}
