import React, { Component } from "react";
import { Router, Route, Link, } from "react-router-dom";
import history from './history';
import { connect } from 'react-redux';
import Signup from './component/signup';
import Grid from '@material-ui/core/Grid';
import NavBar from './component/navbar';
import Todo from './component/todos';



class MyRoutes extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router history={history} style={{ OverflowY: 'hidden' }}>
                <div style={{backgroundColor: '#e0e0e0'}}>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <NavBar />
                            <Route exact path="/" component={Todo} />
                        </Grid>
                    </Grid>

                </div>
            </Router>
        )
    }
}
export default MyRoutes;