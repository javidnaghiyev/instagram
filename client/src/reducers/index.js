import { combineReducers } from 'redux';
import posts from './posts'
import showCreate from './showCreate';
import getPostID from './getPostID';

export default combineReducers({ posts, showCreate, getPostID })