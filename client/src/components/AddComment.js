import {useState} from "react"
import { Rating } from "react-simple-star-rating"
import "./AddComment.scss"

function AddComment(props){

  const [showAddComment, setShowAddComment] = useState(false)

  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value, index) => console.log(value, index)


  return (
    <div className="add_comment_container">
      <img alt="profile_pic" src="https://graph.facebook.com/10156755061204968/picture?height=180&width=180"/>
      {
        !showAddComment &&
        <div className="write_review" onClick={()=>setShowAddComment(true)}> Write your review or comment here</div>
      }
      
      {
        showAddComment &&
        <div>
        <div>
        {/* <span>{props.name}</span> */}
        <Rating
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onPointerMove={onPointerMove}
          size={"22px"}
          fillColor={"rgba(58,131,120,255)"}
          /* Available Props */
        />
        </div>
        <form>
          <input autoFocus type="text" placeholder="Write your review or comment here"/>
        </form>
        <div>
        <div></div>
        </div>
        </div>

      }


      
    </div>
  )
}

export default AddComment