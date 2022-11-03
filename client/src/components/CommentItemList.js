
import CommentItem from "./CommentItem"

function CommentItemList(props){

  const commentItemList = props.comments.map((e,index) => {
    return <CommentItem comment={e.comment} id={index}/>
  })

  
  return(
    <ul>
      {commentItemList} 
    </ul>
  )
}
export default CommentItemList