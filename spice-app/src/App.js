import HomePage from './components/HomePage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProfilePage from './components/ProfilePage';
import Music from './components/Music';
import Movies from './components/Movies';


function App() {
  return (
    <Router>

      <div className="">
        <Route path="/" exact component={HomePage} />
        <Route path="/profile" exact component={ProfilePage} />
        <Route path="/music" exact component={Music} />
        <Route path="/movie" exact component={Movies} />



      </div>
    </Router>
  );
}

export default App;
