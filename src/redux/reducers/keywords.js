import { combineReducers } from 'redux';

const keywords = (state = [
    {name: 'Trump', group: 1, value: 1},  
    {name: 'drug-smuggling', group: 1, value: 5},
    {name: `authority`, group: 1, value: 1},
    {name: `Bush`, group: 1, value: 1},
    {name: 'BORTAC', group: 1, value: 1},
    {name: 'sniper', group: 1, value: 1},
    {name: 'grenades', group: 1, value: 1},
    {name: 'armed', group: 1, value: 1},
    {name: 'drug', group: 1, value: 5}, 
    {name: 'smuggling', group: 1, value: 1}, 
    {name: 'crossers', group: 1, value: 5}, 
    {name: 'illegal', group: 1, value: 10}, 
    {name: 'crossed', group: 1, value: 10}, 
    {name: 'illegally', group: 1, value: 10},
    {name: 'enforcing', group: 1, value: 10}, 
    {name: 'aliens', group: 1, value: 10}, 
    {name: 'patrol', group: 1, value: 1}, 
    {name: 'Rio', group: 2, value: 1},     
    {name: 'Grande', group: 2, value: 10},
    {name: 'federal', group: 2, value: 1},
    {name: 'drug', group: 2, value: 1}, 
    {name: 'Native', group: 2, value: 1},
    {name: 'American', group: 2, value: 1},
    {name: 'Democrats', group: 2, value: 1},
    {name: 'Republicans', group: 2, value: 1},
    {name: 'environment', group: 2, value: 1},
    {name: 'Congress', group: 2, value: 1}, 
    {name: 'Rep.', group: 2, value: 1}, 
    {name: 'constitutional', group: 2, value: 1},
    {name: 'nation', group: 3, value: 1}, 
    {name: `O'odham`, group: 3, value: 1},   
    {name: `controversial`, group: 3, value: 1},
    {name: 'environment', group: 3, value: 1},
    {name: 'tribal', group: 3, value: 1},
    {name: `ancestral`, group: 3, value: 10},
    {name: `struggling`, group: 3, value: 10},
    {name: `incarceration`, group: 3, value: 10},
    {name: `surveillance`, group: 3, value: 10},
    {name: `devaluation`, group: 3, value: 1},
    {name: `money`, group: 3, value: 1},
    {name: `tenants`, group: 3, value: 1},
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
