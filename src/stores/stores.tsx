import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import loginReducers from './reducers/loginReducers'

const rootReducers = combineReducers({
    loginState: loginReducers,
})

const initialState = {
    
}

const middleWare = [thunk]

export const stores = createStore(
    rootReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export type RootState = ReturnType<typeof stores.getState>



