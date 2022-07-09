import React, { Component }  from 'react';
import { Container, Paper } from '@mui/material';
import { useState } from 'react'

import StoryBox from "../StoryBox/StoryBox";
import {classes} from './styles'
import Post from '../Post/Post'

const Posts = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    if(!user){
        return <>
            <Paper>
                Please log in
            </Paper>
        </>
    }else{
        return <>
        <Container sx={classes.container} style={{marginTop: "60px"}}>
            <StoryBox></StoryBox>
            <Post></Post>
        </Container>
        </>
    }
}

export default Posts