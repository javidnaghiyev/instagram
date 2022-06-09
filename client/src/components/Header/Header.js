import React from 'react';
import {classes} from './styles'
import { Container, TextField, Box } from '@mui/material';
import { useState } from 'react';
import store from '../../index';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import InboxIcon from '@mui/icons-material/Inbox';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import '../../images/IMG_20190905_161749.jpg';
import { showCreateAction, hideCreateAction } from '../../actions/posts';
import { useDispatch } from 'react-redux';
import getPostID from '../../reducers/getPostID';

const Header = () => {
  const dispatch = useDispatch()

  const showCreateClick = () => {
    store.dispatch(showCreateAction())
    window.scrollTo(0,0)
  }

  return (
    <Container maxWidth='false' sx={classes.headerHolder}>
      <Container sx={classes.header} maxWidth='false' xs={12} sm={8}>
        <Box component='a' href='#' sx={{width: '40%'}}>
          <img src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'></img>
        </Box>
        <Box sx={{width: '30%'}}>
              <SearchIcon sx={classes.searchIcon} fontSize='small'></SearchIcon>
              <TextField sx={classes.search} variant='filled' size='small' name='search' InputProps={{disableUnderline: true}} placeholder='Search'>
                  
              </TextField>
        </Box>

        <Box sx={classes.iconsHolder}>
              <HomeIcon fontSize='large'></HomeIcon>
              <InboxIcon fontSize='large'></InboxIcon>
              <AddCircleOutlineIcon fontSize='large' onClick={showCreateClick}></AddCircleOutlineIcon>
              <ExploreIcon fontSize='large'></ExploreIcon>
              <FavoriteBorderIcon fontSize='large'></FavoriteBorderIcon>
              <img style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '100%'
              }} src="https://i1.rgstatic.net/ii/profile.image/1018933272395776-1619944031326_Q512/Javid-Naghiyev-2.jpg" />
        </Box>
        
      </Container>
    </Container>  
  )
}

export default Header