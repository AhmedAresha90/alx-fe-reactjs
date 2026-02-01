import create from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  addRecipe: (recipe) =>
    set((s) => ({ recipes: [...s.recipes, recipe] })),

  updateRecipe: (id, updated) =>
    set((s) => ({
      recipes: s.recipes.map((r) =>
        r.id === id ? { ...r, ...updated } : r
      ),
    })),

  deleteRecipe: (id) =>
    set((s) => ({
      recipes: s.recipes.filter((r) => r.id !== id),
    })),

  addFavorite: (recipeId) =>
    set((s) => ({ favorites: [...s.favorites, recipeId] })),

  removeFavorite: (recipeId) =>
    set((s) => ({
      favorites: s.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const rec = recipes.filter((r) =>
      favorites.includes(r.id)
    );
    set({ recommendations: rec });
  },
}));
