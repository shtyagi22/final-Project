import { useState } from "react"
import { useParams } from "react-router-dom"
import Navigation from "./Navigation"
import PreviousPost from "./PreviousPost"
import PreviousPostItems from "./PreviousPostItems"
import ReplyToPost from "./ReplyToPost"


function PostAndReplies(){

  let {id} = useParams()


  const [post, setPost] = useState(
    {
      id: 1,
      username: "Michelle",
      userImage: "https://graph.facebook.com/10208015133285596/picture?height=180&width=180",
      post: "I’m so proud and lucky to be a native Californian because amazing produce is available at my local grocery store year-round. I didn’t even realize until recently that California grows more than a third of the country’s vegetables and two-thirds of the country’s",
      postImage: "https://lh3.googleusercontent.com/RBFG1uWmfwY6gJEhEdGePV6mjXv4E5vdHhPFuuRsa59PRDtEomGu8WVD8VxGBhgmDE9EwYPWYt1UJIP-w54hC8slMBQI1p0hZtzW=w1280-h1280-c-rw-v1-e365"
    })


  
  return(
    <main className="layout">
    <Navigation/>
    <section className="main_side">
      <main>
        <div>
          <h1>{id}</h1>
        <PreviousPost post={post}/>
        </div>
        <div>
          <ReplyToPost/>
        </div>
        <div>
          <div className="previous_posts">
            {/* <PreviousPostItems/> */}
          </div>
        </div>
      </main>
    </section>
    </main>
  )
}
export default PostAndReplies