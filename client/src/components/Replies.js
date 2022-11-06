import Reply from "./Reply";
import './PreviousPost.scss'


function Replies(props){

  const replies = props.posts.map((e) =>{
    return <Reply post={e} key={e.id}/>
  })

  return(
    <ul>
      {replies}
    </ul>
  )
}

export default Replies;