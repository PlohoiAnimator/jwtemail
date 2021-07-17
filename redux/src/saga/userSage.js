import { call, put, takeEvery } from "redux-saga/effects"
import { FETCH_USERS, setUsers } from "../store/userReducer"

const fetchUsers = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

function* fetchWorker() {
    const data = yield call(fetchUsers)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setUsers(json))
}

export function* userWatcher() {
    yield takeEvery(FETCH_USERS, fetchWorker)
}
