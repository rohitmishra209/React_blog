import { createStore, combineReducers } from 'redux';
import { findIndex } from 'lodash';
import { getEnvironments, addEnvironment, updateEnvironment, deleteEnvironment } from './actions';

const INITIAL_STATE = {
    listEnvironments: [{
        name: "env1"
    }],
    environment: {
        name: "Default Environment"
    }
};

export function reducers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case action.GET_ENVIRONMENTS:
            return Object.assign({}, {
                environments: state.listEnvironments
            });
        case action.ADD_ENVIRONMENT:
            return Object.assign({}, state, {
                listEnvironments: [...state.listEnvironments, action.data],
                environment: action.data
            });
        case action.UPDATE_ENVIRONMENT:
            const EnvIndex = findIndex(state.listEnvironments, action.data.uid);
            if (~EnvIndex)
                state.listEnvironments[EnvIndex] = action.data;

            return Object.assign({}, state, {
                environments: state.listEnvironments,
                environment: action.data
            });
        case action.DELETE_ENVIRONMENT:
            const EnvIndex2 = findIndex(state.listEnvironments, action.data.uid);
            if (~EnvIndex2)
                state.listEnvironments.splice(EnvIndex2, 1);

            return Object.assign({}, state, {
                environments: state.listEnvironments,
                environment: null
            });
        case action.ADD_ENVIRONMENT:
            return Object.assign({}, state, {
                listEnvironments: [...state.listEnvironments, action.data],
                environment: action.data
            });
        default:
            return state;
    }
}