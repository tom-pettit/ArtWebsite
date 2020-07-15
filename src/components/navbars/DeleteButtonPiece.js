import React from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import FaceIcon from '@material-ui/icons/Face';
import { connect } from 'react-redux';
import { delPiece } from '../../store/actions/piecesActions'
import { withRouter } from 'react-router'


const DeleteButtonPiece = (props) => {
    console.log('DEL BUTTON', props)
    const {auth} = props
    const handleClick = () => {
        props.delPiece(props.id)
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
        delPiece: (id) => {
            dispatch(delPiece(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButtonPiece)