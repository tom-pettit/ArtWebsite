import React from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

class SignInForm extends React.Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signIn(this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        const { authError, authSuccess } = this.props
        return (
            <form onSubmit={this.handleSubmit}>
                <input id='email' onChange={this.handleChange} placeholder='email'></input>
                <input id='password' onChange={this.handleChange} placeholder='password'></input>
                <button href='/porfolio'>Submit</button>
                <div>
                    <p style={{fontFamily: 'Work Sans', fontWeight: 'bold', color: 'red'}}>
                        {authError ? authError : null}
                    </p>
                    <p style={{fontFamily: 'Work Sans', fontWeight: 'bold', color: 'green'}}>
                        {authSuccess ? authSuccess : null}
                    </p>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError,
        authSuccess: state.auth.authSuccess
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)