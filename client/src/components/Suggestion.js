import "./Suggestion.scss"

function Suggestion(props){
 return(
  <li>
    <div className="suggested_ingredient">
      <i class="fa-solid fa-circle-plus" onClick={props.OnAdd}></i>
      <span>{props.ingredient}</span>
    </div>
  </li>
 )
}

export default Suggestion