import { CalculatePriceState, Cost } from "../models/Cost";

export const costsSelector = (state: CalculatePriceState): Cost[] => (state.costs)