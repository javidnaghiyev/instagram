import React from 'react';
import Header from './components/Header/Header.js'
import HomePage from './components/HomePage/HomePage';
import { globalClasses } from './globalStyles';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPosts, likePost } from './actions/posts'

const App = () => {
  const dispatch = useDispatch()
  const currentID = useSelector((state) => state.postID)
  
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch, currentID])

  return (
    <>
    <Header></Header>
    <HomePage sx={globalClasses.homePage}></HomePage>
    </>
  )
}

export default App