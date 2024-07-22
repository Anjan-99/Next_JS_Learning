import RecipeList from "@/components/recipe-list";

async function getRecipes() {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const recipes = await response.json();
    return recipes.recipes;
  } catch (error) {
    throw new Error("Failed to fetch recipes");
  }
}

export default async function Recipes() {
  const recipes = await getRecipes();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold mb-5">Recipes</h1>
      <RecipeList recipes={recipes} />
    </main>
  );
}
