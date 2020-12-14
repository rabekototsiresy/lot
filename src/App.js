
import "./utils/i18n";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";

const App = ()=> {



  return (
   
    <Router>

      <Switch>
        <Route path="/" exact component={ HomePage } />
      </Switch>

    </Router>
    
  );
}

export default App;
