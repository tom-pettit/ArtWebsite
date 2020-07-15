import React from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import FaceIcon from '@material-ui/icons/Face';
import { connect } from 'react-redux';


const AddNewForSaleButton = (props) => {
    console.log(props)
    const {auth} = props
    const editButton = auth.uid ? <Button href='/add_piece_for_sale' color="inherit"><AddIcon color='black' /></Button> : <Button href='/sign_in' color="inherit"><FaceIcon color='black' /></Button>
    
    return (
        <div>{editButton}</div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(AddNewForSaleButton)