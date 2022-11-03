import Post from "./Post"
import {useState} from "react"
import PreviousPostItems from "./PreviousPostItems"

function Feeds (props){



    return(
      <main>
        <div>
          <Post /*OnPost={onHandleNewPost}*/ onNewPost={props.onNewPost}/>
        </div>
        <div>
          <div className="previous_posts">
            <PreviousPostItems posts={props.posts}/>
          </div>
        </div>
      </main>
    )
}

export default Feeds