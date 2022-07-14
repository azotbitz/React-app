import {ERROR_TODOS, GET_TODOS, LOADING_TODOS} from "./actionTypes";

export const getTodos = (data) => ({
    type: GET_TODOS,
    payload: data
});

export const getLoading = () => ({
    type: LOADING_TODOS
});

export const getError = (e) => ({
    type: ERROR_TODOS,
    payload: e.toString()
})