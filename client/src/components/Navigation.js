import "./App.scss"
import SignUpLogInButton from "./SignUpLogInButton"
import './Navigation.scss';


function Navigation(){

  return(
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
        
          alt="finals logo"
        />
        <div className="user">
          <img alt="profile" src="https://lh3.googleusercontent.com/a/ALm5wu1_-dgWtl7-p3AMWUcgUpYnJAV_zG0iMe59OOaH=s112-c-rw-v1-e365"/>
        </div>
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <SignUpLogInButton/>
          <ul>
            <li className="nav-list__item">Pantry-Ready Recipe</li>
            <li className="nav-list__item">My Feeds</li>
          </ul>
        </nav>
      </section>
      <section className="main_side">
      </section>
    </main>

  )

}

export default Navigation