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
        <div >
          <p>Looking for recipes you can make today without a trip to the store?</p> 
          <div className="button_link_align">
            <Link to="/search_pantry_ingredients">Yes, find pantry ready recipe</Link>
          <button onClick={()=>setShowBox(false)}>No, I am looking for inspiration</button>
          </div>
        </div>
      </div>


        }

          
{/* 

   
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
lakdnknlnkvnldnalnvldnlladnldnmvknmdmnlkvndlnandlnavnalnnladn      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}


        <RecipeCardItems recipes={props.recipes}/>
      </div>
    </div>
  </section>
  </main>
  )
}
export default Home