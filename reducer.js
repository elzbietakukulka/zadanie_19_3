
// Combine reducers
import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';

const app = combineReducers({
    comments,
    users
});



/* One reducer

import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions';

const initialState = {
	comments: [],
	users: []
};

function reducer(state = initialState, action) {
    switch(action.type) {
        
        case ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                {
                    id: action.id,
                    text: action.text,
                    votes: 0
                }
                , ...state]
            })
        
        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            })
        
        case EDIT_COMMENT:
        	return Object.assign({}, state, {
        		comments: [comments: state.comments.filter(comment => comment.id !== action.id),
        		{
        			id: action.id,
        			text: action.text,
        			votes: 0
        		}]
        	})
       
        case THUMB_UP_COMMENT:
        	return Object.assign({}, state, {
        		comments: [comments: state.comments.filter(comment => comment.id !== action.id),
        		{
        			id,
        			text,
        			votes: action.votes
        		}]
        	})

        case THUMB_DOWN_COMMENT:
        	return Object.assign({}, state, {
        		comments: [comments: state.comments.filter(comment => comment.id !== action.id),
        		{
        			id,
        			text,
        			votes: action.votes
        		}]
        	})
        
        default:
            return state;
    }
}


