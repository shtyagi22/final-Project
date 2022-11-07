import "./CheckoutItem.scss"

function CheckoutItem (props) {


  const ingredient = {
    text: "1 medium sized ripe avocado, pitted",
    quantity: 1,
    measure: "<unit>",
    food: "avocado",
    weight: 201,
    foodCategory: "fruit",
    foodId: "food_b0yuze4b1g3afpanijno5abtiu28",
    image: "https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg"
    }


  return (
    <div className="checkout_item_container">
      <div className="each_checkout_item">
        <div >
        <table>
          <tr>
            <td className="ingredient_measurement_and_name">
              <span className="food">{props.ingredient?.food}</span>
              <span className="text">{props.ingredient?.text}</span>
            </td>
            <td className="ingredient_pic"><img alt="food_img" src={props.ingredient?.image}/></td>
            <td className="ingredient_quantity">{Math.round(props.ingredient?.weight)}g</td>
            <td className="delete_item"><i className="fa-solid fa-trash"></i></td>
          </tr>
        </table>

        </div>
      </div>
      
    </div>
  )
}

export default CheckoutItem