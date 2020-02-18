
import { combineReducers } from 'redux';

const articles = (state = [{ title: 'title', body: '<p>Body</p>', image: 'something.png', showRating: 1 }], action) => {
    if (action.type === 'SET_ARTICLES'){
        return action.payload;
    } 
    return state
}
export default combineReducers({
    articles
});