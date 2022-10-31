import Suggestion from "./Suggestion"

function SuggestionList(props){

  const suggestionList = props.suggestedIngredients.map(e =>{
     return <Suggestion ingredient={e.ingredient}/> 
  })

  return(
    <ul>
      {suggestionList}
    </ul>
  )
}

export default SuggestionList