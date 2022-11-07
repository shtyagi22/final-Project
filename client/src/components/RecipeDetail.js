import "./RecipeDetail.scss"
import RecipeIngredients from "./RecipeIngredients"
import CommentItemList from "./CommentItemList"
import AddComment from "./AddComment"
import {useParams} from 'react-router-dom'
import Navigation from "./Navigation"
import { useEffect, useState } from "react"
import axios from "axios"

import ShareLink from 'react-twitter-share-link'
import ShareLinkF from 'react-facebook-share-link'
import NutritionItem from "./NutritionItem"
import NutritionListItem from "./NutritionListItem"

function RecipeDetail(props){

 const [recipe, setRecipe] = useState({})
 const [comments, setComments] = useState([])

  const user= JSON.parse(localStorage.getItem("user"))
  
  let {id} = useParams()
  useEffect(()=>{
    Promise.all([
      axios.get(`/recipe/${id}`),
      axios.get(`/comments/${id}`)
    ])
    .then((all)=>{
      console.log("inside useeffect",all[1].data.hits)
      setRecipe(all[0].data.hits[0].recipe)
      setComments(all[1].data.reverse())
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  const nutrients = ['Sodium','Fat','Protein','Carbs', 'Fiber', 'Sugar','Cholesterol']

  let quantityOfNutrients = [];
  
  for(const item of nutrients){
    for (const key in recipe.totalNutrients){
      if(recipe.totalNutrients[key].label === item){
        const nutrientsFromRecipe ={item:"",quantity:0, unit:""}
        nutrientsFromRecipe.item = item
        nutrientsFromRecipe.quantity = recipe.totalNutrients[key].quantity
        nutrientsFromRecipe.unit = recipe.totalNutrients[key].unit
        quantityOfNutrients.push(nutrientsFromRecipe)
          
      }
    }
  }

  console.log(quantityOfNutrients)

  // useEffect(()=>{
  //   axios.get(`/comments/${id}`).then((res)=>{
  //     return res
  //   })
  // },[])



  // const recipe = props.recipes.find((e)=> e.recipe.uri.substring(51)===id).recipe
  // const recipec = props.recipes.find((e)=> e.recipe.uri.substring(51)===id)
  // console.log("props things",recipec)
  // console.log('state things', recipeI)

  const updateComments =(comment) =>{
   const newcomment = {id: 14,
    comment_text: comment.comment,
    rating: comment.rating,
    created_at:Date.now(),
    api_recipe: comment.recipeId,
    user_id: user.id,
    fullname: user.fullname,
    email: user.email,
    password: null,
    image: user.image
  }

 

    setComments([newcomment,...comments])
  }
    return(
   
      <main className="layout">
        <Navigation/>
        <section className="main_side">
          <div className="recipe_detail_container">
            
            <header>
              <div className="header_container">
                <div className="left_side_overview">
                  <span className="recipe_name">{recipe.label}</span>
                  <span className="recipe_owner">



                  
                  </span>
                  <div className="details_calories_cooktime">
                    <div className="div_no_ing">
                      <span className="no_ing">{recipe.ingredientLines?.length}</span>
                      <span>Ingredients</span>
                    </div>
                    <div className="div_time">
                      <span className="time">{recipe.totalTime}</span>
                      <span>Minutes</span>
                    </div>
                    <div className="div_cal">
                      <span className="cal">{Math.round(recipe.calories)}</span>
                      <span>calories</span>
                    </div>
                  </div>
                  <div className="social_media_share">
                  <ShareLink link={window.href}>
                    {link => (
                        <a href={link} target='_blank'><i class="fa-brands fa-twitter fa-5x" ></i></a>
                    )}
                  </ShareLink>

                  
                      <ShareLinkF link={window.href}>
                      {link => (
                         <a href={link} target='_blank'><i class="fa-brands fa-facebook fa-5x"></i></a>
                      )}
                   </ShareLinkF>
                  </div>
                </div>
                <div className="right_side_picture">
                  <img alt="food_pic" src={recipe.image}/>
                </div>
              </div>
            </header>
            <div className="recipe_description">
                <NutritionListItem nutrients={quantityOfNutrients}/>
              </div>
            <main>
              
           
              <div className="recipe_ingredients">
              <span className="ingds_span">Ingredients</span>
              <RecipeIngredients ingredients={recipe.ingredientLines}/>
              </div>
              <div className="direction_to_recipe_webesite">
                    <a href={recipe.url}>Read Details</a>
              </div>
              <div className="add_to_shopping_cart">
    
              </div>
              <div className="recipe_nutrition">
    
              </div>
              <div className="recipe_reviews">
                <span className="review_span">Reviews</span>
                <AddComment onComment={props.onComment} recipeId={id} updateComments={updateComments}/>
                <CommentItemList comments={comments}/> 
              </div>
              
            </main>
            <footer>
              <div className="related_recipe">
    
              </div>
              <div className="more_recipes_from_this_cook">
    
              </div>
            </footer>
          </div>
        </section>
      </main>
    )
}

export default RecipeDetail