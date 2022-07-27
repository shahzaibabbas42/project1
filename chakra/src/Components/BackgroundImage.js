import { Box,Image } from '@chakra-ui/react'
import React from 'react'


export default function BackgroundImage() {
  return (
    <Box  bg={'red'}>
    <Image src="./task.jpg" alt="Dan Abramov" width={'100vw'} />
   
    </Box>
  )
}
