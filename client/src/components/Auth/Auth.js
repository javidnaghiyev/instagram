import React, { useEffect } from 'react'
import { useState } from 'react'
import { GoogleLogin } from 'react-google-login'

import { classes } from './styles'
import Input from './Input'
import { Container, Avatar, Button, Paper, Grid, Typography, TextField, Box, collapseClasses } from '@mui/material'
import Icon from './Icon'

const Auth = () => {

  const [isSignup, setIsSignup] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = () => {

  }

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup)
    setShowPassword(false)
  }

  const googleSuccess = async (res) => {
    console.log(res);
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
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <Box>
                <Typography textAlign='center' color={classes.secondaryText.value}>Sign up to see photos and videos from your friends.</Typography>
                <GoogleLogin
                  clientId='191038965379-f5id1v2hli3f09g7o07vfbavl05227b0.apps.googleusercontent.com'
                  render={(renderProps) => (
                    <Button variant='contained' disableRipple fullWidth sx={{margin: '15px 0'}} onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />}>Log in with Google</Button>
                  )}
                  onSuccess={googleSuccess}
                  onFailure={googleFailure}
                  cookiePolicy='single_host_origin'
                />
                

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
                <Input name='firstName' label='First Name' type='text' autoFocus half/>
                <Input name='lastName' label='Last Name' type='text' half />
              </> 
              )}
              <Input name='email' label='Email' type='email'/>
              <Input name='password' label='Password' type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}  isSignup/>
              {isSignup && (
              <>
                <Input name='confirm' label='Confirm password' type='password' />
              </>
              )}
              {!isSignup ? (
                <Grid item xs={12}>
                  <Button variant='contained' fullWidth>Log in</Button>
                </Grid>
              ) : (
                <Grid item xs={12}>
                  <Button variant='contained' fullWidth>Sign up</Button>
                </Grid>
              )}
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