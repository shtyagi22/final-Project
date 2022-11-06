import './PreviousPost.scss'
import {useState} from 'react'
import { Link } from 'react-router-dom'

function Reply(props){

  /**    
   * id: 1,
    comment_text: 'We should be good now😃',
    post_id: 2,
    user_id: 1,
    created_at: 2022-11-06T06:09:49.516Z
     */

  const user = JSON.parse(localStorage.getItem('user'))

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
          <img alt="profile_img" src={user.image}/>
        </div>
        <div className="right-side">
          <div className="name_and_time">
          <span>{user.fullname}</span> <span className="time_ago">{props.reply.created_at}</span>
          </div>
          <div className="comment_text">
            {props.reply.comment_text}
          </div>
          {/* {
            props.post.postImage &&
            <div className='post_image'>
              <img alt="post_img" src={props.post.postImage}/>
            </div>
          } */}

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