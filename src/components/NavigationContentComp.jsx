import React from 'react'
import Grid from '@material-ui/core/Grid'
import { RiUser3Fill } from 'react-icons/ri'
import { IoLogoDropbox } from 'react-icons/io'

 

const NavigationContentComp = () => {
    return (
        <Grid sm={12} className="content-home-page">
            <Grid sm={12} className="container-icon" >
                <span className="user-icon">
                    <RiUser3Fill size={100} color="#fff" />
                </span>
                <span className="logo-lotness">
                    <IoLogoDropbox size={100} color="#fff" />
                   
                </span>
            </Grid>
        </Grid>
    )
}

export default NavigationContentComp
