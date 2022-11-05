import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import PreviousPost from "./PreviousPost";
import RecipeCardItems from "./RecipeCardItems";
import SearchBar from "./SearchBar";
import './SearchBar.scss'

function Home(props){

  const [showBox, setShowBox] = useState(true)
  return(
    <main className="layout">
    <Navigation/>
      <section className="main_side">
      <div className="home_container">
        <SearchBar handleHomeSearch={props.handleHomeSearch}/>
      <div className="recipe_suggestions">
        {showBox &&
        <div class="pantry_ready_or_inspiration" >
        <div className="">
          <p>Looking for recipes you can make today without a trip to the store?</p> 
          <button><Link to="/search_pantry_ingredients">Yes, find pantry ready recipe</Link></button>
          <button onClick={()=>setShowBox(false)}>No, I am looking for inspiration</button>
        </div>
      </div>


        }
        <div class="modal-dialog modal-xl">
          
        </div>

        <RecipeCardItems recipes={props.recipes}/>
      </div>
    </div>
  </section>
  </main>
  )
}
export default Home