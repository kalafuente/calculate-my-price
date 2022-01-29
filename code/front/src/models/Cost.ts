export type Cost = {
    name: string, 
    price: number
}

export type CalculatePriceState = {
    costs: [Cost] | null;
    rows: number;
}

export type StateType = {
    costs: CalculatePriceState;
}