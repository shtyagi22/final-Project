import {useEffect,useState} from 'react'
import jwt_decode from 'jwt-decode'
import "./LoginOptions.scss"
import {Link, Route, Routes,redirect} from 'react-router-dom'

function LoginOptions(props){

  

  useEffect(()=>{

    /* global google */
    google.accounts.id.initialize({
      client_id:"354838477230-p6j3da9j9fl49g4r1om2qn8l51ierbmh.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })
    

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme:"outline", size:"large"}
    )
  },[])

  const handleCallbackResponse =(response) =>{
    console.log("credential", response.credential)
    const userObject = jwt_decode(response.credential);
    if(userObject){
      window.location = "/"
    }
  }

  return(
    <div className='siginup_options_container'>
      <div className='singin_into'>
        <span>Your recipes are waiting</span>
      </div>
      <div id='signInDiv'>
      </div>
      <Link  to='/signin' className='login_with_email'>
       <div className='mail_icon_circle'>
       <i class="fa-solid fa-envelope"></i>
       </div>
       <span>login with email</span>
      </Link>

    </div>
  )
}

  export default LoginOptions