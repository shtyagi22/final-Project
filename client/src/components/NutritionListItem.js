
import NutritionItem from "./NutritionItem"

function NutritionListItem(props){

  const nutritionListItem = props.nutrients.map((e,index)=>{
    return <NutritionItem nutrient={e} key={index}/>
  })

  return(
    <ul className="nutrients_list">
      {nutritionListItem}
    </ul>

  )

}
export default NutritionListItem