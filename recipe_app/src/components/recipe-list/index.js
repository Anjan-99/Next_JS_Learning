import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RecipeList({ recipes }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-3 grid grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <Card key={recipe.id}>
            <CardContent>
              <img
                className="rounded mt-5"
                src={recipe.image}
                alt={recipe.name}
              />
              <h3 className="text-xl mt-5 font-bold">{recipe.name}</h3>
              <p className="text-gray-500">{recipe.category}</p>

              <p>{recipe.rating}</p>
              <p>{recipe.description}</p>
              <Button asChild className="mt-5">
                <Link href={`/recipe-list/details?id=${recipe.id}`}>View Recipe</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
