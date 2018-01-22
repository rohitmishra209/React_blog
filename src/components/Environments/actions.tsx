const GET_ENVIRONMENTS = "GET_ENVIRONMENTS";
const ADD_ENVIRONMENT = "ADD_ENVIRONMENT";
const UPDATE_ENVIRONMENT = "UPDATE_ENVIRONMENT";
const DELETE_ENVIRONMENT = "DELETE_ENVIRONMENT";

export function addEnvironment(environment: any) {
    return {
        type: ADD_ENVIRONMENT,
        data: environment
    }
}

export function updateEnvironment(environment: any) {
    return {
        type: UPDATE_ENVIRONMENT,
        data: environment
    }
}

export function deleteEnvironment(uid: string) {
    return {
        type: DELETE_ENVIRONMENT,
        data: {uid}
    }
}

export function getEnvironments() {
    return {
        type: GET_ENVIRONMENTS
    }
}