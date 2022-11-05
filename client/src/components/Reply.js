import './PreviousPost.scss'
import {useState} from 'react'
import { Link } from 'react-router-dom'

function Reply(props){

  const [like, setLike] =  useState(0)

  const addLike = (e) =>{
    e.preventDefault();
    if(like){
      setLike(0)
    }else{
      setLike(1)
    }

  }

  return(
    <li>
      <section class="post-item_container">
      
        <div className="left-side">
          <img alt="profile_img" src={props.post.userImage}/>
        </div>
        <div className="right-side">
          <div className="name_and_time">
          <span>{props.post.username}</span> <span className="time_ago">3 days ago</span>
          </div>
          <div className="comment_text">
            {props.post.post}
          </div>
          {
            props.post.postImage &&
            <div className='post_image'>
              <img alt="post_img" src={props.post.postImage}/>
            </div>
          }

          <div className='like_comments'>
              <div className='comment_icon_count'>
                <i class="fa-regular fa-comment"></i>
                <span className='num_of_likes'>
                  5
                </span>
              </div>
              {like === 0 && <i class="fa-regular fa-heart" onClick={addLike}></i>}
              {like === 1 && <>
                <i class="fa-sharp fa-solid fa-heart" onClick={(e)=>addLike(e)}></i> 
                <span className='num_of_likes'>
                  {like}
                </span>
              </>}
     
          </div>
        </div>
      </section>
  
    </li>
  )
}
export default Reply;