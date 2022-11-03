import SearchBar from "./SearchBar";
import './SearchBar.scss'

function Home(){
  return(
    <div className="home_container">
      <SearchBar/>

      <div class="pantry_ready_or_inspiration" >
        <div className="">
          <p>Looking for recipes you can make today without a trip to the store?</p>
          
          <button>Yes, find pantry ready recipe</button>
          <button>No, I am looking for inspiration</button>
    

      </div>
      </div>
  </div>
  )
}
export default Home