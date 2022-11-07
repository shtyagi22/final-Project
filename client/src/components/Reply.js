import './PreviousPost.scss'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from 'timeago-react';

function Reply(props){



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
          <span>{user.fullname}</span> <span className="time_ago">
            <TimeAgo
              datetime={props.reply.created_at}
              locale='en'
            />
            
            
            </span>
          </div>
          <div className="comment_text">
            {props.reply.comment_text}
          </div>
    

          <div className='like_comments'>

          </div>
        </div>
      </section>
  
    </li>
  )
}
export default Reply;