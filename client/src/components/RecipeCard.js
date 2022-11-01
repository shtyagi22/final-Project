import "./RecipeCard.scss"

function RecipeCard(){

  return(
    <div className="indvidual_card">
      <div className="card" style={{width: "15rem"}}>
          <img src="https://lh3.googleusercontent.com/r0_kkMzO4yn6ureKKS14rOeUq1AGdqSbcmEPajcTYsRwqJ54c7iNXuOd8Oi_TwYKS9vFhelSmrTkrbgLJEf9KWA=w440-h440-c-rw-v1-e365" className="card-img-top" alt="..."/>
        <div className="card-body ">
          <h5 className="card-title">Recipe Name</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  )

}

export default RecipeCard