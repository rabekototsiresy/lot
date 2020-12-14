import React from 'react'
import LinePurpleUi from '../ui/LinePurpleUi'
import PopupBottomUi from '../ui/PopupBottomUi'
import Grid from '@material-ui/core/Grid'

const FooterComp = () => {
    return (
        <Grid className="container-footer" sm={12}>
            <PopupBottomUi />
            <LinePurpleUi />
        </Grid>
    )
}

export default FooterComp
