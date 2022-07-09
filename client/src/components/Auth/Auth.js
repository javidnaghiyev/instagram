import React, { useEffect, useState } from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'

import { classes } from './styles'
import Input from './Input'
import { Container, Avatar, Button, Paper, Grid, Typography, TextField, Box, collapseClasses } from '@mui/material'
import Icon from './Icon'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signin, signup } from '../../actions/auth'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirm: ''}

const Auth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isSignup, setIsSignup] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(isSignup){
      dispatch(signup(formData, navigate))
    }else{
      dispatch(signin(formData, navigate))
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name] : e.target.value })
  }

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup)
    setShowPassword(false)
  }

  const googleSuccess = async (res) => {
    const profileObj = jwt_decode(res ? res.credential : undefined)
    const result = (({ given_name, family_name, email, picture }) => ({ given_name, family_name, email, picture }))(profileObj)
    const token = profileObj ? profileObj.jti : undefined

    try {
      dispatch({ type: 'AUTH', data: { result, token}})
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  const googleFailure = (error) => {
    console.log(error);
    console.log('failed');
  }

  return (
    <>
    <Container component='main' sx={classes.container} fullWidth>
      <Container  maxWidth='xs' sx={classes.miniContainer}>
        <Paper sx={{padding: '20px'}}>
          <Box sx={{display:'block',margin:'auto', padding: '20px'}} component='img' src='https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png' />
          <form onSubmit={handleSubmit} onChange={handleChange}>
            {isSignup && (
              <Box>
                <Typography textAlign='center' color={classes.secondaryText.value}>Sign up to see photos and videos from your friends.</Typography>
                  <GoogleOAuthProvider clientId='191038965379-f5id1v2hli3f09g7o07vfbavl05227b0.apps.googleusercontent.com'>
                    <GoogleLogin
                      logo_alignment='center'
                      theme='filled_blue'
                      render={(renderProps) => (
                        <Button variant='contained' disableRipple fullWidth sx={{margin: '15px 0'}} onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />}>Log in with Google</Button>
                      )}
                      onSuccess={googleSuccess}
                      onFailure={googleFailure}
                      cookiePolicy='single_host_origin'
                    />
                  </GoogleOAuthProvider>
                <Box sx={classes.lineHolder}>
                  <Box component='div' sx={classes.horizontalLine}></Box>
                  <Typography color={classes.secondaryText.value}>OR</Typography>
                  <Box component='div' sx={classes.horizontalLine}></Box>
                </Box>
              </Box>
            )}
            <Grid container spacing={2}>
              {isSignup && (
              <>
                <Input name='firstName' label='First Name' type='text' autoFocus half onChange={handleChange}/>
                <Input name='lastName' label='Last Name' type='text' half onChange={handleChange}/>
              </> 
              )}
              <Input name='email' label='Email' type='email' onChange={handleChange}></Input>
              <Input name='password' label='Password' type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}  isSignup onChange={handleChange}/>
              {isSignup && (
              <>
                <Input name='confirm' label='Confirm password' type='password' onChange={handleChange}/>
              </>
              )}
              
                <Grid item xs={12}>
                  <Button variant='contained' type='submit' fullWidth>{isSignup ? 'Sign Up' : 'Log In'}</Button>
                </Grid>
             
            </Grid>
          </form>
        </Paper>

        {/* <Container  maxWidth='xs' sx={classes.miniContainer}> */}
          <Paper sx={{padding: '20px', marginTop: '50px'}}>
            {isSignup ? (
              <Grid item xs={12}>
                <Typography textAlign='center'>Already have an account?</Typography>
                <Button fullWidth onClick={() => switchMode()}>Login</Button>
              </Grid>
            ): (
              <Grid item xs={12}>
                <Typography textAlign='center'>Don't have an account?</Typography>
                <Button fullWidth onClick={() => switchMode()}>Sign Up</Button>
              </Grid>
              
            )}
          </Paper>
        {/* </Container> */}
      </Container>
    </Container>

  </>
  )
}

export default Auth