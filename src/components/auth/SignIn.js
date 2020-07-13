import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SignInForm from './SignInForm';
import { connect } from 'react-redux';
import BackButtonNavbar from '../navbars/BackButtonNavbar'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      border: 'none',
      boxShadow: 'none',
      marginRight: 0,
      '& label.Mui-focused': {
        color: 'orange',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'orange',
      },
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
      ['@media (max-width: 660px)']: {
          paddingBottom: 0
      },
  
    },
    cover: {
      ['@media (min-width: 860px)']: {
          width: 110,
          height: 110,
          margin: 20,
          marginLeft: 40,
      },
      ['@media (max-width: 860px)']: {
          width: 90,
          height: 90,
          margin: 15,
          marginLeft: 42,
          marginRight: 0
      },
      ['@media (max-width: 660px)']: {
          width: 70,
          height: 70,
          margin: 10,
          marginLeft: 8,
          marginRight: 0
      },
  
    },
    cardtitle: {
      ['@media (min-width: 860px)']: {
          fontSize: 20,
          marginBottom: 10,
          marginTop: 10
      },
      ['@media (max-width: 860px)']: {
          fontSize: 15,
          marginBottom: 10
      },
      ['@media (max-width: 660px)']: {
          fontSize: 12,
          marginBottom: 5
  
      },
  
        fontWeight: 'bold',
        fontFamily: 'Work Sans',
    },
    carddescription: {
        fontFamily: 'Work Sans',
        ['@media (min-width: 860px)']: {
          fontSize: 15,
          width: 600,
        },
        ['@media (max-width: 860px)']: {
          fontSize: 12,
          width: 350,
        },
        ['@media (max-width: 660px)']: {
          fontSize: 9,
          marginBottom: 0,
          width: 210
      },
    },
    box: {
      ['@media (min-width: 860px)']: {
          width: '810px',
          marginLeft: '-405px',
      },
      ['@media (max-width: 860px)']: {
          width: '530px',
          marginLeft: '-265px',
      },
      ['@media (max-width: 660px)']: {
          width: '320px',
          marginLeft: '-160px',
      },
  
  
      position: 'absolute',
      left: '50%',
      top: '10%',
  
    },
    icons: {
      ['@media (max-width: 660px)']: {
          fontSize: 'small'
      },
    },
    credentials: {
        marginTop: 10
    },
    button: {
        ['@media (min-width: 860px)']: {
            marginTop: 30
        },
        ['@media (max-width: 860px)']: {
            marginTop: 20
        },
        ['@media (max-width: 660px)']: {
            marginTop: 10
        },
        backgroundColour: 'orange',
        color: 'black',
        borderColor: 'orange'
    }
  }));

const SignIn = (props) => {
    const classes = useStyles()

    return (
      <div>
        <BackButtonNavbar />
        <div className={classes.box}>
           <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5" className={classes.cardtitle}>
                        Sign In
                    </Typography>
                    <Typography className={classes.carddescription}>
                        You must sign in in order to upload a new piece
                    </Typography>
                    <br></br>


                    <SignInForm />


                    </CardContent>

                </div>
            </Card> 
        </div>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(SignIn)