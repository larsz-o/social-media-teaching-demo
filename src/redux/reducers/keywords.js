import { combineReducers } from 'redux';

const keywords = (state = [{name: 'test', group: 1}, {name: 'testing', group: 2}, {name: 'This', group: 1}], action) => {
    if (action.type === 'SET_KEYWORDS'){
        return action.payload;
    } else if (action.type === 'ADD_KEYWORD'){
        return [...state, action.payload];
    } else {
        return state
    }
}
export default combineReducers({
    keywords
});