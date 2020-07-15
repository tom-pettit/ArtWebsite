import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import BackButtonNavbar from "../navbars/BackButtonNavbar";
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import DeleteButtonForSaleNavbar from '../navbars/DeleteButtonForSaleNavbar'



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      border: 'none',
      boxShadow: 'none',
      marginRight: 0
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
          width: 200,
          height: 200,
          margin: 20,
          marginLeft: 40,
      },
      ['@media (max-width: 860px)']: {
          width: 150,
          height: 150,
          margin: 15,
          marginLeft: 42,
          marginRight: 30
      },
      ['@media (max-width: 660px)']: {
          width: 100,
          height: 100,
          margin: 10,
          marginLeft: 8,
          marginRight: 0
      },
  
    },
    cardtitle: {
      ['@media (min-width: 860px)']: {
          fontSize: 20,
          marginBottom: 10,
          maxWidth: 350
      },
      ['@media (max-width: 860px)']: {
          fontSize: 15,
          marginBottom: 10,
          maxWidth: 300
      },
      ['@media (max-width: 660px)']: {
          fontSize: 10,
          marginBottom: 10,
          maxWidth: 160
  
      },
  
        fontWeight: 'bold',
        fontFamily: 'Raleway',
    },
    carddescription: {
        fontFamily: 'Raleway',
        ['@media (min-width: 860px)']: {
          fontSize: 17,
          width: 612,
          maxWidth: 350,
          paddingTop: 0,
          verticalAlign: 'middle'
        },
        ['@media (max-width: 860px)']: {
          fontSize: 14,
          width: 220,
          paddingTop: 0

        },
        ['@media (max-width: 660px)']: {
          fontSize: 10,
          marginBottom: 0,
          maxWidth: 160,
          paddingTop: 0

      },
    },
    carddescriptionv2: {
        fontFamily: 'Raleway',
        ['@media (min-width: 860px)']: {
          fontSize: 15,
          width: 612,
          maxWidth: 500,
          paddingTop: 10
        },
        ['@media (max-width: 860px)']: {
          fontSize: 12,
          width: 310,
          paddingTop: 10
        },
        ['@media (max-width: 660px)']: {
          fontSize: 8,
          marginBottom: 0,
          maxWidth: 160,
          paddingTop: 10
      },
    },
    box: {
      ['@media (min-width: 860px)']: {
          width: '720px',
          marginLeft: '-360px',
      },
      ['@media (max-width: 860px)']: {
          width: '500px',
          marginLeft: '-250px',
      },
      ['@media (max-width: 660px)']: {
          width: '300px',
          marginLeft: '-150px',
      },
  


  
    },
    icons: {
      ['@media (max-width: 660px)']: {
          fontSize: 'small'
      },
    },
    article: {
        position: 'absolute',
        top: '10%',
        left: '50%'
    },
  }));
  

const ViewForSale = (props) => {
    const classes = useStyles()
    const { for_sale_piece, deleteForSaleError, deleteForSaleSuccess } = props;

    if (for_sale_piece) {
        return(
            <div>
                <DeleteButtonForSaleNavbar piece={for_sale_piece} id={props.match.params.id}/>
                <div className="row container" className={classes.article} style={{fontFamily: 'Raleway'}}>
                    <div className={classes.box}>
                        <Card className={classes.root}>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                <Typography component="h4" variant="h4" className={classes.cardtitle} style={{fontFamily: 'Work Sans'}}>
                                    {for_sale_piece.title}
                                </Typography>
                                <Typography className={classes.carddescription} style={{fontFamily: 'Work Sans', fontWeight:'600'}}>
                                    Price: {for_sale_piece.price}
                                </Typography>
                                <Typography className={classes.carddescription} style={{fontFamily: 'Work Sans'}}>
                                    {for_sale_piece.description}
                                </Typography>
                                <br></br>
                                <br></br>

                                <Typography className={classes.carddescription} style={{fontFamily: 'Work Sans'}}>
                                Please <a href='mailto:imafidonhannah@gmail.com' style={{textDecoration: 'none', color: 'black'}}><span style={{fontWeight: 'bold'}}>email me</span></a> if you are interested
                                </Typography>

                                </CardContent>
                            </div>
                            <CardMedia
                                className={classes.cover}
                                image={for_sale_piece.imageurl}
                            />
                        </Card>
                    </div>
                </div>
            </div>
    )} else {
        return (
            <div>
                <BackButtonNavbar />
                <div className="row container" className={classes.article} style={{fontFamily: 'Work Sans'}}>
                    <p style={{fontFamily: 'Work Sans', fontWeight: 'bold', color: 'red'}}>
                        {deleteForSaleError ? deleteForSaleError : null}
                    </p>
                    <p style={{fontFamily: 'Work Sans', fontWeight: 'bold', color: 'green'}}>
                        {deleteForSaleSuccess ? deleteForSaleSuccess : null}
                    </p>
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const for_sale = state.firestore.data.for_sale
    const for_sale_piece = for_sale ? for_sale[id] : null
    return {
        for_sale_piece: for_sale_piece,
        deleteForSaleError: state.piece.deleteForSaleError,
        deleteForSaleSuccess: state.piece.deleteForSaleSuccess,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'for_sale'}
    ])
)(ViewForSale)