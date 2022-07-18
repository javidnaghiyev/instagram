import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Container, Typography, Avatar } from '@mui/material'
import { getProfile } from '../../actions/user'

const Profile = () => {
    const dispatch = useDispatch()

    const userData = useSelector((state) => state.userData)
    console.log(userData);
  return (
    <>
        <Container>
            <Box component='div'>
                <Avatar></Avatar>
            </Box>
            sdvmkmvdsdv
        </Container>
    </>
  )
}

export default Profile