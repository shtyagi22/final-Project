import PantryIngredient from "./PantryIngredient"
import "./PantryIngredient.scss"

function PantryIngredientList(props){


  const pantryIngredientList = props.ingredients.map(e=> 
  <PantryIngredient key={e.id} OnCancel={props.OnCancel} 
  ingredient={e.ingredient} id={e.id}
  />)

  return(
    <ul className="pantry_ingredients_ul">
      {pantryIngredientList}
    </ul>
  )
  
}
export default PantryIngredientList;