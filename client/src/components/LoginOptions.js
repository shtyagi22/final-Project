import {useEffect,useState} from 'react'
import jwt_decode from 'jwt-decode'
import "./LoginOptions.scss"
import {Link, Route, Routes,redirect,useNavigate} from 'react-router-dom'
import useLocalStorage from '../hooks/LocalStorageHook'

function LoginOptions(props){

  const navigate = useNavigate();
 
  useEffect(()=>{

    /* global google */
    google.accounts.id.initialize({
      client_id:"354838477230-p6j3da9j9fl49g4r1om2qn8l51ierbmh.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })
    

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme:"outline", size:"large", width:"400px"}
    )
  },[])


  const handleCallbackResponse =(response) =>{
    console.log("credential", response.credential)
    const userObject = jwt_decode(response.credential);
    console.log(userObject)
    const newUser = {
      name: `${userObject.name}`,
      image: userObject.picture,
      email: userObject.email,
      password: userObject.sub
    }
    
    if(userObject){
      props.handleUser(newUser);
      navigate("/");
    }
  }

  return(
    <div className='signup_options_container'>
      <div className='signin_intro'>
        <img
            className="sidebar--centered"
            src="//localhost:8080/final_logo.png"
            alt="final_logo"
          />
        <span>Your recipes are waiting...</span>
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