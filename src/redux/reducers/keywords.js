import { combineReducers } from 'redux';

const keywords = (state = [{name: 'immigrant', group: 1}, {name: 'immigration', group: 2}, {name: 'Trump', group: 1}], action) => {
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