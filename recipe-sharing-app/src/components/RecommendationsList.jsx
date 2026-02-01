import { useRecipeStore } from "./recipeStore";

export default function RecommendationsList() {
  const recommendations = useRecipeStore((s) => s.recommendations);
  const generate = useRecipeStore((s) => s.generateRecommendations);

  return (
    <div>
      <h2>Recommended</h2>
      <button onClick={generate}>Generate</button>

      {recommendations.map((r) => (
        <div key={r.id}>
          <h3>{r.title}</h3>
        </div>
      ))}
    </div>
  );
}
