import { FC } from "react";
import { Metadata } from "next";
import { getRecipeById } from "@/service/api.service";
import { IRecipes } from "@/models/recipes/IRecipes";
import RecipeDetailPage from "@/components/recipe/RecipeDetailPage";

type Props = {
    params: { id: string };
    recipes: IRecipes;
};

export const generateMetadata = ({params}: Props): Metadata => {
    return {
        title: `Recipe page title ${params.id}`,
    };
}

const OneRecipePage: FC<Props> = async ({ params }) => {
    try {
        const selectedRecipe: IRecipes = await getRecipeById(+params.id);

        console.log("selectedRecipe", selectedRecipe);
        return (
            <div>
                {selectedRecipe ? (
                    <RecipeDetailPage selectedRecipe={selectedRecipe} />
                ) : (
                    <p>No recipes found.</p>
                )}
            </div>
        );
    } catch (error) {
        console.error("Error fetching recipe:", error);
        return <p>Failed to load the recipe. Please try again later.</p>;
    }
};

export default OneRecipePage;