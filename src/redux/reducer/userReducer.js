const initialState = {
    user: {
        email: '',
        password: ''
    },
    loggedIn: false
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_USER':
            return {
                ...state,
                user: action.user,
                loggedIn: action.loggedIn
            }
        case 'LOGGED_OUT':
            return {
                ...state,
                loggedIn: false
            }
        default:
            return state
    }
}

export default userReducer;