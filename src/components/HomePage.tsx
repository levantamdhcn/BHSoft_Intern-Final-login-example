import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userActions } from '../stores/index'

const buttonStyles = {
    cursor: "pointer",
    padding: ".5rem 1rem",
    fontSize: "1.25rem",
    borderRadius: ".3rem",
    color: "#fff",
    backgroundColor: "#0d6efd",
    borderColor: "#0d6efd",
    display: "inline-block",
    fontWeight: "400",
    lineHeight: '1.5',
}

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
            <button onClick={handleLogout} style={buttonStyles}>
                Logout
            </button>
        </div>
    )
}

export default HomePage
