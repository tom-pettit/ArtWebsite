import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import Gallery from './Gallery'
import PortfolioNavbar from '../navbars/PortfolioNavbar'

class Portfolio extends React.Component {
    render() {
        const {pieces} = this.props
        console.log(pieces)
        return (
            <div>
                <PortfolioNavbar />
                <Gallery pieces={pieces}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pieces: state.firestore.ordered.pieces
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'pieces'}
    ])
)(Portfolio)