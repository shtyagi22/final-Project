import Post from "./Post"
import {useState} from "react"
import PreviousPostItems from "./PreviousPostItems"
import Navigation from "./Navigation"



function Feeds (props){

    return(
      <main className="layout">
        <Navigation/>
        <section className="main_side">
          <main>
            <div>
              <Post onNewPost={props.onNewPost}/>
            </div>
            <div>
              <div className="previous_posts">
                <PreviousPostItems posts={props.posts}/>
              </div>
            </div>
          </main>
        </section>
      </main>
    )
}

export default Feeds