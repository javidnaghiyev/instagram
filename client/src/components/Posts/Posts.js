import React, { Component }  from 'react';
import StoryBox from "../StoryBox/StoryBox";
import {classes} from './styles'
import { Container } from '@mui/material';
import Post from '../Post/Post'

const Posts = () => {
    return <>
    <Container sx={classes.container} style={{marginTop: "60px"}}>
        <StoryBox></StoryBox>
        <Post></Post>
    </Container>
    </>
}

export default Posts