import React, { Component }  from 'react';
import { useState } from 'react';
import { Container } from '@mui/material'
import ClickAwayListener from '@mui/base/ClickAwayListener';


import Posts from "../Posts/Posts";
import {classes} from './styles'
import createPost from '../CreatePost/createPost';
import Header from '../Header/Header'
import CreatePost from "../CreatePost/createPost";
import { useEffect } from 'react';

import store from '../../index'
import { hideCreateAction } from '../../actions/posts';

const HomePage = () => {
    const [showCreateState, setShowCreateState] =  useState(store.getState().showCreate)

    const setSetShowCreateStore = () => {
        setShowCreateState(store.getState().showCreate)
    }

    store.subscribe(setSetShowCreateStore)


    return <>
    { showCreateState  ? <CreatePost></CreatePost> : ''}
        <Container sx={classes.container} maxWidth='false'>
                <Container maxWidth='false'>
                    <Posts></Posts>
                    
                </Container>
        </Container>
    
    </>
}

export default HomePage