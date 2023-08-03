import { createReducer, on } from "@ngrx/store";
import { CounterInterface } from "../interfaces/CounterInterface";
import * as actions from "../actions/counter.actions"

const initialState: CounterInterface = {
    count: 0
};

export const counterReducer = createReducer(initialState, 
    on(actions.increment, (state: CounterInterface) => ({...state, count: state.count + 1})),
    on(actions.decrement, (state: CounterInterface) => ({...state, count: state.count - 1})),
    on(actions.reset, (state) => ({...state, count: 0}))
);