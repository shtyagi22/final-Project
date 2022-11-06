import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navigation from "./Navigation"
import PreviousPost from "./PreviousPost"
import PreviousPostItems from "./PreviousPostItems"
import ReplyToPost from "./ReplyToPost"
import SinglePost from "./SinglePost"


function PostAndReplies(props){

  let {id} = useParams()

  const [post, setPost] = useState({})

  useEffect(()=>{
    axios.get(`/posts/postreplies/${id}`).then((res)=>{
      console.log(res.data)
      setPost(res.data[0])
    })
  })
/**
 *{
    id: 3,
    post_text: 'ae are still testing',
    image: 'public/1667706367212-IG1C11_Roast-Turkey.jpeg',
    user_id: 1
  }
 * 
 */

 
  return(

    <main className="layout">
    <Navigation/>
    <section className="main_side">
      <main>
        <div>
        
        <SinglePost post={post}/>
        </div>
        <div>
          <ReplyToPost handlePostReplies={props.handlePostReplies} postId={id}/>
        </div>
        {/* <div>
          <div className="previous_posts">
            <PreviousPostItems/> 
          </div>
        </div>  */}
      </main>
    </section>
    </main>
  )
}
export default PostAndReplies