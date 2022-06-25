import React, { useEffect } from 'react'
import { useState } from 'react'

import { classes } from './styles'
import Input from './Input'
import { Container, Avatar, Button, Paper, Grid, Typography, TextField, Box } from '@mui/material'

const Auth = () => {

  const [isSignup, setIsSignup] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = () => {

  }

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

  useEffect(() => {
    console.log(isSignup);
  }, [isSignup])
  return (
    <>
    <Container component='main' sx={classes.container}>
      <Container  maxWidth='xs' sx={classes.miniContainer}>
        <Paper sx={{padding: '20px'}}>
          <Box sx={{display:'block',margin:'auto'}} component='img' src='https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png' />
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isSignup && (
              <>
                <Input name='firstName' label='First Name' type='text' autoFocus half/>
                <Input name='lastName' label='Last Name' type='text' half />
              </>
              )}
              <Input name='email' label='Email' type='email'/>
              <Input name='password' label='Password' type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} isSignup/>
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

        <Container  maxWidth='xs' sx={classes.miniContainer}>
          <Paper sx={{padding: '20px'}}>
            {isSignup ? (
              <Grid item xs={12}>
                <Typography textAlign='center'>Already have an account?</Typography>
                <Button fullWidth onClick={() => setIsSignup(!isSignup)}>Login</Button>
              </Grid>
            ): (
              <Grid item xs={12}>
                <Typography textAlign='center'>Don't have an account?</Typography>
                <Button fullWidth onClick={() => setIsSignup(!isSignup)}>Sign Up</Button>
              </Grid>
              
            )}
          </Paper>
        </Container>
      </Container>
    </Container>

  </>
  )
}

export default Auth