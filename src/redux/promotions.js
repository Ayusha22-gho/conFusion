import * as ActionTypes from './ActionTypes';


export const Promotions = (state = {
    isLoading :true,
    errMess : null,
        promotions:[]
} , action) => {
    switch(action.type) {
        case ActionTypes.ADD_PROMOS:
            return {...state, isLoading :false, errMess : null, promotions: action.payload }

        case ActionTypes.PROMOS_LOADING:
            //spread operator//taking current value of state and whatever I provide next will be taken as a modification to the state
            //state itself cannot be immutable therefore modification and returning an immutable return statement
            return {...state, isLoading :true, errMess : null, promotions: [] }
        
        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading :false, errMess : action.payload, promotions: [] }
        default://DISHES
            return state;
    }
}