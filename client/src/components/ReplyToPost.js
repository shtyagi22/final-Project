import React,{ useState } from 'react';
import Picker from 'emoji-picker-react';
import "./Post.scss"



function ReplyToPost(props){

  const [inputStr, setInputStr] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [fileState, setFileState] = useState({selectedFile:null,image:""})

  const user = JSON.parse(localStorage.getItem('user'))

  const onEmojiClick = (emojiObject, event) => {
    setInputStr(prevInput => prevInput + emojiObject.emoji);
  //  console.log("emoji Object", event, emojiObject)
    setShowPicker(false);
  };

  const handleOnImageChange = (event) =>{
    if (event.target.files && event.target.files[0]) {
      setFileState({
        selectedFile:event.target.files[0],
        image: URL.createObjectURL(event.target.files[0])
      })
    }

  }

  
  const onHandleReply = (event) => {
    event.preventDefault();
    if(inputStr.length){
      const newReplyCreated = {
        postid:props.postId,
        postMessage: inputStr,
        userId:user.id
      }
  
      // props.OnPost(newPostCreated)
      props.handlePostReplies(newReplyCreated).then((data) => {
        props.updateReplies(data)
      })
  
      setFileState({selectedFile:null,image:""});
      setInputStr("")
    }

  }

  return (
    <div className="new_post">
      <div className="prof_pic">

      </div>
      <form>
        <div className="new_post_text">
          <textarea placeholder="Say something ..." value={inputStr}
          onChange={event=>setInputStr(event.target.value)}></textarea>
          
          {
            fileState.image.length>0 && 
            <div className='img_preview'>
              <img src={fileState.image} alt="file preview" />
              <button className='btn_close' onClick={()=>setFileState({selectedFile:null,image:""})}><i className="fa-solid fa-xmark"></i></button>
            </div>
          }
          
        </div>
        <div className="pic_emo_but">
          <div className="pic_emo">
            <label htmlFor="file-upload">
              <i className="fa-regular fa-image"></i>
              <input type="file" onChange={handleOnImageChange}
              id="file-upload"
              accept="image/x-png, image/jpeg, img/gif" 
              hidden/>
            </label>
            
            <i className="fa-regular fa-face-smile" onClick={() => setShowPicker(prev => {
              return prev  ? false : true
            })}></i>
            {showPicker && <Picker
            onEmojiClick={onEmojiClick} />}
          </div>
          <div>
            <form >
              <input type="submit" value="Reply" onClick={(event) => onHandleReply(event)} disabled={inputStr.length===0}/>
            </form>
          </div>
        </div>
      </form>
    </div>
   
  )
}

export default ReplyToPost