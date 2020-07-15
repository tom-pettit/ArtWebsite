import React from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import FaceIcon from '@material-ui/icons/Face';
import { connect } from 'react-redux';
import { delForSale } from '../../store/actions/piecesActions'
import { withRouter } from 'react-router'


const DeleteButtonForSale = (props) => {
    console.log('DEL BUTTON', props)
    const {auth} = props
    const handleClick = () => {
        props.delForSale(props.id)
    }

    const editButton = auth.uid ? <Button onClick={handleClick} color="inherit"><DeleteIcon color='black' /></Button> : <Button href='/sign_in' color="inherit"><FaceIcon color='black' /></Button>
    return (
        <div>{editButton}</div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delForSale: (id) => {
            dispatch(delForSale(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButtonForSale)