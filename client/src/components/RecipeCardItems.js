import RecipeCard from "./RecipeCard"
import "./RecipeCard.scss"

function RecipeCardItems(props){
 
  const recipeCardItems = props.recipes.map((e, index) => {
 
    return <RecipeCard key={index} recipe={e.recipe}/>
    
  })
  return (
    <ul className="recipe_card_ul">
      {recipeCardItems}
    </ul>
  )
}
export default RecipeCardItems