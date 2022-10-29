import "./SearchBar.scss"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

  // const element = <FontAwesomeIcon icon="magnifying-glass" />

function SearchBar(){
  return (
    
    <div className ="searchbar">
      <div className="icon">
      <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <form >
        <input type="text" placeholder="Search recipes"></input>
      </form>
    </div>
  )
}

export default SearchBar;