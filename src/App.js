
import "./utils/i18n";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import NavbarComp from "./components/NavbarComp";
import MessBottomComp from "./components/MessBottomComp";

const App = ()=> {



  return (
   
    <Router>
      
      <Route component={ NavbarComp} />

      <Switch>
        <Route path="/" exact component={ HomePage } />
      </Switch>

      <Route component={ MessBottomComp  } />

    </Router>
    
  );
}

export default App;
