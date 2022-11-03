import "./RecipeCard.scss"

function RecipeCard(props){

  return(
    <li>
      <div className="indvidual_card">
        <div className="card" style={{width: "15rem"}}>
            <img src={props.recipe.image} className="card-img-top" alt="..."/>
          <div className="card-body ">
            <h5 className="card-title">{props.recipe.label}</h5>
            <span className="recipe_source">{props.recipe.source}</span>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </li>
  )

}

export default RecipeCard