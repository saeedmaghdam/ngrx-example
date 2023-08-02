import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterInterface } from "../interfaces/CounterInterface";

const selectCounterState = createFeatureSelector<CounterInterface>('counter');

export const countSelect = createSelector(
    selectCounterState,
    (state: CounterInterface) => state.count
)