import HomePage from './components/HomePage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProfilePage from './components/ProfilePage';
import Music from './components/Music/Music';
import Movies from './components/Movies/Movies';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MovieDetails from './components/MovieDetails';



function App() {
  return (
    <Router>

      <div className=" bg-gray-900 min-h-screen ">
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/profile/:id" exact component={ProfilePage} />
        <Route path="/music" exact component={Music} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/movie/:id/credits" exact component={MovieDetails} />




      </div>
    </Router>
  );
}

export default App;
