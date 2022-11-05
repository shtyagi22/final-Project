import { useState } from 'react'
import { useNavigate } from 'react-router-dom';  
import useLocalStorage from '../hooks/LocalStorageHook'
import './SignUpLogInPage.scss'



function SignUpLogInPage(props){
 
  const [email, setEmail] = useState("")
  const [name,setName] = useState("")
  const [transition, setTransition] = useState(false)
  const navigate = useNavigate();
 

  const transit = () => {
    setTransition(true)
  }

  const handleNewUser = () => {
    const newUser = {
      name,email,image:"https://soccerpointeclaire.com/wp-content/uploads/2021/06/default-profile-pic-e1513291410505.jpg"
    }
    props.handleUser(newUser);
    navigate("/");
  }

  return (
  <>
  { !transition &&
    <div className='login_container'> 
      <form className="signin_login" onSubmit={e => e.preventDefault()}>
        <div>
          <input type="email" placeholder="Email Address" onChange={(event)=>setEmail(event.target.value)}/>
        </div>
        <input type="submit" value="Next" onClick={transit}
         disabled={ !(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/.test(email)) }/>
      </form>
    </div>
  }


  { transition &&
  <>
  <h1>How shall we greet you?</h1>
    <div className='login_container'> 
    <form className="signin_login" onSubmit={e => e.preventDefault()}>
      
      <div>
        <input type="text" placeholder="Your Name" onChange={(event)=>setName(event.target.value)}/>
      </div>
      
      <input type="submit" value="Next" onClick={handleNewUser}/>
    </form>
  </div>
  </>
}
</>
  )
}

export default SignUpLogInPage