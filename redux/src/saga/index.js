import { all } from "redux-saga/effects";
import { countWatcher } from "./countSaga";
import { userWatcher } from "./userSage";

export function* rootWatcher() {
    yield all([countWatcher(), userWatcher()])
}