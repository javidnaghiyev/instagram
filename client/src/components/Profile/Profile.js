import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch, useStore } from 'react-redux'
import { Box, Container, Typography, Avatar } from '@mui/material'
import { getProfile } from '../../actions/user'
import userReducer from '../../reducers/user'

const Profile = () => {

  const userInfo = useSelector((state) => state.userReducer.userData)

  // const [userInfo, setUserInfo] = useState()

  // useEffect(() => {
  //   setUserInfo(useSelector((state) => state.userReducer.userData))
  // }, [])


  return (
    <>
        <Container sx={{'marginTop':'60px'}}>
            <Box component='div'>
                <Avatar sx={{width: '150px', height: '150px'}} >{userInfo.firstName.charAt(0)}
                  
                </Avatar>
            </Box>
            <Typography>{userInfo.firstName}</Typography>
        </Container>
    </>
  )
}

export default Profile