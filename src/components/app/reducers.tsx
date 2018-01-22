import { createStore, combineReducers } from 'redux';
import { setCurrentUser, getCurrentUser } from './actions';

const INITIAL_STATE = {
    setCurrentUser: null
};

export function reducers(state = INITIAL_STATE, action) {
    // console.log("====>", state, action);
    switch (action.type) {
        case action.SET_CURRENT_USER:
            return Object.assign({}, state, {
                user: action.data
            });
        case action.GET_CURRENT_USER:
            return Object.assign({}, state, {
                user: action.data
            });
            break;
        default:
            return state;
    }
}