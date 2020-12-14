
import Grid from '@material-ui/core/Grid'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";

const App = ()=> {



  return (
   
    // <Router>
      
  <Router>
    <Grid className="container-page" sm={12}>

        {/* header  */}
        <NavbarComp />
        


        <Grid className="container-content" sm={12}>
  
            <Switch>

              <Route path="/" exact component={HomePage} />

            </Switch>

        </Grid>

        {/* footer */}

        <FooterComp />
        

    </Grid>
    
  </Router>
  );
}

export default App;
