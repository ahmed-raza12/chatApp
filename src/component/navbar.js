import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import history from '../history';
import Grid from '@material-ui/core/Grid';

import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#b0b9b2'
  },
  flex: {
    // flexGrow: 1,
    width: 100,
    color: 'white'
  },
  button: {
    // margin: theme.spacing.unit,
    height: 60,
    fontSize: 20,
    justifyContent: 'flex-end',
    color: 'white'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root} style={{marginTop: 40}}>
    <Grid container>
        <Grid item xs={12}>
        <AppBar position="absolute" style={{backgroundColor: '#3eb94e', overflow: 'hidden', position: 'fixed',}}>
        <Toolbar style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Button className={classes.button}>
                اطلاعات
            </Button>
            <Button className={classes.button}>
            جوابات
            </Button>
            <Button className={classes.button}>
            صفحه اول
            </Button>
            <Typography variant="title" className={classes.flex}>
          <span style={{display: 'flex', justifyContent: 'center',}}> الشوریٰ</span>
          </Typography>
        </Toolbar>
      </AppBar>
        </Grid>
    </Grid>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
/////
// onClick={() => history.push('/main')}
// onClick={() => history.push('/main')}
// onClick={() => history.push('/main')}