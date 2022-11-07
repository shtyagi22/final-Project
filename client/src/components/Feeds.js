import Post from "./Post"
import {useState,useEffect} from "react"
import PreviousPostItems from "./PreviousPostItems"
import Navigation from "./Navigation"
import axios from 'axios';


function Feeds (props){

  const user_id = JSON.parse(localStorage.getItem('user')).id
  const [posts, setPosts] = useState([])


  useEffect(()=>{

        axios.get(`/posts/${user_id}`).then((res)=>{
          console.log("from feeds", res.data)
          setPosts(res.data.reverse())
        })
    
  },[])

  const updatePosts = (post) =>{
    const newPost = {
      id: posts[0].id,
      post_text:post.text,
      image:post?.filepath,
      fullname:posts[0].fullname,
      profile_image:posts[0].profile_image
    }
    console.log("Newpost issues",newPost)
    setPosts([newPost,...posts])
  }
    

    return(
      <main className="layout">
        <Navigation/>
        <section className="main_side">
          <main>
            <div>
              <Post onNewPost={props.onNewPost} updatePosts={updatePosts}/>
            </div>
            <div>
              <div className="previous_posts">
                <PreviousPostItems posts={posts}/>
              </div>
            </div>
          </main>
        </section>
      </main>
    )
}

export default Feeds