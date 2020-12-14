import React from 'react'
import Grid from '@material-ui/core/Grid';
import { NavigateBefore } from '@material-ui/icons';
import NavigationContentComp from '../components/NavigationContentComp';


const HomePage = () => {
    return (
        <Grid sm={12} className="content-home-page">
            <NavigationContentComp />
        </Grid>
    )
}

export default HomePage
