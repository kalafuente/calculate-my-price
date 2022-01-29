import { ActionCreator } from "../models/ActionCreator"
import { Cost, CalculatePriceState } from "../models/Cost"

//actions
export const ADD_ROW: string = 'ADD_ROW'
export const SET_COSTS: string = 'SET_COSTS'

export const initState: CalculatePriceState = {
    costs: null,
    rows: 1
}

//reducer
export function exams(state: CalculatePriceState = initState, action: ActionCreator): CalculatePriceState {
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
