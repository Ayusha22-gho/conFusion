import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import { InitialFeedback } from './forms';

//CRAETING REDUX STORE
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
           //key
            dishes : Dishes,
            comments:Comments,
            promotions:Promotions,
            leaders:Leaders,
            ...createForms({
                feedback :InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)//enhancer as second parameter //return store enhancer
    );

    return store;
}