
import * as ActionTypes from './ActionTypes';


export const Leaders = (state = {
    isLoading : true,
    errMess : null,
    leaders:[]
} , action) => {
    switch(action.type) {
        case ActionTypes.ADD_LEADERS:
            return {...state, isLoading :false, errMess : null, leaders: action.payload }
        
        case ActionTypes.LEADERS_LOADING:
            //spread operator//taking current value of state and whatever I provide next will be taken as a modification to the state
            //state itself cannot be immutable therefore modification and returning an immutable return statement
            return {...state, isLoading :true, errMess : null, dishes: [] }
            
        
        case ActionTypes.LEADERS_FAILED:
            return {...state, isLoading :false, errMess : action.payload, leaders: [] }

        default:
            return state;
    }
}