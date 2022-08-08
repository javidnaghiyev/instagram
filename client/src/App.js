import React from 'react';
import Header from './components/Header/Header.js'
import HomePage from './components/HomePage/HomePage';
import Auth from './components/Auth/Auth'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { globalClasses } from './globalStyles';
import { useEffect } from 'react';
import { getPosts, likePost } from './actions/posts'
import { getProfile } from './actions/user.js';
import Profile from './components/Profile/Profile.js';

const App = () => {
  const dispatch = useDispatch()
  const currentID = useSelector((state) => state.postID)
  
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch, currentID])
  
  useEffect(() => {
    dispatch(getProfile())
  }, [])

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<div><Header /><HomePage /></div>} />
        <Route path='/auth' exact element={<Auth />} />
        <Route path='/user/:id' element={<div><Header /><Profile /></div>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App