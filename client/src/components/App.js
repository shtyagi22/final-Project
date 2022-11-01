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
import CommentItemList from './CommentItemList';
import AddComment from './AddComment';

function App() {

  const comments = 
  [
    {
    id:1,
    comment: {
      image: "https://lh3.googleusercontent.com/a/ALm5wu1_-dgWtl7-p3AMWUcgUpYnJAV_zG0iMe59OOaH=s112-c-rw-v1-e365",
      name: "Erica M.",
      time: "2 years ago",
      rating:4,
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
        <SearchBar/>
        <RecipeCard/>
        <SignUpLogInPage/>
        <Post/>

        <CommentItemList comments={comments}/>

        <AddComment/>
        </section>
      }      
     
    </main>
  );

}

export default App;
