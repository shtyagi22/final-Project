import { useState,useEffect } from 'react';
import './App.scss';
import "./SignUpLogInButton"
import SignUpLogInButton from './SignUpLogInButton';
import SearchBar from './SearchBar';
import RecipeCard from './RecipeCard';
import SignUpLogInPage from './SignUpLogInPage';
import Post from './Post';
import PantryReady from './PantryReady'

import CommentItem from './CommentItem';
import CommentItemList from './CommentItemList';
import AddComment from './AddComment';
import jwt_decode from 'jwt-decode'
import RecipeDetail from './RecipeDetail';

function App() {

  const handleCallbackResponse =(response) =>{
    console.log("credential", response.credential)
    const userObject = jwt_decode(response.credential);
    console.log(userObject)
  }

  useEffect(()=>{
    /* global google */
    google.accounts.id.initialize({
      client_id:"354838477230-p6j3da9j9fl49g4r1om2qn8l51ierbmh.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })
    
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme:"outline", size:"large"}
    )
  },[])

  const recipeDescription = {
    name: "Avocado Sashimi",
    recipe_owner:"CALIFORNIA GROWN",
    url:"https://californiagrown.org/recipes/avocado-sashimi/?utm_campaign=yummly&utm_medium=yummly&utm_source=yummly",
    no_ingredients: 7,
    cooking_time: 5,
    calories: 170,
    image: "https://lh3.googleusercontent.com/BOuh1_D9cyTHgNv5g8j3HRwW8BzPvAq3i9WV9xgFvm1hxQ_IlhnvZVGS4aAUPRGaElFzHpV6lQ8XWRPGcluZhM0InX0EUB0oh3vU=w1280-h1280-c-rw-v1-e365",
    description: "With just a couple of avocados and some pantry staples, you can approximate the flavors and textures of creamy, delicate slices of sashimi anytime, even when you have no fresh fish on hand. With a salty-sweet sauce and a dash of spicy shichimi togarashi, this paleo and vegan sashimi is delicious enough for eaters of all stripes.",
    ingredients: ["2 Hass avocados","2 Tbsp. coconut aminos","2 tsp. furikake ","1/4 tsp. shichimi togarashi","1 tsp. flake sea salt","2 scallions"]
  }



  const comments = 
  [
    {
    id:1,
    comment: {
      image: "https://lh3.googleusercontent.com/a/ALm5wu1_-dgWtl7-p3AMWUcgUpYnJAV_zG0iMe59OOaH=s112-c-rw-v1-e365",
      name: "Erica M.",
      time: "2 years ago",
      rating:4.5,
      comment: "I agree with the other post about the dish needing more seasoning. I added additional seasoning but it still didn't do much for the flavor. The topping was also a little dry."
    }
  },
  {
    id:2,
    comment: {
      image: "https://graph.facebook.com/10156755061204968/picture?height=180&width=180",
      name: "Nicole Wall",
      time: "10 months ago",
      rating:3,
      comment: "i didn't look anything like the picture i might have done something wrong but it was still good."
    }
  }
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
        {/* <SearchBar/>
        <RecipeCard/>
        <SignUpLogInPage/>
        <Post/> */}

        <RecipeDetail recipe={recipeDescription}/>


        <CommentItemList comments={comments}/>
        <AddComment/>
        <div className='App'>
          <div id='signInDiv'></div>
        </div>
        </section>
      }      
     
    </main>
  );

}

export default App;
