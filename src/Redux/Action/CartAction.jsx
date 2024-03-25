import { ActionTypes } from '../Constants/Constants';

export const addCart = (payload) =>{
    return {
        type : ActionTypes.AddCart,
        payload : payload,
    };
};

export const removeCart = (payload) =>{
    return {
        type : ActionTypes.RemoveCart,
        payload : payload,
    };
};

export const emptyCart = (payload) =>{
    return {
        type : ActionTypes.EmptyCart,
        payload : payload,
    };
};