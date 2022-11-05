
import "./SignUpLogInButton.scss"
import './App.scss';
import {NavLink} from 'react-router-dom'

function SignUpLogInButton() {
  return (
    
    <div className="sidebar--centered signup">
     <NavLink to='/login'>Sign Up / Log in</NavLink>
    </div>
    
  );

}

export default SignUpLogInButton;