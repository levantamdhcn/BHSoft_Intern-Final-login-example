interface userInfo {
    firstName?: string
    lastName?: string
}

interface loginState {
    loggedIn?: boolean
    loading?: boolean
    userInfo?: userInfo
    message?: string
}

interface action {
    type?: string
    payload?: string
}

const initialState: loginState = {
    loggedIn: false,
    loading: false,
    userInfo: {
        firstName: '',
        lastName: ''
    },
    message: ''
}


const loginReducers = (state: loginState = initialState, action: action) => {
    switch(action.type) {
        case 'USER_LOGIN_REQUEST':
            return {
                ...state,
                loading: true
            } 
        case 'USER_LOGIN_SUCCESS':
            return { 
                ...state,
                loggedIn: true,
                loading: false, 
                userInfo: action.payload
            }
        case 'USER_LOGIN_FAIL':
            return { 
                ...state,
                loading: false, 
                loggedIn: false,
            }
        case 'USER_LOGOUT':
            return {
                ...state,
                loading: false, 
                loggedIn: false,
                userInfo: action.payload
            }
        default: 
            return state
    }
}

export default loginReducers
