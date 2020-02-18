
import { combineReducers } from 'redux';
import keywords from './reducers/keywords';
import data from './reducers/data';

const rootReducer = combineReducers({
keywords,
data
});

export default rootReducer;