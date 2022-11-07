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
          <Route path='/feeds' element={<Feeds onNewPost={handlePosts} />} />
          <Route path='/signin' element={<SignUpLogInPage handleUser={handleUser} />} />
          <Route path='/search_pantry_ingredients'
            element={<PantryReady searchIngredients={searchIngredients}  recipes={searchedRecipeByIngredients}/>} />
          <Route path='/recipe_details/:id' element={<RecipeDetail
            onComment={handleComment}/>}/>

          <Route path='/posts/:id' element={<PostAndReplies handlePostReplies={handlePostReplies}/>} />
          <Route path='/cart' element={<CheckoutItem/>}/>
        </Routes>
      </BrowserRouter>
    </>

  );

}

export default App;
