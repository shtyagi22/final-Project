import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navigation from "./Navigation"
import PreviousPost from "./PreviousPost"
import PreviousPostItems from "./PreviousPostItems"
import Replies from "./Replies"
import ReplyToPost from "./ReplyToPost"
import SinglePost from "./SinglePost"


function PostAndReplies(props){

  let {id} = useParams()

  const [post, setPost] = useState({})
  const [replies, setReplies] =useState([])

  useEffect(()=>{
    
    Promise.all([
      axios.get(`/posts/postreplies/${id}`),
      axios.get(`/postComments/${id}`),
    ]).then((all)=>{
      console.log(all[0].data)
      setPost(all[0].data[0])
      setReplies(all[1].data)
    })
  },[])


  console.log("Lets.......................",post)

const updateReplies = (replies) =>{
  setReplies(replies.reverse())
}

 
  return(

    <main className="layout">
    <Navigation/>
    <section className="main_side">
      <main>
        <div>
        
        <SinglePost post={post} replies={replies.length}/>
        </div>
        <div>
          <ReplyToPost handlePostReplies={props.handlePostReplies} updateReplies={updateReplies} postId={id}/>
        </div>
        <div>
          <div className="previous_posts">
            <Replies replies ={replies}/> 
          </div>
        </div> 
      </main>
    </section>
    </main>
  )
}
export default PostAndReplies