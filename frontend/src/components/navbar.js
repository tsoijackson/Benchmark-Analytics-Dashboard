import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        backgroundColor: '#191d1e !important',
        color: '#de5e5f'
    }
}

class Navbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AppBar position="static" className={this.props.classes.root}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Benchmarks Analytics Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }


}

export default withStyles(styles)(Navbar);