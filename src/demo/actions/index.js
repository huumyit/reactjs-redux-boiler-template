import * as types from './../constants/ActionTypes';

export const status = () => {
    return {
        type: types.Toggle_Status
    }
}

export const sort = (sort) => {
    return {
        type: types.SORT,
        sort // sort: sort
    }
}