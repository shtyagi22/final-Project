import "./RecipeIngredients.scss"
function RecipeIngredients (props){

  const recipeIngredients = props.ingredients.map((e,index) => {
    return(
      <li key={index}>
      <div className="recipe_ingredient">
        <i class="fa-solid fa-circle-plus"></i>
        <span>{e}</span>
      </div>
    </li>
    )

  })

  return(

    <ul>
      {recipeIngredients}
    </ul>

  )
}

export default RecipeIngredients;