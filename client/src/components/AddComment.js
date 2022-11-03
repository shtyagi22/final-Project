import {useState} from "react"
import { Rating } from "react-simple-star-rating"
import "./AddComment.scss"

function AddComment(props){

  const [showAddComment, setShowAddComment] = useState(false)
  const [strInput,setStrInput] = useState("")
  const [rating,setRating]= useState(0)

  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value, index) => {
    setRating(value)
  }

  const handleComment =()=>{

    const comment ={
      comment: strInput,
      rating:rating
    }
    props.onComment(comment)

    setRating(0);
    setStrInput("");
  }

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
          allowFraction={true}
          /* Available Props */
        />
        </div>
        <form onSubmit={(e)=>e.preventDefault()}>
          <textarea autoFocus placeholder="Write your review or comment here" 
          onChange={(e)=>setStrInput(e.target.value)}
          value={strInput}></textarea>
        
          <div className="submit_cancel">
            <button onClick={handleComment} disabled={strInput.length===0}>Submit</button>
            <span onClick={()=>setShowAddComment(false)}>Cancel</span>
          </div>
          </form>
        </div>


      }


      
    </div>
  )
}

export default AddComment