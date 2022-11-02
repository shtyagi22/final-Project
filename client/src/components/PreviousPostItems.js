import PreviousPost from "./PreviousPost";
import './PreviousPost.scss'


function PreviousPostItems(props){

  const previousPostItems = props.posts.map((e) =>{
    return <PreviousPost post={e} key={e.id}/>
  })

  return(
    <ul>
      {previousPostItems}
    </ul>
  )
}

export default PreviousPostItems;