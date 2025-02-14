import {FC} from "react";
import {Metadata} from "next";

type Props = {
    params: { id: string }
}

export const generateMetadata = ({params}: Props): Metadata => {
    return {
        title: `Recipe page title ${params.id}`,
    };
}

const RecipePage: FC<Props> = ({params}) => {
    return (
        <div>
            Recipes page content {params.id}
        </div>
    );
};

export default RecipePage;