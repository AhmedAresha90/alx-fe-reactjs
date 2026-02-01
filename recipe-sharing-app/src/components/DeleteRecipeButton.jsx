import useRecipeStore from "../store/useRecipeStore";
import { useNavigate } from "react-router-dom";

export default function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        deleteRecipe(id);
        navigate("/");
      }}
    >
      Delete
    </button>
  );
}
