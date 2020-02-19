
import { combineReducers } from 'redux';

const articles = (state = [{ title: 'title', body: '<p> Body test test2 test1 </p>', image: 'something.png', showRating: 0 }, { title: 'title', body: '<p> Nothing here but test test test test test </p>', image: 'something.png', showRating: 0 }], action) => {
    if (action.type === 'SET_ARTICLES') {
        return action.payload;
    } else if (action.type === 'SORT_DATA') {
        let postsToAnalyze = state;
        let keywords = action.payload.keywords;
        // we need to look through each of our keywords to see if we can find them in our posts.
        for (let j = 0; j < keywords.length; j++) {
            // we search through our new array, called postsToAnalyze
            for (let i = 0; i < postsToAnalyze.length; i++) {
                // let's name the values of each object, within the body key, in a variable called data
                let data = postsToAnalyze[i].body;
                // we're going to use this variable count later to add any occurences of the keyword to the post object
                let count = postsToAnalyze[i].showRating;
                // we need to split this string into an array that we can search through, by splitting at all spaces. 
                let words = data.split(' ');
                // if we can find any of the keyword, we'll return an index of 0 or greater, which means we should then count all of the times that word appears.
                let index = words.indexOf(keywords[j].name);
                if (index >= 0) {
                    let match = words[index];
                    let all = words.filter(word => word === match);
                    let occurrence = all.length;
                    count += occurrence;
                }
                // if we've counted occurences, we'll add it to the original count. if we didn't find anything, we'll simply keep the count as it was, reassigning the showRating key to its original value
                postsToAnalyze[i].showRating = count;
            }
        }
        // next we need to sort these posts from highest ranked to lowest using this sorting method. 
        let sorted = postsToAnalyze.sort((a, b) => (b.showRating > a.showRating) ? 1 : -1);
        return sorted;
    } else {
        return state
    }
}
const icons = (state = ['email.png', 'facebook.png', 'twitter.png', 'linkedin.png']) => {
    return state;
}
const loading = (state = true, action) => {
    if (action.type === 'DONE_LOADING') {
        return false
    } else if (action.type === 'STILL_LOADING') {
        return true;
    } else {
        return state;
    }
}
export default combineReducers({
    articles,
    icons,
    loading
});