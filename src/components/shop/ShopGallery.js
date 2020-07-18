import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom';
import GridListTileBar from '@material-ui/core/GridListTileBar';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        ['@media (min-width: 860px)']: {
            width: 750,
            height: 750,
        },
        ['@media (max-width: 860px)']: {
            width: 600,
            height: 600,
        },
        ['@media (max-width: 660px)']: {
            width: 450,
            height: 450,
    
        },
    },
    title: {
        ['@media (min-width: 860px)']: {
            fontSize: 50
        },
        ['@media (max-width: 860px)']: {
            fontSize: 40
        },
        ['@media (max-width: 660px)']: {
            fontSize: 30
        },
        fontFamily: 'Work Sans',
        margin: 20,
        marginTop: 0
    },
    piecedesc: {
        ['@media (max-width: 660px)']: {
            display: 'none'
        },
        fontFamily: 'Work Sans'
    }
  }));





const ShopGallery = ({for_sale, history}) => {
    console.log('GALLERY FOR SALE PROPS', for_sale)
    const classes = useStyles();
    const view_for_sale = (e) => {
        var image_id = e.target.id
        history.push('/for_sale/'+image_id)
    }


    return (
        <div style={{textAlign: 'center'}}>
            <Typography component="h2" variant="h2" className={classes.title}>
                Shop
            </Typography>
            <div className={classes.root}>
                <GridList cellHeight={250} className={classes.gridList} cols={3} spacing={10}>
                    { for_sale && for_sale.map((piece) => (

                        <GridListTile key={piece.imageurl} cols={1} style={{overflow: 'hidden'}} onClick={view_for_sale}>
                            <img id={piece.id} src={piece.imageurl}/>
                            <GridListTileBar
                                id={piece.id}
                                className = {classes.piecedesc}
                                title={<span  onClick={view_for_sale} id={piece.id}>{piece.title}</span>}
                                onClick={view_for_sale}
                                subtitle={<span  onClick={view_for_sale} id={piece.id}>{piece.description}<br></br>Price: {piece.price}</span>}
                            />
                        </GridListTile>
                        
                    ))}
                </GridList>
            </div>
        </div>            
    )}
                


export default withRouter(ShopGallery)