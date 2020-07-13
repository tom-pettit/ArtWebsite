import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import ShopNavbar from '../navbars/ShopNavbar'
import ShopGallery from './ShopGallery'

class Shop extends React.Component {
    render() {
        const {for_sale} = this.props
        console.log('FOR SALE TING', for_sale)
        return (
            <div>
                <ShopNavbar />
                <ShopGallery for_sale={for_sale}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        for_sale: state.firestore.ordered.for_sale
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'for_sale'}
    ])
)(Shop)