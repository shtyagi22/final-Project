import Post from "./Post"
import {useState,useEffect} from "react"
import PreviousPostItems from "./PreviousPostItems"
import Navigation from "./Navigation"
import axios from 'axios';


function Feeds (props){

  const user_id = JSON.parse(localStorage.getItem('user')).id
  const [posts, setPosts] = useState([])

      /*
{
    id: 4,
    post_text: 'Goal.com',
    image: 'public/1667709506336-perfectly-grilled-lamb-rib-or-loin-chops-recipe-hero-03-262fe2defc7c491688cb2d363dad3446.jpeg',
    user_id: 1,
    userid: 1,
    fullname: 'ekene ezeani',
    profile_image: 'https://lh3.googleusercontent.com/a/ALm5wu1_-dgWtl7-p3AMWUcgUpYnJAV_zG0iMe59OOaH=s96-c'
  }

    
    */
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
    setPosts([...posts,newPost].reverse())
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