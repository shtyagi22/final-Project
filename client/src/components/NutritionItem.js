import "./NutritionItem.scss"

function NutritionItem(props){
  return(
    <li>
      <div className="nutrition">
          <span>{props.nutrient.item}</span>
          <span>{Math.round(props.nutrient.quantity)} {props.nutrient.unit}</span>
          
      </div>
    </li>
  )
}

export default NutritionItem;