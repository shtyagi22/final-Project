import "./RecipeDetail.scss"
import RecipeIngredients from "./RecipeIngredients"

function RecipeDetail(props){
  return(
    <div className="recipe_detail_container">
      <header>
        <div className="header_container">
          <div className="left_side_overview">
            <span className="recipe_name">{props.recipe.name}</span>
            <span className="recipe_owner">{props.recipe.recipe_owner}</span>
            <div className="details_calories_cooktime">
              <div className="div_no_ing">
                <span className="no_ing">{props.recipe.no_ingredients}</span>
                <span>Ingredients</span>
              </div>
              <div className="div_time">
                <span className="time">{props.recipe.cooking_time}</span>
                <span>Minutes</span>
              </div>
              <div className="div_cal">
                <span className="cal">{props.recipe.calories}</span>
                <span>calories</span>
              </div>
            </div>
            <div>
              <a href={props.recipe.url}>Read Direction</a>
            </div>
          </div>
          <div className="right_side_picture">
            <img alt="food_pic" src={props.recipe.image}/>
          </div>
        </div>
      </header>
      <main>
        
        <div className="recipe_description">
        <span>Description</span>
        <p>{props.recipe.description}</p>
        </div>
        <div className="recipe_ingredients">
        <span>Ingredients</span>
        <RecipeIngredients ingredients={props.recipe.ingredients}/>
        </div>
        <div className="add_to_shopping_cart">

        </div>
        <div className="recipe_nutrition">

        </div>
        <div className="recipe_reviews">

        </div>
        
      </main>
      <footer>
        <div className="related_recipe">

        </div>
        <div className="more_recipes_from_this_cook">

        </div>
      </footer>
    </div>
  )
}

export default RecipeDetail