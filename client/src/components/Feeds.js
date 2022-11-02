import Post from "./Post"
import {useState} from "react"
import PreviousPostItems from "./PreviousPostItems"

function Feeds (){

  const [posts,setPosts] = useState([
    {
      id:1,
      username: "Michelle",
      userImage:"https://graph.facebook.com/10208015133285596/picture?height=180&width=180",
      post: "I’m so proud and lucky to be a native Californian because amazing produce is available at my local grocery store year-round. I didn’t even realize until recently that California grows more than a third of the country’s vegetables and two-thirds of the country’s",
      postImage:"https://lh3.googleusercontent.com/RBFG1uWmfwY6gJEhEdGePV6mjXv4E5vdHhPFuuRsa59PRDtEomGu8WVD8VxGBhgmDE9EwYPWYt1UJIP-w54hC8slMBQI1p0hZtzW=w1280-h1280-c-rw-v1-e365"
    },
    {
      id:2,
      username: "Michelle",
      userImage:"https://graph.facebook.com/10208015133285596/picture?height=180&width=180",
      post: " made half the recipe and substituted half and half for the heavy cream… also used minced garlic from a jar and it was amazing!!! I will be making this more often for sure and save as a favorite!",
      postImage:null
    }
  ])

  const onHandleNewPost = (newPost) => {
    const newPostTobeAdded = {
      id:3,
      username:"Michelle",
      userImage:"https://graph.facebook.com/10208015133285596/picture?height=180&width=180",
      post: newPost.postMessage,
      postImage: newPost.postImage.image

    }

    setPosts(prev => [newPostTobeAdded, ...prev])
  }

    return(
      <main>
        <div>
          <Post OnPost={onHandleNewPost}/>
        </div>
        <div>
          <div className="previous_posts">
            <PreviousPostItems posts={posts}/>
          </div>
        </div>
      </main>
    )
}

export default Feeds