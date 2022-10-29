import './App.scss';
import "./SignUpLogIn"
import SignUpLogIn from './SignUpLogIn';
import SearchBar from './SearchBar';
import RecipeCard from './RecipeCard';
function App() {
  return (
    <main className="layout">
      <section className="sidebar">
      <img
            className="sidebar--centered"
            src="images/food.png"
            alt="Interview Scheduler"
          />
      <SignUpLogIn/>
      </section>
      <section className="schedule">
        
      <SearchBar/>
      <RecipeCard/>
      </section>
    </main>
  );

}

export default App;
