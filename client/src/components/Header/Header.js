import React from 'react';
import {classes} from './styles'
import { Container, TextField, Box, Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom'
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

  const user = null

  //Profile menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth='false' sx={classes.headerHolder}>
      <Container sx={classes.header} maxWidth='false' xs={12} sm={8}>
        <Box component={Link} to='/' href='#' sx={{width: '40%'}}>
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
              {user ? (<>
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <Avatar style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '100%'
                  }} src="https://i1.rgstatic.net/ii/profile.image/1018933272395776-1619944031326_Q512/Javid-Naghiyev-2.jpg">C</Avatar>
              
                </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>

              </>) : (<>
                <Button component={Link} to='/auth'>Login</Button>
              </>)}
        </Box>
        
      </Container>
    </Container>  
  )
}

export default Header