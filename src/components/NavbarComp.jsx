import React from 'react'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid'



const  NavbarComp = ()=>{
    return(
        <Grid className="container-header" sm={12}>
          <AppBar position="static" className="navbar">
              <Toolbar>
              <IconButton edge="start"  color="inherit" aria-label="menu">
                  <MenuIcon />
              </IconButton>
              <Typography variant="h6" >
                  LOTNESS
              </Typography>
                  <Button color="inherit">Login</Button>
              </Toolbar>
          </AppBar>
        </Grid>
    )
}
 
export default NavbarComp;