import "./PantryIngredient.scss"

function PantryIngredient(props){
  const click = () =>{
    props.OnCancel(props.id)
  }
  
  return(
    <li>
    <div className="ingredient">
      <span>{props.ingredient}</span>
      <i class="fa-regular fa-circle-xmark" onClick={click}></i>
    </div>
    </li>
  )
}

export default PantryIngredient