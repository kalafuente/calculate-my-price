import { Cost, AppStateType, STEP } from '../models/Cost';

export const costsSelector = (state: AppStateType): Cost[] => (state.costs.costs)
export const resultSelector = (state: AppStateType): number => (state.costs.result)
export const stepSelector = (state: AppStateType): STEP => (state.costs.step)