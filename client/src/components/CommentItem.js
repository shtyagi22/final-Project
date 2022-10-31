
import "./CommentItem.scss"

function CommentItem(props){

  function getStars(rating) {
    let output = [];
    const result = (rating - Math.floor(rating)) !== 0;

    if(result){
      if(rating<5){
        for(let i = 1; i <= rating; i++){
          output.push(<i class="fa-solid fa-star"></i>)
        }
        output.push(<i class="fa-solid fa-star-half-stroke"></i>)
        for(let i = 1; i <= 5-rating; i++){
          output.push(<i class="fa-regular fa-star"></i>)
        }
      }else{
        for(let i = 1; i <= rating; i++){
          output.push(<i class="fa-solid fa-star"></i>)
        }
      }
    } else{
      for(let i = 1; i <= rating; i++){
        output.push(<i class="fa-solid fa-star"></i>)
      }
      for(let i = 1; i <= 5-rating; i++){
        output.push(<i class="fa-regular fa-star"></i>)
      }

    }
    return output
  }


  return(
    <li>
      <section class="comment-item_container">
        <div className="left-side">
          <img alt="profile_img" src={props.comment.image}/>
        </div>
        <div className="right-side">
          <div className="name_and_time">
          <span>{props.comment.name}</span> <span className="time_ago">{props.comment.time}</span>
          </div>
          <div>{getStars(props.comment.rating)}</div>
          <div className="comment_text">
            {props.comment.comment}
          </div>
        </div>
      </section>
    </li>
  )
}

export default CommentItem;