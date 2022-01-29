import { ActionCreator } from "../models/ActionCreator"
import { Cost, StateType, STEP } from "../models/Cost"

//actions
export const ADD_ROW: string = 'ADD_ROW'
export const SET_COSTS: string = 'SET_COSTS'
export const ADD_RESULT: string = 'ADD_RESULT'
export const FINISH_STEP: string = 'FINISH_STEP'
export const SET_GAIN: string = 'SET_GAIN'

export const initState: StateType = {
    costs: [],
    rows: 1,
    result: 0,
    step: STEP.VARIABLE_COSTS,
    gain: 0
}
const getNextStep = {
    'VARIABLE_COSTS': STEP.RESULT,
    'RESULT': STEP.GAIN,
    'GAIN': STEP.GET_MY_PRICE
}

//reducer
export function costs(state: StateType = initState, action: ActionCreator): StateType {
    switch (action.type) {
        case SET_COSTS:
            return {
                ...state,
                costs: action.costs
            }
        case ADD_ROW:
            return{
                ...state,
                rows: state.rows + 1
            }
        case ADD_RESULT:
            return{
                ...state,
                result: action.result
            }
        case SET_GAIN:
            return{
                ...state,
                gain: action.gain
            }
        case FINISH_STEP:
            return{
                ...state,
                step: getNextStep[state.step]
                }
        default:
            return state
    }
}

// action creators
export const setCosts = (costs: Cost[]) => ({
    type: SET_COSTS,
    costs: costs
})

export const addRow = () => ({
    type: ADD_ROW,
})

export const setResult = (result: number) => ({
    type: ADD_RESULT,
    result: result
})

export const setGain = (gain: number) => ({
    type: SET_GAIN,
    gain: gain
})

export const finishStep = () => ({
    type: FINISH_STEP,
})
