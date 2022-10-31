import { useEffect,useState } from "react";
import "./PantryReady.scss"
import PantryIngredientList from "./PantryIngredientList";

import useLocalStorage from "../hooks/LocalStorageHook"

function PantryReady(){

  
  const [showResults, setShowResults] = useState(false)
  const [input, setInput] = useState('')
  const [ingredients, setIngredients] = useLocalStorage("ingredients", [])
  const [suggestions, setSuggestions] = useState([])

  

  const onClickShowIngredients = () => setShowResults(true)

  const addIngredient =(event,ing)=>{
    event.preventDefault();
    const nextId = ingredients.length > 0 ? Math.max(...ingredients.map((i) => i.id)) + 1 : 0;
    const newIgredient = {id:nextId, ingredient:ing}
    setIngredients([...ingredients,newIgredient])
    setInput("")
    
  }

  const removeIngredient = (id) =>{
    const newIngredients = [...ingredients].filter(e => e.id !== id)
    setIngredients(newIngredients)
  }

  console.log(ingredients)
  return(
    <div className="pantry_ready">
      <section>
        <h1>Cook with what you have</h1>
        <p>Don't want to go to the store? No problem! Enter the ingredients you have on hand, and we'll show you recipes you could make. For best results, enter 10 or more ingredients below, including staples like salt, pepper, and olive oil. The ingredients you add here will sync with your Virtual Pantry on Android. Any changes in one will update the other.</p>
      </section>
      <section className="pantry_search_container">
        {!showResults &&
          <div>
            <div className="search_pantry">
              <div className="pantry_add_icon">
                <i className="fa-solid fa-circle-plus"></i>
              </div>
              <div>
                <form>
                  <input type="text" onClick={onClickShowIngredients} placeholder="Enter your ingredients" ></input>
                </form>
              </div>
            </div>
            <div className="pantry_ingredients">
              <span>YOUR PANTRY INGREDIENTS</span>
              <div className="ingredients">
                <PantryIngredientList ingredients={ingredients} OnCancel={removeIngredient}/>
                <div>
                  <button disabled={ingredients.length === 0}>Search Pantry-Ready Recipes</button>
                </div>
              </div>
            </div>
          </div>
        }

        {
          showResults &&  
                       
          <div className="search_result">
            <div className="search">
              <i className="fa-solid fa-magnifying-glass"></i>
              <form>
                <input type="text" name="ingInput" value={input} onChange={(event)=>setInput(event.target.value)} placeholder="Enter your ingredients"></input>
                <br/>
                <button onClick={(event)=>addIngredient(event,input)}>Add</button>
              </form>
              <button className='btn_close' onClick={()=>setShowResults(false)}><i className="fa-solid fa-xmark"></i></button>
            </div> 
          </div>
        }
      </section>
    </div>
  )
}
export default PantryReady