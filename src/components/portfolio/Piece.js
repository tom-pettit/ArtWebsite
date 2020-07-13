import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core/styles';

const Piece = ({piece}) => {
    return (
        <GridListTile cols={piece.cols || 1}>
            <img src={piece.imageurl}/>
        </GridListTile>
    )
}

export default Piece