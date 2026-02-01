// AddRecipeForm component
 const handleSubmit = (e) => {
  e.preventDefault();
  if (recipe.trim()) {
    addRecipe({
      id: Date.now(),
      title: recipe,
      description: "No description",
    });
    setRecipe("");
  }
};

  
