import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { AnyAction } from 'redux'
import { RootState } from "../stores"
import axios from 'axios'

export const login = (email: string,password: string): ThunkAction<Promise<void>, RootState, unknown,AnyAction> => 
async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
    try{
        await axios.post('https://httpbin.org/post', {
            email: email,
            password: password,
        })
        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: {
                email,
                password
            }
        })
    }
    catch(error){
        dispatch({
            type: 'USER_LOGIN_FAIL',
            payload: 'Wrong username or password'
        })
    }
}

export const logout = (email: string,password: string): ThunkAction<Promise<void>, RootState, unknown,AnyAction> => 
async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
    try{
        await axios.delete('https://httpbin.org/delete', { data: {
            email: email,
            password: password,
        }})
        dispatch({
            type: 'USER_LOGOUT',
            payload: {
                email: '',
                password: ''
            }
        })
    }
    catch(error){
        dispatch({
            type: 'USER_LOGIN_FAIL',
            payload: 'Wrong username or password'
        })
    }
}