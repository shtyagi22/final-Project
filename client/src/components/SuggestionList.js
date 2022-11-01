import Suggestion from "./Suggestion"
import "./Suggestion.scss"

function SuggestionList(props){

  const suggestionList = props.suggestedIngredients.map(e =>{
     return <Suggestion key={e.id} ingredient={e.ingredient} OnAdd={props.OnAdd}/> 
  })

  return(
    <ul class="suggested_ingredient_ul">
      {suggestionList}
    </ul>
  )
}

export default SuggestionList