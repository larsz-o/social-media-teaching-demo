import { combineReducers } from 'redux';

const keywords = (state = [
    {name: 'protection', group: 1}, 
    {name: 'Trump', group: 1},
    {name: 'wall', group: 1},
    {name: 'defense', group: 1}, 
    {name: 'contracts', group: 1}, 
    {name: 'secure', group: 1},
    {name: 'drug-smuggling', group: 1}, 
    {name: 'border crossers', group: 1}, 
    {name: 'illegal', group: 1}, 
    {name: 'aliens', group: 1}, 
    {name: 'immigration', group: 2}, 
    {name: 'nation', group: 2}, 
    {name: 'land', group: 2}, 
    {name: 'customs', group: 2}, 
    {name: 'border patrol', group: 2}, 
    {name: 'wall', group: 2}, 
    {name: 'Rio Grande', group: 2}, 
    {name: 'Trump', group: 2}, 
    {name: 'immigrants', group: 2}, 
    {name: 'immigrant', group: 2}, 
    {name: 'drug', group: 2}, 
    {name: 'Congress', group: 2}, 
    {name: 'nation', group: 3}, 
    {name: `O'odham`, group: 3}, 
    {name: 'immigrants', group: 3},
    {name: 'immigrant', group: 3},  
    {name: `controversial`, group: 3},
    {name: `ancestral`, group: 3},
    {name: `struggling`, group: 3},
    {name: `incarceration`, group: 3},
    {name: `surveillance`, group: 3},
    {name: `asylum`, group: 3},
], action) => {
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

/// group 1: right
// group 2 : center
// group 3: left