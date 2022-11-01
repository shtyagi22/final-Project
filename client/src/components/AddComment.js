

function AddComment(props){
  return (
    <div className="add_comment_container">
      <img alt="profile_pic"/>
      <span>{props.name}</span>
      <form>
        <input type="text"/>
      </form>
      <div>
        <div>rating</div>
      </div>
      
    </div>
  )
}

export default AddComment