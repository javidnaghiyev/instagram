import React from 'react'
import {classes} from './styles'
import {Container, Typography, Box} from '@mui/material'
import { useState, useEffect } from 'react';
import Stories from 'react-insta-stories'
import { stories } from './stories'
import {storyThumbs} from './storyThumbs'

const StoryBox = () => {

  const [thumbs, setThumbs] = useState(() => storyThumbs)

  const clicked = (index) => {

    let newThumbs = [...thumbs]
    newThumbs[index].new = false

    setThumbs(newThumbs)
  }

  return (
    <Container sx={classes.container} maxWidth='false'>
      <Box component='ul' sx={classes.ul}>
        {thumbs.map((thumb, index) => {
          return (
            <Box component='li' sx={classes.listItem} onClick={() => clicked(index)}>
              <Box component='div' sx={classes.thumbPPHolder} >
                <Box>
                  {thumb.new ?
                      <Box component='div' sx={classes.colorBorder}></Box>
                      :
                      <Box component='div' sx={classes.whiteBorder}></Box>
                  }
                </Box>
                  
                <Box component='img' sx={classes.thumbPP} src={thumb.profilePicture}></Box>
              </Box>  
              <Typography sx={classes.userName} variant='h6'>{thumb.name}</Typography>
            </Box>
          )
        })}
      </Box>
        
    </Container>
  )
}

export default StoryBox