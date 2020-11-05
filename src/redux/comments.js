
import * as ActionTypes from './ActionTypes';


export const Comments = (state = {//here Comments is reducer taking 2 arguments => state and action
    errMess:null,
    comments : []
} , action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading :false, errMess : null, comments: action.payload }

        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading :false, errMess : action.payload, comments: [] }

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            return {...state, comments: state.comments.concat(comment)};//not in memory 
            
            
        default://DISHES
            return state;
    }

}