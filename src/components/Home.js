import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AppsIcon from '@material-ui/icons/Apps';
import StorefrontIcon from '@material-ui/icons/Storefront';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
    root: {
      border: 'none',
      boxShadow: 'none',
      marginRight: 0,
    },

    content: {
      flex: '1 0 auto',
      ['@media (max-width: 660px)']: {
          paddingBottom: 0
      },
  
    },

    cardtitle: {
      ['@media (min-width: 860px)']: {
          fontSize: 50,
          marginBottom: 10
      },
      ['@media (max-width: 860px)']: {
          fontSize: 35,
          marginBottom: 10
      },
      ['@media (max-width: 660px)']: {
          fontSize: 25,
          marginBottom: 10
  
      },
  
        fontWeight: 'bold',
        fontFamily: 'Work Sans',
    },
    carddescription: {
        fontFamily: 'Raleway',
        ['@media (min-width: 860px)']: {
          fontSize: 15,
          width: 612,
        },
        ['@media (max-width: 860px)']: {
          fontSize: 15,
          width: 310,
        },
        ['@media (max-width: 660px)']: {
          fontSize: 11,
          marginBottom: 0,
          width: 160
      },
    },
    box: {
      ['@media (min-width: 860px)']: {
          width: '860px',
          marginLeft: '-430px',
      },
      ['@media (max-width: 860px)']: {
          width: '560px',
          marginLeft: '-280px',
      },
      ['@media (max-width: 660px)']: {
          width: '350px',
          marginLeft: '-175px',
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
}));
  

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.box} >
          <Card className={classes.root} style={{textAlign: 'center'}}>
              <div style={{display: 'inline-block'}}>
                  <CardContent className={classes.content}>
                  <Typography component="h1" variant="h1" className={classes.cardtitle}>
                      Hannah Ima Art
                  </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                      <div style={{textAlign: 'center', width:'100%'}}>
                        <Button href='/portfolio' style={{display: 'inline-block', color:'grey'}}>Portfolio</Button>
                        <Button href='/shop' style={{display: 'inline-block', color:'grey'}}>Shop</Button>
                        <Button href='' style={{display: 'inline-block', color:'grey'}}>Instagram</Button>
                      </div>
                  </CardActions>
              </div>

          
          </Card>
          
      </div>
    )
}

export default Home