import React, { Component } from 'react';
import { InputText } from 'primereact/components/inputtext/InputText';
import './form.css';
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  });


class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }

    }
    
    render() {
        const { classes } = this.props;
        return (
            <div>
                <div>
                    <Paper style={{backgroundColor: '#eee', width: 700, margin: 'auto'}} className={classes.root} elevation={10}>
                    <br /><br />
                    <h1>Sign up</h1>
                    <div>
                    <div>
                    <div className="content-section">
                        <span className="ui-float-label">
                            <InputText className="form" id="float-input" type="text" size="70" required pInputText />
                            <label style={{textAlign: 'center'}} for="float-input">First Name</label>
                        </span>
                    </div><br /><br />
                    <div className="content-section">
                        <span className="ui-float-label">
                            <InputText className="form" id="float-input" type="text" size="70" required pInputText />
                            <label for="float-input">Last Name</label>
                        </span>
                    </div><br /><br />
                    <div className="content-section">
                        <span className="ui-float-label">
                            <InputText id="float-input" type="text" style={{height: 35}} required size="70" pInputText />
                            <label for="float-input">Email</label>
                        </span>
                    </div><br /><br />
                    <div className="content-section">
                        <span className="ui-float-label">
                            <InputText id="float-input" type="text" size="70" required pInputText />
                            <label for="float-input">Password</label>
                        </span>
                    </div>
                    <br /><br />  
                    <Button variant="outlined" color="secondary" className={classes.button}> Submit </Button>
                </div>
                </div>
                    </Paper>
                </div>
            </div>
        )
    }
}

// const ComponentView = styled(Signin)`
//     .ui-inputtext {
//         width: 1000px;
//     }
// `;

Signin.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(Signin);