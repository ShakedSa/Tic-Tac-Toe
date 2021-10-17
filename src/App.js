import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SinglePlayer from "./components/SinglePlayer";
import TwoPlayers from './components/TwoPlayers';
import Error from './components/Error';
import About from './components/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/single-player">
          <SinglePlayer />
        </Route>
        <Route path="/two-players">
          <TwoPlayers />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
