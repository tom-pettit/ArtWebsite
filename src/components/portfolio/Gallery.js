import React from 'react';
import Piece from './Piece'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';


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
    }
  }));


const Gallery = ({pieces}) => {
    const classes = useStyles();

    return (
        <div style={{textAlign: 'center'}}>
            <Typography component="h2" variant="h2" className={classes.title}>
                Portfolio
            </Typography>
            <div className={classes.root}>
                <GridList cellHeight={160} className={classes.gridList} cols={3} spacing={10}>
                    { pieces && pieces.map((piece) => (

                        <GridListTile key={piece.imageurl} cols={1} style={{overflow: 'hidden'}}>
                            <img src={piece.imageurl}/>
                        </GridListTile>
                        
                    ))}
                </GridList>
            </div>
        </div>            
    )}
                


export default Gallery