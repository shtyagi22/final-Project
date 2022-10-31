import "./SearchBar.scss"


function SearchBar(){
  return (
    
    <div className ="searchbar">
      <div className="icon">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <form >
        <input type="text" className="text_input"></input>
      </form>
    </div>
  )
}

export default SearchBar;