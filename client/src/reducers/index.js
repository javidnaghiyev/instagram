import { combineReducers } from 'redux';
import posts from './posts'
import showCreate from './showCreate';
import getPostID from './getPostID';
import authReducer from './auth';
import userReducer from './user';

export default combineReducers({ posts, showCreate, getPostID, authReducer, userReducer })