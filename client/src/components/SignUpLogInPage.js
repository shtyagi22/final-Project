import { useState } from 'react'
import './SignUpLogInPage.scss'



function SignUpLogInPage(props){
 
  const [email, setEmail] = useState("")

  const userEmail = () => {
    props.user(email)
  }

  return (
    <div className='login_container'> 
      <form className="signin_login" onSubmit={e => e.preventDefault()}>
        <div>
          <input type="email" placeholder="Email Address" onChange={(event)=>setEmail(event.target.value)}/>
        </div>
        
        <input type="submit" value="Next" onClick={userEmail}/>
      </form>
    </div>
  )
}

export default SignUpLogInPage