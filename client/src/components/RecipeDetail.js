import "./RecipeDetail.scss"
import RecipeIngredients from "./RecipeIngredients"
import CommentItemList from "./CommentItemList"
import AddComment from "./AddComment"
import {useParams} from 'react-router-dom'
import Navigation from "./Navigation"
import { useEffect, useState } from "react"
import axios from "axios"



function RecipeDetail(props){

  const [recipe, setRecipe] = useState({})

  let {id} = useParams()
  useEffect(()=>{
    axios.post(`/recipe/${id}`).then((res)=>{
      return res.data
    }).then((data)=>{
      console.log("inside useeffect",data.hits[0].recipe)
      setRecipe(data.hits[0].recipe)
    })
  },[id])

 console.log("RECIPE FROM RECIPE DETAIL",recipe.label, recipe.source)

 return(
   
  <main className="layout">
    <Navigation/>
    <section className="main_side">
      <div className="recipe_detail_container">
        
        <header>
          <div className="header_container">
            <div className="left_side_overview">
              <span className="recipe_name">{recipe.label}</span>
              <span className="recipe_owner">{recipe.source}</span>
              <div className="details_calories_cooktime">
                <div className="div_no_ing">
                  <span className="no_ing">{recipe.ingredientLines.length}</span>
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
              <div>
                <a href={recipe.url}>Read Directions</a>
              </div>
            </div>
            <div className="right_side_picture">
              <img alt="food_pic" src={recipe.image}/>
            </div>
          </div>
        </header>
        <main>
          
          <div className="recipe_description">
          <span>Description</span>
          <p>{}</p>
          </div>
          <div className="recipe_ingredients">
          <span className="ingds_span">Ingredients</span>
          <RecipeIngredients ingredients={recipe.ingredientLines}/>
          </div>
          <div className="add_to_shopping_cart">

          </div>
          <div className="recipe_nutrition">

          </div>
          <div className="recipe_reviews">
            <span className="review_span">Reviews</span>
            <AddComment onComment={props.onComment} recipeId={id}/>
            <CommentItemList comments={props.comments}/> 
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