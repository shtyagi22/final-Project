import './SignUpLogInPage.scss'

function SignUpLogInPage(){
  return (
    <div> 
      <form className="signin_login">
        <div>
          <input type="text" placeholder="Email Address"/>
        </div>
        
        <input type="submit" value="Next"/>
      </form>
    </div>
  )
}

export default SignUpLogInPage