import { combineReducers } from 'redux';
import posts from './posts'
import showCreate from './showCreate';
import getPostID from './getPostID';
import authReducer from './auth';

export default combineReducers({ posts, showCreate, getPostID, authReducer })