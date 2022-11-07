
import "./CommentItem.scss"

import TimeAgo from 'timeago-react'

function CommentItem(props){

  function getStars(rating) {
    let output = [];
    const result = (rating - Math.floor(rating)) !== 0;

    if(result){
      if(rating<5){
        for(let i = 1; i <= rating; i++){
          output.push(<span>&nbsp;&nbsp;<i class="fa-solid fa-star"></i></span>)
        }
        output.push(<span>&nbsp;&nbsp;<i class="fa-solid fa-star-half-stroke"></i></span>)
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
        output.push(<span>&nbsp;&nbsp;<i class="fa-solid fa-star"></i></span>)
      }
      for(let i = 1; i <= 5-rating; i++){
        output.push(<i class="fa-regular fa-star"></i>)
      }

    }
    return output
  }
/*    id: 14,
    comment_text: 'FROM TESTCOM',
    rating: '4',
    created_at: 2022-11-05T21:50:37.186Z,
    api_recipe: 'f5c8effaeabe27f6ffe6ca6be47e1bb9',
    user_id: 14,
    fullname: 'TESTCOM',
    email: 'TESTCOM@TESTCOM.COM',
    password: null,
    image: 'https://soccerpointeclaire.com/wp-content/uploads/2021/06/default-profile-pic-e1513291410505.jpg'
  }

 
 */

  return(
    <li>
      <section class="comment-item_container">
        <div className="left-side">
          <img alt="profile_img" src={props.comment.image}/>
        </div>
        <div className="right-side">
          <div className="name_and_time">
          <span>{props.comment.fullname}</span> 
          <span className="time_ago">
          <TimeAgo
                datetime={props.comment.created_at}
                locale='en'
            />
            
            </span>
          </div>
          <div>{getStars(props.comment.rating)}</div>
          <div className="comment_text">
            {props.comment.comment_text}
          </div>
        </div>
      </section>
    </li>
  )
}

export default CommentItem;