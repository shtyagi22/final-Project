import { useEffect,useState } from "react";
import "./PantryReady.scss"

function PantryReady(){

  const [items, setItems] = useState([]);
  const [inVal, setInVal] = useState('');
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
     setItems(items);
    }
  }, []);

  const handleInput = () =>{
    console.log(inVal)
  }

  const onClick = () => setShowResults(true)
  console.log(showResults)

  return(
    <div className="pantry_ready">
      <section>
        <h1>Cook with what you have</h1>
        <p>Don't want to go to the store? No problem! Enter the ingredients you have on hand, and we'll show you recipes you could make. For best results, enter 10 or more ingredients below, including staples like salt, pepper, and olive oil. The ingredients you add here will sync with your Virtual Pantry on Android. Any changes in one will update the other.</p>
      </section>
      <section className="pantry_search_container">
        {!showResults &&
          <section>
            <div className="search_pantry">
              <div className="pantry_add_icon" onClick={handleInput}>
                <i className="fa-solid fa-circle-plus"></i>
              </div>
              <div>
                <form>
                  <input type="text" onClick={onClick}></input>
                </form>
              </div>
            </div>
            <div className="pantry_ingredients">
              
            </div>
          </section>
        }

        {
          showResults &&  
                       
          <div className="search_result">
            <div className="search">
              <i className="fa-solid fa-magnifying-glass"></i>
              <form>
                <input type="text" onChange={(event)=>setInVal(event.target.value)} placeholder="Enter your ingredients"></input>
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