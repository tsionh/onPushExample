import { createReducer, on, createSelector } from '@ngrx/store';
import { increment, decrement, reset, incrementCounter2 } from './counter.actions';

interface counterInterface {
    counter: number
    counter2: number
}
 
export const initialState: counterInterface = {
    counter: 0,
    counter2: 0,
};
 
const _counterReducer = createReducer(
    initialState,

    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }),

    on(incrementCounter2, (state) => {
        return {
            ...state,
            counter2: state.counter2 + 1
        }
    }),

    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        }
    }),

    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        }
    })
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}

export const getCounterReducer = (state) => state.counterReducer;

export const getCounter = createSelector(
    getCounterReducer,
    (state: counterInterface) => state.counter
  );

export const getCounter2 = createSelector(
getCounterReducer,
(state: counterInterface) => state.counter2
);