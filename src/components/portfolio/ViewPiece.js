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
import DeleteButtonNavbar from '../navbars/DeleteButtonPieceNavbar'
import BackButtonNavbar from '../navbars/BackButtonNavbar'

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
  

const ViewPiece = (props) => {
    const classes = useStyles()
    const { piece, deleteSuccess, deleteError } = props;
    const id = props.match.params.id
    console.log('VIEWW PIECE PROPS', props)

    if (piece) {
        return(
            <div>
                <DeleteButtonNavbar piece={piece} id={id} />
                <div className="row container" className={classes.article} style={{fontFamily: 'Raleway'}}>
                    <div className={classes.box}>
                        <Card className={classes.root}>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5" className={classes.cardtitle} style={{fontFamily: 'Work Sans'}}>
                                    {piece.title}
                                </Typography>
                                <Typography className={classes.carddescription} style={{fontFamily: 'Work Sans'}}>
                                    {piece.description}
                                </Typography>

                                </CardContent>
                            </div>
                            <CardMedia
                                className={classes.cover}
                                image={piece.imageurl}
                                title="Live from space album cover"
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
                        {deleteError ? deleteError : null}
                    </p>
                    <p style={{fontFamily: 'Work Sans', fontWeight: 'bold', color: 'green'}}>
                        {deleteSuccess ? deleteSuccess : null}
                    </p>
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const pieces = state.firestore.data.pieces
    const piece = pieces ? pieces[id] : null
    return {
        deleteError: state.piece.deleteError,
        deleteSuccess: state.piece.deleteSuccess,
        piece: piece
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'pieces'}
    ])
)(ViewPiece)