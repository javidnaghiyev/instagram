import React from 'react';
import { classes } from './styles';
import { Container, Box, Typography, Grid, AppBar, Button, TextField } from '@mui/material';
import { Accordion } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState , useEffect } from 'react';
import FileBase from 'react-file-base64';

import { ClickAwayListener } from '@mui/material';
import store from '../../index';
import { hideCreateAction } from '../../actions/posts';
import {createPost, updatePost} from '../../actions/posts'
import { useDispatch, useSelector } from 'react-redux';
import getPostID from '../../reducers/getPostID';


const CreatePost = () => {
    const dispatch = useDispatch()
    const currentID = useSelector((state) => state.postID)
    const post = useSelector((state) => currentID ? state.posts.find((p) => p._id === currentID) : null)
    const user = JSON.parse(localStorage.getItem('profile'))
    console.log(user);
    const result = user.result
    const username = result ? result.firstName + result.lastName || result.given_name + result.family_name : null

    //Opening and Closing the component
    const handleClickAway = () => {
        dispatch(hideCreateAction())
        document.body.style.overflow = 'visible'
        // clear()
    }

    const showCreate = useSelector((state) => state.showCreate)
        useEffect(() => {
            if(showCreate === true){
                document.body.style.overflow = 'hidden'
            }
        }, [showCreate])
    


    //Sending the post to redux
    const [postData, setPostData] = useState({author: username, image: '', location: '', title: ''})

    const handleSubmit = (e) => {
        e.preventDefault()
        if(currentID){
            dispatch(updatePost(currentID, postData))
        }else {
            dispatch(createPost(postData))
            dispatch(hideCreateAction())
        }
        document.body.style.overflow = 'visible'
        
    }

    //Editing the post
    useEffect(() => {
        if(post){
            setPostData(post)
        }
    }, [post])

    //Clear the post
    // const clear = () => {
    //     setPostData({author: '', image: '', location: '', title: ''})
    //     dispatch(getPostID(null))
    // }
console.log(postData);

    return <>
            <Container>
                    {/* {() => disableScroll('hidden')} */}
                    <Box component='div' sx={classes.background}>
                        <Container sx={classes.container}>
                            <ClickAwayListener onClickAway={handleClickAway}>
                                <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                                <Grid container sx={classes.create}>
                                    <Grid item xs={12} sx={classes.header}>
                                        <Typography xs={12}>{currentID ? 'Editing' : 'Create a new'} Post</Typography>
                                        <Box sx={{position: 'absolute', right: '0'}}>
                                            <Button type='submit'>Share</Button>
                                        </Box>
                                    </Grid>
                                    <Grid container xs={12} sx={classes.body}>
                                        <Grid item md={7} xs={12} sx={{borderRight: '1px solid #dadada'}}>
                                            <Box component='section' sx={classes.uploadSection}>
                                                <Container>
                                                    <Box component='svg' sx={{display: 'block', margin: 'auto'}} width='120px' aria-label="Icon to represent media such as images or videos" color="#0095f6" fill="#0095f6" role="img" viewBox="0 0 97.6 77.3"><path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path><path d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path><path d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path>
                                                    </Box>
                                                </Container>
                                                <Typography variant='h6' sx={{fontWeight: '300'}}>Drag photos and videos here</Typography>
                                                <Button variant='contained' sx={classes.uploadButton}>
                                                    Select from computer
                                                    <FileBase
                                                        type='file'
                                                        multiple={false}
                                                        onDone={({base64}) => setPostData({...postData, image: base64})}
                                                    ></FileBase>
                                                </Button>
                                            </Box>
                                        </Grid>
                                        <Grid item md={5} xs={12}>
                                            <Container sx={{margin: '10px 0'}}>
                                                <Box component='div' sx={classes.ppHolder}>
                                                    <Box component='div' sx={classes.border}></Box>
                                                    <img src={result.picture || result.firstName.charAt(0)} />
                                                </Box>
                                                <Typography sx={{display:'inline-block'}}>{username.toLowerCase()}</Typography>
                                            </Container>
                                            <Container sx={classes.nameContainer}>
                                                <TextField 
                                                placeholder='Write a caption'
                                                variant='standard'
                                                InputProps={{disableUnderline: true}}
                                                disableUnderline={true}
                                                fullWidth
                                                value={post ? postData.title : null}
                                                onChange={(e) => setPostData({...postData, title: e.target.value})}
                                                >
                                                </TextField>
                                            </Container>
                                            <Container sx={{padding:'0 !important', '& > *':{padding: '0 15px'}}}>
                                                <TextField 
                                                fullWidth
                                                placeholder='Add location'
                                                InputProps={{disableUnderline: true}}
                                                variant='standard'
                                                sx={classes.locationText}
                                                value={post ? postData.location : null}
                                                onChange={(e) => setPostData({...postData, location: e.target.value})}
                                                >    
                                                </TextField>
                                                <Accordion sx={{margin: '0 !important', '& *':{margin:'0 !important'}}}>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                        >
                                                        <Typography>Accordion 1</Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                        <Typography>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                        </Typography>
                                                        </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                        >
                                                        <Typography>Accordion 1</Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                        <Typography>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                        </Typography>
                                                        </AccordionDetails>
                                                </Accordion>
                                            </Container>
                                        </Grid>

                                    </Grid>
                                </Grid>
                                </form>
                            </ClickAwayListener>
                        </Container>
                    </Box>
                </Container>
            :
            <Container sx={{display: 'none'}}>
                {/* {disableScroll('visible')} */}
            </Container>
    </>
}


export default CreatePost