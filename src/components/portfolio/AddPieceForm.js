import React from 'react'
import { connect } from 'react-redux'
import { addPiece } from '../../store/actions/piecesActions'

class AddPieceForm extends React.Component {

    state = {
        title: '',
        imageurl: '',
        description: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addPiece(this.state)
        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        const { uploadError, uploadSuccess } = this.props

        return (
            <form onSubmit={this.handleSubmit}>
                <input id='title' onChange={this.handleChange} placeholder='title'></input>
                <input id='description' onChange={this.handleChange} placeholder='description'></input>
                <input id='imageurl' onChange={this.handleChange} placeholder='image url'></input>
                <button>Upload</button>
                <div>
                    <p style={{fontFamily: 'Work Sans', fontWeight: 'bold', color: 'red'}}>
                        {uploadError ? uploadError : null}
                    </p>
                    <p style={{fontFamily: 'Work Sans', fontWeight: 'bold', color: 'green'}}>
                        {uploadSuccess ? uploadSuccess : null}
                    </p>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPiece: (article) => {
            dispatch(addPiece(article))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        uploadError: state.piece.uploadError,
        uploadSuccess: state.piece.uploadSuccess
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPieceForm)