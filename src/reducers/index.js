import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';


const rootReducer = combineReducers({
    form // equals to form: form

});

export default rootReducer;
