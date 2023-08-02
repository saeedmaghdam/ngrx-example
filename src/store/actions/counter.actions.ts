import { createAction } from "@ngrx/store";

export const increment = createAction('[Counter] Increase Counter');
export const decrement = createAction('[Counter] Decrease Counter');
export const reset = createAction('[Counter] Reset Counter');