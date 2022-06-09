import React, { Component }  from 'react';
import {classes} from './styles';
import { postsdb } from './poststdb';
import { Container, Box, Typography, Modal, Button} from '@mui/material';
import { useState, useEffect } from 'react';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { useSelector, useDispatch } from 'react-redux'
import { getPostID, showCreateAction, deletePost } from '../../actions/posts';
import { getPosts } from '../../actions/posts';
import * as api from '../../api/index'

const Post = () => {


    const posts = useSelector((state) => state.posts)
    const dispatch = useDispatch()
    const postID = useSelector((state) => state.postID)
    // post id
    const [currentID, setCurrentID] = useState(null)
    function RsendPostID(id) {
        setCurrentID(id)
        dispatch(getPostID(id))
        setOpen(true)
    }
    
    // MODAL
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setCurrentID(null)
        setOpen(false)
    }

    //Closes modal and opens create post
    const editPost = () => {
        setOpen(false);
        window.scrollTo(0,0)
        dispatch(showCreateAction())
    }

    const removePost = () => {
        dispatch(deletePost(currentID))
    }
 
    //Liking
    const likePost = async (id) => {
        await api.likePost(id)
    }

    return <>
    {!posts.length ? <CircularProgress /> :
        <Container sx={classes.container} xs={12}>
                    {
                        posts.slice(0).reverse().map(post => {
                            return<>
            <Box component='article' sx={classes.postArticle} xs={12}>
                <Box component='div' xs={12}> 
                                <Box component='div' sx={classes.header}>
                                    <Container sx={classes.headerContainer}>
                                        <Box component='div' sx={classes.ppHolder}>
                                            <Box component='div' sx={classes.border}></Box>
                                            <img src={post.profilePicture} />
                                        </Box>
                                        <Typography sx={classes.accountName}>{post.name}</Typography>
                                        <MoreHorizIcon sx={{position: 'absolute', right: '10px'}}
                                            onClick={() => RsendPostID((post._id))}
                                        ></MoreHorizIcon>
                                        <Modal
                                
                                            open={open}
                                            onClose={() => handleClose()}
                                            aria-labelledby="child-modal-title"
                                            aria-describedby="child-modal-description"
                                        >
                                            <Box sx={classes.modal}>
                                                <Button onClick={() => editPost()}>Edit Post</Button><br />
                                                <Button onClick={() => removePost()}>Delete Post</Button>
                                            </Box>


                                        </Modal>
                                    </Container>
                                </Box>
                                <Box component='div'>
                                    <Box component='div' sx={classes.imgHolder}>
                                            <Box component='img' src={post.image} sx={classes.img}
                                            onDoubleClick={() => likePost(post._id)}
                                            ></Box>
                                    </Box>
                                </Box>
                                    
                                
                                <Box component='div' sx={classes.detailsHolder}>
                                    <Box component='div' sx={classes.details}>
                                        <Box component='div' sx={classes.detailsButtons}>
                                            <FavoriteBorderIcon fontSize='medium'></FavoriteBorderIcon>
                                            <ModeCommentOutlinedIcon fontSize='medium'></ModeCommentOutlinedIcon>
                                            <SendOutlinedIcon></SendOutlinedIcon>
                                            <BookmarkBorderOutlinedIcon></BookmarkBorderOutlinedIcon>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography>{post.likeCount}</Typography>
                                    <Typography>{post.title}</Typography>
                                    <Typography>{post.location}</Typography>
                                </Box>
                </Box>
            </Box>
        </>
                        })
                    }
                        
                        
        </Container>
}
    </>
                
}

export default Post