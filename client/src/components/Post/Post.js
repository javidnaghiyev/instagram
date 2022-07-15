import React, { Component }  from 'react';
import {classes} from './styles';
import { postsdb } from './poststdb';
import { Container, Box, Typography, Modal, Button, TextField} from '@mui/material';
import { useState, useEffect } from 'react';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';

import { useSelector, useDispatch } from 'react-redux'
import { getPostID, showCreateAction, deletePost, comment, deleteComment } from '../../actions/posts';
import { getPosts } from '../../actions/posts';
import * as api from '../../api/index'

const Post = () => {


    const posts = useSelector((state) => state.posts)
    const dispatch = useDispatch()
    const postID = useSelector((state) => state.postID)

    const user = JSON.parse(localStorage.getItem('profile'))

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


    //comment
    const [commentData, setCommentData] = useState({comment: ''})
    const [commentIndex, setCommentIndex] = useState(null)

    const commentPost = () => {
        dispatch(comment(currentID, commentData))
    }

    //delete comment
    const deleteCommentDispatch = (postId, commentId) => {
        dispatch(deleteComment(postId, commentId))
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
                                        <Box>
                                            <Typography sx={classes.accountName}>{post.author}</Typography>
                                            <Typography sx={classes.location}>{post.location}</Typography>
                                        </Box>
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
                                <Box sx={classes.postBottom}>
                                    <Typography>{post.likes.length} likes</Typography>
                                    <Typography display='inline' marginRight='5px'>audi</Typography>
                                    <Typography variant='body2' display='inline' fontWeight='300'>{post.title}</Typography>
                                    <Box sx={classes.commentHolder}>
                                        {post.comments.map(comment => {
                                            return <>
                                            <Box position='relative'>
                                                <Typography variant='body1'>
                                                    {comment.author}
                                                </Typography>
                                                <Typography variant='body2'>
                                                    {comment.comment}
                                                </Typography>
                                                <DeleteIcon onClick={() => deleteCommentDispatch(post._id, comment.comment)} sx={{position: 'absolute', right: '0', zIndex: '5'}} fontSize='sm'></DeleteIcon>
                                            </Box>
                                            </>
                                        })}
                                    </Box>
                                </Box>
                                <Box borderTop='1px solid rgba(0,0,0,0.1)' position='relative'>
                                    <TextField  sx={classes.commentInput} placeholder='Add a comment...' variant='filled' size='small' name='comment' fullWidth InputProps={{disableUnderline: true}}
                                    onClick={() => setCurrentID(post._id)}
                                    value={commentData.comment}
                                    onChange={(e) => setCommentData({ ...commentData, comment: e.target.value})}
                                    >
                                    
                                    </TextField>
                                    <Button 
                                    sx={{position: 'absolute', right: '0'}} 
                                    
                                    onClick={() => commentPost()}>Post</Button>   
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