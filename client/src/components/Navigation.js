import "./App.scss"

import SignUpLogInButton from "./SignUpLogInButton"
import './Navigation.scss';
import {Outlet,Link, NavLink} from 'react-router-dom'


function Navigation(){

  const user = JSON.parse(localStorage.getItem("user"))
  console.log("From Navigation",user)

  return(
    <main className="layout">
      <section className="sidebar">
        <Link to="/">
        <img
            className="sidebar--centered"
            src="//localhost:8080/final_logo.png"
            alt="final_logo"
          />
        </Link>

        {user &&
        <div className="user">
          
          <img alt="profile" src={user?.image}/>
          <span>{user?.fullname}</span>
        </div>
        }
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <SignUpLogInButton/>
        
          <ul>
         
          <li className="nav-list__item"><NavLink to="/search_pantry_ingredients" preventScrollReset={true}>Pantry-Ready Recipe</NavLink></li>
          <li className="nav-list__item"><NavLink to="/feeds" preventScrollReset={true}>My feeds</NavLink></li>
          <li className="nav-list__item"><NavLink to="/" preventScrollReset={true}>About Us</NavLink></li>
          <li className="nav-list__item"><NavLink to="/" preventScrollReset={true}>Contact Us</NavLink></li>
          </ul>
        </nav>
      </section>
      <section className="main_side">
      </section>
    </main>

  )

}

export default Navigation