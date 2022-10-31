import { useState } from "react";
import "./PantryReady.scss"
import PantryIngredientList from "./PantryIngredientList";
import SuggestionList from "./SuggestionList";

import useLocalStorage from "../hooks/LocalStorageHook"

function PantryReady(){
  const ingredients_array = [
    {id:1,ingredient:"Rice"},
    {id:2,ingredient:"Apple Juice"},
    {id:3,ingredient:"Orange"},
    {id:4,ingredient:"carrot"},
    {id:5,ingredient:"Navy Beans"},
    {id:6,ingredient:"Beans"},
    {id:7,ingredient:"Basmatic Rice"},
    {id:8,ingredient:"Milk"},
    {id:9,ingredient:"Suasage"},
    {id:10,ingredient:"Beef Sausage"},
    {id:11,ingredient:"Tomato puree"},
    {id:12,ingredient:"Chicken Broth"},
    {id:13,ingredient:"Beef broth"},
    {id:14,ingredient:"Lobster"},
    {id:15,ingredient:"Bread"},
    {id:16,ingredient:"Breadcrumbs"},
    {id:17,ingredient:"Cheese"},
    {id:18,ingredient:"Mozerella Cheese"},
    {id:19,ingredient:"Chedda Cheese"},
    {id:20,ingredient:"Pepperoni"},
    {id:21,ingredient:"Olive oil"},
  ]
  const [showResults, setShowResults] = useState(false)
  const [input, setInput] = useState('')
  const [ingredients, setIngredients] = useLocalStorage("ingredients", [])
  const [suggestions, setSuggestions] = useState([])

  const onClickShowIngredients = () => setShowResults(true)

  const handleOnchange = (event,text) => {
    event.preventDefault()
    let matches = [];
    if(text.length > 0){
      matches = ingredients_array.filter(ing => {
        const regex = new RegExp(`${text}`,"gi")
        return ing.ingredient.match(regex)
      })
    }
    setSuggestions([...matches].slice(0,5));

    console.log(suggestions)
    setInput(text);
  }

  const addIngredient =(event,ing)=>{
    event.preventDefault();
    const nextId = ingredients.length > 0 ? Math.max(...ingredients.map((i) => i.id)) + 1 : 0;
    const newIgredient = {id:nextId, ingredient:ing}
    setIngredients([...ingredients,newIgredient])
    setInput("")
    
  }

  const addIng = (ing) => {
    console.log(ing)
  }

  const removeIngredient = (id) =>{
    const newIngredients = [...ingredients].filter(e => e.id !== id)
    setIngredients(newIngredients)
  }

  // console.log(ingredients)
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
                <input type="text" name="ingInput" value={input} onChange={(event)=>handleOnchange(event,event.target.value)} placeholder="Enter your ingredients"></input>
                <br/>
                {/* <button onClick={(event)=>addIngredient(event,input)}>Add</button> */}
              </form>
              <button className='btn_close' onClick={()=>setShowResults(false)}><i className="fa-solid fa-xmark"></i></button>
            </div> 
            <div className="suggestions">
                <SuggestionList suggestedIngredients={suggestions} OnAdd={addIng}/>
              </div>
          </div>
        }
      </section>
    </div>
  )
}
export default PantryReady