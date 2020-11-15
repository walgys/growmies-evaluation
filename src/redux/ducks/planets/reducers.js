import { combineReducers } from "redux"
import * as types from "./types"

const planetsReducer = (state = {items: [], loading: false, error: ''}, action) => {
    switch ( action.type ){
        case types.FETCH_PLANETS_START:
            return {...state, loading: true}
        case types.FETCH_PLANETS_COMPLETED:
            return {...state, items: action.payload.planets, loading: false}
        case types.FETCH_PLANETS_FAILED:
            return {...state, loading: false, error: action.payload.error}
        default:
            return state
    }
}

const reducer = combineReducers( {
   planetList: planetsReducer
} );

export default reducer