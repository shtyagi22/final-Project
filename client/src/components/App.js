import { useState } from 'react';
import './App.scss';
import "./SignUpLogInButton"
import SignUpLogInButton from './SignUpLogInButton';
import SearchBar from './SearchBar';
import RecipeCard from './RecipeCard';
import SignUpLogInPage from './SignUpLogInPage';
import Post from './Post';
import PantryReady from './PantryReady'

import CommentItem from './CommentItem';

function App() {

  const comment = {
    image: "https://graph.facebook.com/10211597131705405/picture?height=180&width=180",
    name: "Erica M.",
    time: "2 years ago",
    rating:2.7,
    comment: "I agree with the other post about the dish needing more seasoning. I added additional seasoning but it still didn't do much for the flavor. The topping was also a little dry."
  }
  
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
        <SearchBar/>
        <RecipeCard/>
        <SignUpLogInPage/>
        <Post/>

        <CommentItem comment={comment}/>
        </section>
      }      
     
    </main>
  );

}

export default App;
