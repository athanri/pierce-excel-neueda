import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Edit from './components/Edit';
import Home from './components/Home';


function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/edit" exact component={Edit} />
          <Route path="/edit/:title" component={Edit} />
        </Switch>
      </Router>
  );
}

export default App;
