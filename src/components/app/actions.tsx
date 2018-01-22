const IS_LOGGED_IN = "IS_LOGGED_IN";
const LOGIN = "LOGIN";
const SET_CURRENT_USER = "SET_CURRENT_USER";
const GET_CURRENT_USER = "GET_CURRENT_USER";

export function isLoggedIn() {
    return {
        type: IS_LOGGED_IN
    }
}

export function setCurrentUser(user: any) {
    return {
        type: SET_CURRENT_USER,
        data: {user}   
    }    
}

export function getCurrentUser() {
    return {
        type: GET_CURRENT_USER
    }    
}