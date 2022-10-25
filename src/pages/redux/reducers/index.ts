import { combineReducers } from 'redux';
import auth from './auth';
import languageReducer from './languageReducer';

const rootReducer = combineReducers({
    auth,
    language: languageReducer,
})

export default rootReducer;
