import { useEffect, useState } from "react";
import "./PantryReady.scss"
import PantryIngredientList from "./PantryIngredientList";
import SuggestionList from "./SuggestionList";
import Navigation from "./Navigation";
import useLocalStorage from "../hooks/LocalStorageHook"
import RecipeCardItems from "./RecipeCardItems";
import RecipeDetail from "./RecipeDetail";
import axios from "axios";
function PantryReady(props){

  useEffect(()=>{
    axios.get('/ingredients').then((res)=>{
      console.log("ingredients from server", res.data)
      setIngredients_array(res.data)
    })

  },[])
  const[ingredients_array,setIngredients_array] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [input, setInput] = useState('')
  const [ingredients, setIngredients] = useLocalStorage("ingredients", [])
  const [suggestions, setSuggestions] = useState([])

  const onClickShowIngredients = () => setShowResults(true)

  const handleOnchange = (text) => {
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

  const addIngredient =(ing)=>{

    if(ingredients.find(e=>e.ingredient===ing)){
      setInput("")
      setSuggestions([])
      return;
    }

    const nextId = ingredients.length > 0 ? Math.max(...ingredients.map((i) => i.id)) + 1 : 0;
    const newIgredient = {id:nextId, ingredient:ing}
    setIngredients([...ingredients,newIgredient])
    setInput("")
    setSuggestions([])
    
  }

  const handleIngredientsSearch = () =>{
    props.searchIngredients(ingredients)
    .then((res)=>{
      console.log("RESPONSE FROM SERVER",res)
    }).catch((e)=>{
      console.log(e)
    })
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
  }

  const removeIngredient = (id) =>{
    const newIngredients = [...ingredients].filter(e => e.id !== id)
    setIngredients(newIngredients)
  }

  // console.log(ingredients)
  return(
    <main className="layout">
      <Navigation/>
      <section className="main_side">
        <div className="pantry_ready">
          <section>
            <h1>Cook with what you have</h1>
            <p>Don't want to go to the store? No problem! Enter the ingredients you have on hand, and we'll show you recipes you could make. For best results, enter ingredients, including staples like salt, pepper, and olive oil. The ingredients you add here will be used to make a search in our recipe database to give ideas of delicious recipes to cook.</p>
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
                      <button disabled={ingredients.length === 0} onClick={handleIngredientsSearch}>Search Pantry-Ready Recipes</button>
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
                  <form onSubmit={(event)=>handleSubmit(event)}>
                    <input autoFocus type="text" name="ingInput" value={input} onChange={(event)=>handleOnchange(event.target.value)} placeholder="Enter your ingredients" autocomplete="off"></input>
                    <br/>
                    {/* <button onClick={(event)=>addIngredient(event,input)}>Add</button> */}
                  </form>
                  <button className='btn_close' onClick={()=>setShowResults(false)}><i className="fa-solid fa-xmark"></i></button>
                </div> 
                <div className="suggestions">
                    <SuggestionList suggestedIngredients={suggestions} OnAdd={addIngredient}/>
                  </div>
              </div>
            }
          </section>
          <RecipeCardItems recipes={props.recipes} preventScrollReset={true}/>
        </div>
      </section>
      
       
    </main>
  )
}
export default PantryReady