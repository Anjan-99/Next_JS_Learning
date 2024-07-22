import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function getRecipe(id) {
  try {
    const response = await fetch(`https://dummyjson.com/recipe/${id}`);
    const recipe = await response.json();
    return recipe;
  } catch (error) {
    throw new Error("Failed to fetch recipe");
  }
}

export default async function RecipeDetails({ searchParams }) {
  const recipe = await getRecipe(searchParams.id);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <CardContent>
          <img className="rounded mt-5" src={recipe.image} alt={recipe.name} />
          <h3 className="text-4xl mt-5 mb-5 font-bold">{recipe.name}</h3>
          <p className="text-gray-500">{recipe.category}</p>
          <p> Rating : {recipe.rating}</p>
          <h3 className="text-2xl font-bold mt-5 mb-5">Instructions</h3>
          <p>{recipe.instructions}</p>
          <h3 className="text-2xl font-bold mt-5 mb-5">Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <Button asChild className="mt-5">
            <Link href="/recipe-list">Back to Recipes</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
