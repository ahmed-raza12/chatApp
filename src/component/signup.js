import React, { Component } from 'react';
import { InputText } from 'primereact/components/inputtext/InputText';
import './form.css';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import { login } from '../store/actions';
import history from '../history';




const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    input: {
        height: 35,
        textAlign: 'right',
    },
    label: {
        fontSize: 20,
        width: 420,
        textAlign: 'right',
    },
    button: {
        // width: 80,
        // margin: 'auto'
    }

});


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            uid: '',
        }

    }
    changeState(formLabel, ev) {
        let currentState = {}
        currentState[formLabel] = ev.target.value
        this.setState(currentState)
        console.log(this.state)
    }
    submitIt = () => {
        
        const {email, firstName, lastName,password, uid} = this.state
        if (lastName === '' || email === '' || firstName === '' || password === '') {
            this.setState({ error: 'Please Enter Complete Details' });
        } else if (email === email.indexOf("@") < 1 || email.indexOf("@") > email.length - 5) {
            alert('email address  is badly formated')
        } else if (password.length < 6) {
            alert('password  must be atleast 6')
        }
        else {
            let stateObj = {
                email, firstName, lastName, password,
            }
        this.props.login(stateObj)
            // alert('All Data Successfully added')
            this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',

        })
        history.push('/home')
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div>
                    <br />
                    <br />
                    <Paper style={{ backgroundColor: '#eee', width: 450, margin: 'auto', height: 480 }} className={classes.root} elevation={10}>
                        <br /><br />
                        <h1 style={{ textAlign: 'right', margin: '5px 20px 2px 0px' }}>سائن اپ کریں</h1>
                        <br />
                        <div>
                            <div >
                                <div className="content-section">
                                    <span className="ui-float-label" >
                                        <InputText className="form" id="float-input" className={classes.input} type="text" 
                                        size="50" pInputText onChange={this.changeState.bind(this, 'firstName')} />
                                        <label className={classes.label} for="float-input">پہلا نام</label>
                                    </span>
                                </div><br /><br />
                                <div className="content-section">
                                    <span className="ui-float-label">
                                        <InputText className="form" id="float-input" className={classes.input} type="text" 
                                        size="50" pInputText onChange={this.changeState.bind(this, 'lastName')} />
                                        <label className={classes.label} for="float-input">ولد</label>
                                    </span>
                                </div><br /><br />
                                <div className="content-section">
                                    <span className="ui-float-label">
                                        <InputText id="float-input" type="text" className={classes.input} 
                                        size="50" pInputText onChange={this.changeState.bind(this, 'email')} />
                                        <label className={classes.label} for="float-input">موبائل نمبر یا ای میل</label>
                                    </span>
                                </div><br /><br />
                                <div className="content-section">
                                    <span className="ui-float-label">
                                        <InputText id="float-input" type="password" className={classes.input} 
                                        size="50" pInputText onChange={this.changeState.bind(this, 'password')} />
                                        <label className={classes.label} for="float-input">نیا پاس ورڈ</label>
                                    </span>
                                </div>
                                <br /><br />
                                <Button variant="contained" color="inherit" 
                                style={{ float: 'right', margin: '5px 20px 2px 0px' }} 
                                className={classes.button} onClick={this.submitIt}> سائن اپ کریں </Button>
                            </div>
                        </div>
                    </Paper>
                </div>
            </div>
        )
    }
}

// const ComponentView = styled(Signup)`
//     .ui-inputtext {
//         width: 1000px;
//     }
// `;


Signup.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default connect(null, { login })(withStyles(styles)(Signup));