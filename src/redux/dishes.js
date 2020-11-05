import * as ActionTypes from './ActionTypes';


export const Dishes = (state = {
        isLoading:true ,
        errMess : null,
        dishes : []
    } , action) => {
    switch(action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading :false, errMess : null, dishes: action.payload }

        case ActionTypes.DISHES_LOADING:
            //spread operator//taking current value of state and whatever I provide next will be taken as a modification to the state
            //state itself cannot be immutable therefore modification and returning an immutable return statement
            return {...state, isLoading :true, errMess : null, dishes: [] }
        
        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading :false, errMess : action.payload, dishes: [] }

        default://DISHES
            return state;
    }
}