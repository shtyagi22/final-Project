import Reply from "./Reply";
import './PreviousPost.scss'


function Replies(props){

  const previousPostItems = props.posts.map((e) =>{
    return <Reply post={e} key={e.id}/>
  })

  return(
    <ul>
      {previousPostItems}
    </ul>
  )
}

export default Replies;