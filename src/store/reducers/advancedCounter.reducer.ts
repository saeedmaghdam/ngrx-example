import { createReducer, on } from "@ngrx/store";
import { CounterInterface } from "../interfaces/CounterInterface";
import * as actions from "../actions/advancedCounter.actions"

const initialState: CounterInterface = {
    count: 0
};

export const advancedCounterReducer = createReducer(initialState, 
    on(actions.increment, (state: CounterInterface, {steps}) => ({...state, count: state.count + steps})),
    on(actions.decrement, (state: CounterInterface, {steps}) => ({...state, count: state.count - steps})),
    on(actions.reset, (state: CounterInterface) => ({...state, count: 0}))
);