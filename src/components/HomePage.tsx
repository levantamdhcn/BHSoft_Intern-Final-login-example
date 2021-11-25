import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userActions } from '../stores/index'

function HomePage() {
    const dispatch = useDispatch()
    const { logout } = bindActionCreators(userActions, dispatch)
    const userInfoState = useSelector((state: any) => state.loginState.userInfo)

    const handleLogout = () => {
        logout(userInfoState.email,userInfoState.password)
    }
    return (
        <div>
            <h1>Welcome {userInfoState.email}</h1>
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}

export default HomePage
