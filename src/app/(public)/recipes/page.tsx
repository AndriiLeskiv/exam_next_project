import RecipesContainer from "@/components/recipe/RecipesContainer";
import {Suspense} from "react";

const RecipesPage = () => {
    return (
        <div>
            <Suspense fallback={<p>Loading users...</p>}>
                <RecipesContainer/>
            </Suspense>
        </div>
    );
};

export default RecipesPage;