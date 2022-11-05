import Navigation from "./Navigation";
import PreviousPost from "./PreviousPost";
import RecipeCardItems from "./RecipeCardItems";
import SearchBar from "./SearchBar";
import './SearchBar.scss'

function Home(props){
  return(
    <main className="layout">
    <Navigation/>
      <section className="main_side">
      <div className="home_container">
        <SearchBar/>
      <div className="recipe_suggestions">
        <div class="pantry_ready_or_inspiration" >
          <div className="">
            <p>Looking for recipes you can make today without a trip to the store?</p> 
            <button>Yes, find pantry ready recipe</button>
            <button>No, I am looking for inspiration</button>
          </div>
        </div>
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