import { createAction, props } from "@ngrx/store";

export const increment = createAction('[AdvancedCounter] Counter Increment', props<{steps: number}>());
export const decrement = createAction('[AdvancedCounter] Counter Decrement', props<{steps: number}>());
export const reset = createAction('[AdvancedCounter] Counter Reset'); 