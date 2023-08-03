import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterInterface } from "../interfaces/CounterInterface";

const selectAdvancedCounterSelect = createFeatureSelector<CounterInterface>('advancedCounter');

export const advancedCountSelect = createSelector(
    selectAdvancedCounterSelect,
    (state: CounterInterface) => state.count
)