import './PreviousPost.scss'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from 'timeago-react'

function PreviousPost(props){

  const user = JSON.parse(localStorage.getItem('user'))

  console.log("user in PreviousPost", user)
      /*
  {
    id: 1,
    post_text: 'ae are still testing',
    image: 'public/1667706367212-IG1C11_Roast-Turkey.jpeg',
    user_id: 1,
    fullname: 'ekene ezeani',
    profile_image: 'https://lh3.googleusercontent.com/a/ALm5wu1_-dgWtl7-p3AMWUcgUpYnJAV_zG0iMe59OOaH=s96-c'
  }
    
    */

  /**
 *{
    id: 3,
    post_text: 'ae are still testing',
    image: 'public/1667706367212-IG1C11_Roast-Turkey.jpeg',
    user_id: 1
  }
 * 
 */

  const [like, setLike] =  useState(0)

  const addLike = (e) =>{
    e.preventDefault();
    if(like){
      setLike(0)
    }else{
      setLike(1)
    }

  }
  const getFilePath = (str) => {

    const filepath = `//localhost:8080${str?.substring(6)}`

    return filepath;
  }

  console.log("checking path",getFilePath(props.post.image))

  return(
    <li>
      <div className='individual_post'>
      <Link  to={`/posts/${props.post.id}`}>
      <section class="post-item_container">
      
        <div className="left-side">
          <img alt="profile_img" src={props.post.profile_image}/>
        </div>
        <div className="right-side">
          <div className="name_and_time">
          <span>{props.post.fullname}</span> <span className="time_ago">
            <TimeAgo
                datetime={props.post.created_at}
                locale='en'
            />
          </span>
          </div>
          <div className="comment_text">
            {props.post.post_text}
          </div>
          {
            props.post.image &&
            <div className='post_image'>
              <img alt="post_img" src={getFilePath(props.post.image)}/>
            </div>
          }

          <div className='like_comments'>
              <div className='comment_icon_count'>
                <i class="fa-regular fa-comment"></i>
                <span className='num_of_likes'>
                  
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
      </Link>
      </div>
    </li>
  )
}
export default PreviousPost;