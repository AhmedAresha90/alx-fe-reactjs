// RecipeList component
 import { Link } from "react-router-dom";

{recipes.map((recipe) => (
  <li key={recipe.id}>
    <Link to={`/recipe/${recipe.id}`}>
      {recipe.title}
    </Link>
  </li>
))}

  
