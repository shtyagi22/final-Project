import { useState, useEffect } from 'react';
import './App.scss';
import "./SignUpLogInButton"
import SignUpLogInButton from './SignUpLogInButton';
import SearchBar from './SearchBar';
import RecipeCard from './RecipeCard';
import SignUpLogInPage from './SignUpLogInPage';
import Post from './Post';
import PantryReady from './PantryReady'
import axios from 'axios'
import CommentItem from './CommentItem';
import CommentItemList from './CommentItemList';
import AddComment from './AddComment';
import LoginOptions from './LoginOptions';
import RecipeDetail from './RecipeDetail';
import Feeds from './Feeds';
import RecipeCardItems from './RecipeCardItems';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import PreviousPost from './PreviousPost';
import useLocalStorage from '../hooks/LocalStorageHook';
import Navigation from './Navigation';
import PostAndReplies from './PostAndReplies';
import CheckoutItem from './CheckoutItem';


function App() {

  const [recipes, setRecipes] = useState([]);
  const [searchedRecipeByIngredients, setSearchedRecipeByIngredients] = useState([]);

  const [user,setUser] = useLocalStorage("user",{})

  useEffect(()=>{
    axios.get("/api").then((res)=>{
      // console.log(res.data.hits)
      return res.data.hits
      
    }).then((res)=>{
      setRecipes(res)
  })

  },[])
  
  function searchIngredients(arr_ingrediends) {
    // console.log(arr_ingrediends)

    return axios.put("/api", arr_ingrediends).then((res) => {
      return res.data.hits
    }).then((res)=>{
      // console.log(res)
      setSearchedRecipeByIngredients(res)
    })
  }



  const recipeDescription = {
    name: "Avocado Sashimi",
    recipe_owner: "CALIFORNIA GROWN",
    url: "https://californiagrown.org/recipes/avocado-sashimi/?utm_campaign=yummly&utm_medium=yummly&utm_source=yummly",
    no_ingredients: 7,
    cooking_time: 5,
    calories: 170,
    image: "https://lh3.googleusercontent.com/BOuh1_D9cyTHgNv5g8j3HRwW8BzPvAq3i9WV9xgFvm1hxQ_IlhnvZVGS4aAUPRGaElFzHpV6lQ8XWRPGcluZhM0InX0EUB0oh3vU=w1280-h1280-c-rw-v1-e365",
    description: "With just a couple of avocados and some pantry staples, you can approximate the flavors and textures of creamy, delicate slices of sashimi anytime, even when you have no fresh fish on hand. With a salty-sweet sauce and a dash of spicy shichimi togarashi, this paleo and vegan sashimi is delicious enough for eaters of all stripes.",
    ingredients: ["2 Hass avocados", "2 Tbsp. coconut aminos", "2 tsp. furikake ", "1/4 tsp. shichimi togarashi", "1 tsp. flake sea salt", "2 scallions"]
  }



  const comments =
    [
      {
        id: 1,
        comment: {
          image: "https://lh3.googleusercontent.com/a/ALm5wu1_-dgWtl7-p3AMWUcgUpYnJAV_zG0iMe59OOaH=s112-c-rw-v1-e365",
          name: "Erica M.",
          time: "2 years ago",
          rating: 4.5,
          comment: "I agree with the other post about the dish needing more seasoning. I added additional seasoning but it still didn't do much for the flavor. The topping was also a little dry."
        }
      },
      {
        id: 2,
        comment: {
          image: "https://graph.facebook.com/10156755061204968/picture?height=180&width=180",
          name: "Nicole Wall",
          time: "10 months ago",
          rating: 3,
          comment: "i didn't look anything like the picture i might have done something wrong but it was still good."
        }
      }
    ]

  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "Michelle",
      userImage: "https://graph.facebook.com/10208015133285596/picture?height=180&width=180",
      post: "I’m so proud and lucky to be a native Californian because amazing produce is available at my local grocery store year-round. I didn’t even realize until recently that California grows more than a third of the country’s vegetables and two-thirds of the country’s",
      postImage: "https://lh3.googleusercontent.com/RBFG1uWmfwY6gJEhEdGePV6mjXv4E5vdHhPFuuRsa59PRDtEomGu8WVD8VxGBhgmDE9EwYPWYt1UJIP-w54hC8slMBQI1p0hZtzW=w1280-h1280-c-rw-v1-e365"
    },
    {
      id: 2,
      username: "Michelle",
      userImage: "https://graph.facebook.com/10208015133285596/picture?height=180&width=180",
      post: " made half the recipe and substituted half and half for the heavy cream… also used minced garlic from a jar and it was amazing!!! I will be making this more often for sure and save as a favorite!",
      postImage: "//localhost:8080/1667594125945-images.jpeg"
    }
  ])
  const handleUser = (newUser) => {
    console.log(newUser)

    axios.post('/users', newUser).then((res) => {
      setUser(res.data)
      return res.data
    }).then((data) => {
      console.log("from server", data)
    })

  }


  const handlePostReplies = (reply) => {

    console.log("reply to post ",reply)
    return axios.post('/postComments',reply).then((res)=>{
      console.log("coming from handlePostReplies",res.data);
      return res.data;
    })
  }

  // console.log("user from userState",user)

  const handleComment = (comment) => {
    comment.userId = user.id

    console.log("in handlecomment ",user.id)

    console.log(comment)
    axios.post('/comments', comment).then((res) => {
      return res
    }).then((data) => {
      // console.log("comments data returned from server:", data)
    })

  }
  const handlePosts = (newPost) => {
    
    const file = newPost?.postImage;
    const text = newPost.postMessage

    const formData = new FormData();
    formData.append('text', text)
    formData.append('photo', file)
    formData.append('userId', user.id)
    console.log(formData)

    return axios.post('/posts',formData).then((res)=>{
        return res.data
    }); 
  }
  const handleHomeSearch = (recipesFromSearch) =>{
    setRecipes(recipesFromSearch)
  }

  return (
  
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<>
            <Home  recipes={recipes} handleHomeSearch={handleHomeSearch}/>
            
          </>} />
          <Route path='/login' element={<LoginOptions handleUser={handleUser} />} />
          <Route path='/feeds' element={<Feeds onNewPost={handlePosts} posts={posts} />} />
          <Route path='/signin' element={<SignUpLogInPage handleUser={handleUser} />} />
          <Route path='/search_pantry_ingredients'
            element={<PantryReady searchIngredients={searchIngredients}  recipes={searchedRecipeByIngredients} comments={comments}/>} />
          <Route path='/recipe_details/:id' element={<RecipeDetail
            onComment={handleComment} comments={comments}/>}/>

          <Route path='/posts/:id' element={<PostAndReplies handlePostReplies={handlePostReplies}/>} />
          <Route path='/cart' element={<CheckoutItem/>}/>
        </Routes>
      </BrowserRouter>
    </>

  );

}

export default App;
