export type Cost = {
    name: string, 
    price: number
}

export type StateType = {
    costs: Cost[] | null;
    rows: number;
    result: number;
    step: STEP;
    gain: number;
}

export enum STEP {
    VARIABLE_COSTS = 'VARIABLE_COSTS',
    RESULT = 'RESULT',
    GAIN = 'GAIN',
    GET_MY_PRICE = 'GET_MY_PRICE'
}

export type AppStateType ={
    costs: StateType,
}