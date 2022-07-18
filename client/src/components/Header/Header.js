import React, { useEffect } from 'react';
import {classes} from './styles'
import { Container, TextField, Box, Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'
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
import { getProfile } from '../../actions/user';

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const showCreateClick = () => {
    store.dispatch(showCreateAction())
    window.scrollTo(0,0)
  }

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const userId = user ? user.result._id : undefined

  useEffect(() => {
    const token = user ? user.token : undefined
    if(token){
      setUser(JSON.parse(localStorage.getItem('profile')))
    }else{
      setUser(null)
    }
  }, [location])

  //LOGOUT
  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/auth')
    setUser(null)
  }

  //Profile menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleProfile = () => {
    setAnchorEl(null);
    dispatch(getProfile(userId))
    navigate(`/user/${userId}`)
  }

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
              {user ? (<>
              <HomeIcon fontSize='large'></HomeIcon>
              <InboxIcon fontSize='large'></InboxIcon>
              <AddCircleOutlineIcon fontSize='large' onClick={showCreateClick}></AddCircleOutlineIcon>
              <ExploreIcon fontSize='large'></ExploreIcon>
              <FavoriteBorderIcon fontSize='large'></FavoriteBorderIcon>
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
                  }} src={user.result.picture}>{user.result.picture || user.result.firstName.charAt(0)}</Avatar>
              
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
                  <MenuItem onClick={handleProfile}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={logout}>Logout</MenuItem>
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