import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const incrementCounter2 = createAction('[Counter Component] Increment Counter 2');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');