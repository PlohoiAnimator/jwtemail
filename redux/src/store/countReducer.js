const defaultState = {
    count: 0
}

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

export default function countReducer(state=defaultState, action) {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + 1}
        case DECREMENT:
            return {...state, count: state.count - 1}
    }
    return state
}

export const incrementAction = () => ({type: INCREMENT})
export const decrementAction = () => ({type: DECREMENT})
