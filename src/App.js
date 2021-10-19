
import HomePage from './components/Feeds/HomePage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProfilePage from './components/Feeds/ProfilePage';
import Music from './components/Music/Music';
import Movies from './components/Movies/Movies';
import Login from './components/Feeds/Login';
import SignUp from './components/Feeds/SignUp';
import MovieDetails from './components/Movies/MovieDetails';
import CryptoHomePage from './components/Crypto/CryptoHomePage';




function App() {





  return (
    <Router basename='/'>

      <div className=" bg-gray-900 min-h-screen ">
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/music" exact component={Music} />
        <Route path="/crypto" exact component={CryptoHomePage} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/profile/:id" exact component={ProfilePage} />
        <Route path="/movie/:id/credits" exact component={MovieDetails} />




      </div>
    </Router>
  );
}

export default App;
