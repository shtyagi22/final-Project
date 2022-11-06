import Reply from "./Reply";
import './PreviousPost.scss'


function Replies(props){

  const replies = props.replies.map((e) =>{
    return <Reply reply={e} key={e.id}/>
  })

  return(
    <ul>
      {replies}
    </ul>
  )
}

export default Replies;