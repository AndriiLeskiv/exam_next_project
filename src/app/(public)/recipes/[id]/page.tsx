import { Metadata } from "next";
import { getRecipeById } from "@/service/api.service";
import { IRecipes } from "@/models/recipes/IRecipes";
import RecipeDetailPage from "@/components/recipe/RecipeDetailPage";

// Типізація параметрів як промісу
export type ParamsType = Promise<{ id: string }>;

// Генерація метаданих для сторінки рецепта
export const generateMetadata = async ({ params }: { params: ParamsType }): Promise<Metadata> => {
    const { id } = await params;
    return {
        title: `User page title ${id}`,
    };
};

// Головний компонент сторінки рецепта
export default async function OneRecipePage(props: { params: ParamsType }) {
    const { id } = await props.params;
    const selectedRecipe: IRecipes | null = await getRecipeById(+id);

    if (!selectedRecipe) {
        return <p>No recipes found.</p>;
    }

    return (
        <div>
            <RecipeDetailPage selectedRecipe={selectedRecipe} />
        </div>
    );
}
