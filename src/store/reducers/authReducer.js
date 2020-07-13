const initState = {
    authError: null,
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('Login failed')
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('Login successful')
            return {
                ...state,
                authSuccess: 'Login Successful'
            }
        default:
            return state
    }
}   

export default authReducer