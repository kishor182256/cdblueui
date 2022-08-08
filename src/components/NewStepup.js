import { Box, Circle, Hide, HStack, Text } from '@chakra-ui/react'
import React from 'react'

const NewStepup = () => {
  return (
   <Box>
    <HStack padding='20px'>
    <Circle size='25px' bg='#0b5fff' color='white'>
    1 
    </Circle> 
    <Hide below='sm'><Text letterSpacing='0.5' fontWeight='400'  lineHeight='1.7'
          fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
      color='#0a0a0a' fontSize='16px'>Account</Text></Hide>
    <Circle size='25px' bg='lightgray' color='white' ml='300px' padding='5px'>
    2
    </Circle>
    
    <Hide below='md'><Text  color='#0a0a0a' 
    fontSize='16px'  lineHeight='1.7' fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
    fontWeight='400' >Security</Text></Hide>
    <Circle size='25px' bg='lightgray' color='white'>
    3
    </Circle>
    
    <Hide below='md'><Text 
     color='#0a0a0a'
      fontSize='16px'  lineHeight='1.7'
      fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
      letterSpacing='0.5' fontWeight='400' >Details</Text></Hide>
    <Circle size='25px' bg='lightgray' color='white'>
    4
    </Circle>
    
    <Hide below='md'><Text  lineHeight='1.7'
          fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
      color='#0a0a0a' fontWeight='400'
       fontSize='16px' letterSpacing='0.5' >Preferance</Text></Hide>
    <Circle size='25px' bg='lightgray' color='white'>
    5
    </Circle>   
    <Hide below='md'><Text letterSpacing='0.5' fontWeight='400'  lineHeight='1.7'
          fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
      color='#0a0a0a' fontSize='16px'>Identity</Text></Hide>
    </HStack>
   </Box>
  )
}

export default NewStepup