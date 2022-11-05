import axios from "axios";
import { useEffect, useState } from "react";
import "./SearchBar.scss"


function SearchBar(){

  const [strInput,setStrInput] = useState("")

  const handleSubmit =(event)=>{
    event.preventDefault();
    
    axios.put('/recipe', {searchParam:strInput}).then((res)=>{
      console.log(res.data)
    })
  }

  return (
    
    <div className ="searchbar">
      <div className="icon">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <form onSubmit={(event)=>handleSubmit(event)}>
        <input type="text" autoFocus className="text_input" onChange={e => setStrInput(e.target.value)}></input>
      </form>
    </div>
  )
}

export default SearchBar;