import HomePage from './components/HomePage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProfilePage from './components/ProfilePage';
import Music from './components/Music';
import Movies from './components/Movies';
import Login from './components/Login';
import SignUp from './components/SignUp';



function App() {
  return (
    <Router>

      <div className=" bg-gray-900 min-h-screen ">
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/profile/:id" exact component={ProfilePage} />
        <Route path="/music" exact component={Music} />
        <Route path="/movie" exact component={Movies} />



      </div>
    </Router>
  );
}

export default App;
