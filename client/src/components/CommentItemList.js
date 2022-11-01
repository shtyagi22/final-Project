
import CommentItem from "./CommentItem"

function CommentItemList(props){

  const commentItemList = props.comments.map(e => {
    return <CommentItem comment={e.comment} id={e.id}/>
  })

  
  return(
    <ul>
      {commentItemList}
    </ul>
  )
}
export default CommentItemList