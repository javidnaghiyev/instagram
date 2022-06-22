import React from 'react';
import Header from './components/Header/Header.js'
import HomePage from './components/HomePage/HomePage';
import Auth from './components/Auth/Auth'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { globalClasses } from './globalStyles';
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
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact component={HomePage}/>
        <Route path='/auth' exact component={Auth} />
      </Routes>
      <HomePage />
    </BrowserRouter>
    </>
  )
}

export default App