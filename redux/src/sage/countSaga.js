import {put} from 'redux-saga/effects'
import { incrementAction } from '../store/countReducer'

const delay = ms => new Promise(res => setTimeout(res, ms))

function* incrementWorker() {
    yield delay(1000)
    yield put(incrementAction())
}

function* decrementWorker() {

}

function* countWatcher() {

}