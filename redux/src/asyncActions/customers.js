import { addUsersAction } from "../store/userReducer"

export function fetchUsers() {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => dispatch(addUsersAction(json)))
    }
}