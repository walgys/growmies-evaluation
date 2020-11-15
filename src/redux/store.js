import { createStore, applyMiddleware, combineReducers} from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as reducers from './ducks'

const middleWares = [
    ReduxThunk,
]
    


const rootReducer = combineReducers( reducers );

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleWares))
    )

export default store

