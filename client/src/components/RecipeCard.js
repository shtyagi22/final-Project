import "./RecipeCard.scss"
import {Outlet,Link} from 'react-router-dom'

function RecipeCard(props){

  return(
    <li className="recipe_list_item">
      <Link to={`/recipe_details/${props.recipe.uri.substring(51)}`} preventScrollReset={true}>
      <div className="indvidual_card">
        <div className="card" style={{width: "15rem"}}>
          <img src={props.recipe.image} className="card-img-top" alt="..."/>
          <div className="card-body ">
            <h5 className="card-title">{props.recipe.label}</h5>
            <div className="calories_on_right">
              <div className="cusine_type_dish">
                <span className="cuisine_type">{props.recipe?.cuisineType[0]}</span>
                <span>{props.recipe?.mealType[0]}</span>
                <span>{props.recipe?.dishType[0]}</span>
              </div>
              <div className="calories_per_recipe">
                <span>{Math.round(props.recipe?.calories)}</span>
                <span>kcal</span>
              </div>
            </div>
            
            <p className="card-text"></p>
          </div>
        </div>
      </div>
      </Link>
    </li>
  )

}

export default RecipeCard