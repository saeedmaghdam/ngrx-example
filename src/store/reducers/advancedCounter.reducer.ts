import { createReducer, on } from "@ngrx/store";
import { CounterInterface } from "../interfaces/CounterInterface";
import * as actions from "../actions/advancedCounter.actions"

export const advancedCounterInitialState: CounterInterface = {
    count: 0
};

export const advancedCounterReducer = createReducer(advancedCounterInitialState, 
    on(actions.increment, (state: CounterInterface, {steps}) => ({...state, count: state.count + steps})),
    on(actions.decrement, (state: CounterInterface, {steps}) => ({...state, count: state.count - steps})),
    on(actions.reset, (state: CounterInterface) => ({...state, count: 0}))
);