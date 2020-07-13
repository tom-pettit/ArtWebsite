import React from 'react'
import { connect } from 'react-redux'
import { addForSalePiece } from '../../store/actions/piecesActions'

class AddForSalePieceForm extends React.Component {

    state = {
        title: '',
        imageurl: '',
        description: '',
        price: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addForSalePiece(this.state)
        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        const { createError, createSuccess } = this.props

        return (
            <form onSubmit={this.handleSubmit}>
                <input id='title' onChange={this.handleChange} placeholder='title'></input>
                <input id='description' onChange={this.handleChange} placeholder='description'></input>
                <input id='imageurl' onChange={this.handleChange} placeholder='image url'></input>
                <input id='price' onChange={this.handleChange} placeholder='price'></input>

                <button>Create</button>
                <div>
                    <p style={{fontFamily: 'Work Sans', fontWeight: 'bold', color: 'red'}}>
                        {createError ? createError : null}
                    </p>
                    <p style={{fontFamily: 'Work Sans', fontWeight: 'bold', color: 'green'}}>
                        {createSuccess ? createSuccess : null}
                    </p>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addForSalePiece: (article) => {
            dispatch(addForSalePiece(article))
        }
    }
}

const mapStateToProps = (state) => {
    console.log('STATE YOU WANT', state)
    return {
        createError: state.piece.createError,
        createSuccess: state.piece.createSuccess
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForSalePieceForm)