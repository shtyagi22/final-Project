import { useState } from 'react';
import './App.scss';
import "./SignUpLogInButton"
import SignUpLogInButton from './SignUpLogInButton';
import SearchBar from './SearchBar';
import RecipeCard from './RecipeCard';
import SignUpLogInPage from './SignUpLogInPage';
import Post from './Post';
import PantryReady from './PantryReady'
import PantryIngredientList from './PantryIngredientList';

function App() {

  const ingredients = [
    {id:1, ingredient:"Apple Juice"},
    {id:2, ingredient:"Carrots"},
    {id:3, ingredient:"Milk"}
  ]
  
  const [nav,setNav] = useState('');

  const navigate = (navigation) =>{
    setNav(navigation)
  }

  console.log(nav)
  return (
    <main className="layout">
      <section className="sidebar">
      <img
            className="sidebar--centered"
            src="images/food.png"
            alt="Interview Scheduler"
          />
      <SignUpLogInButton/>
      <div className="sidebar--centered pantry" onClick={()=>navigate("PANTRY")}>
        Pantry Ready Recipe
      </div>
      </section>
      {nav === "PANTRY" && 
        <section className="schedule_pantry">
          <PantryReady/> 
        </section>
      }
      {nav === "" && 
      <section className="schedule">
        <PantryIngredientList ingredients={ingredients}/>
        <SearchBar/>
        <RecipeCard/>
        <SignUpLogInPage/>
        <Post/>
        </section>
      }      
     
    </main>
  );

}

export default App;
