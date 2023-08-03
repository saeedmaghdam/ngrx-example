import { createAction } from "@ngrx/store";

export const increment = createAction('[Counter] Counter Increase');
export const decrement = createAction('[Counter] Counter Decrease');
export const reset = createAction('[Counter] Counter Reset');