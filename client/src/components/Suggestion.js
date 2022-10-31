import "./Suggestion.scss"

function Suggestion(props){

  const click = () => {
    props.OnAdd(props.ingredient)
  }
 return(
  <li>
    <div className="suggested_ingredient" onClick={click}>
      <i class="fa-solid fa-circle-plus"></i>
      <span>{props.ingredient}</span>
    </div>
  </li>
 )
}

export default Suggestion