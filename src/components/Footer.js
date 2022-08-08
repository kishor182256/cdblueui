import { Box, Center, Flex, Text } from '@chakra-ui/react'
import React from 'react'


const Footer = () => {
  return (
    <Box bg='white'
      display={{md:'flex'}}
      maxWidth='100%'
      height='150%'
      padding='24px'
       bottom='150px'
      pt='24px'
      // marginBottom='12px'
      borderTop='1px solid whitesmoke'
      
      flexDirection={['column', 'row', 'row', 'row']}
      alignItems= {['center', 'flex-start', 'flex-start', 'flex-start']}
      justifyContent= {['center', 'flex-start', 'flex-start', 'flex-start']}
      letterSpacing='0.5px'
     >
     
      <Center width='110%' flexDirection={['column', 'row', 'row', 'row']}
        alignItems= {['center', 'flex-start', 'flex-start']}
        justifyContent= {['center', 'space-around', 'space-around', 'space-around']}
        // padding= {['12px 0', 'flex-start', 'flex-start', 'flex-start']}
        padding='12px 0'
       
       
        >
          
      
      <Box ><Text mt='10px' letterSpacing='0 !important' color='#6f6f6f' fontWeight='500'
      fontSize='14px'>Terms & conditions</Text></Box>
      <Box ><Text mt='10px' letterSpacing='0 !important' color='#6f6f6f' fontWeight='500'
       fontSize='14px'>Privacy policy</Text></Box>
      <Box ><Text mt='10px' letterSpacing='0 !important' color='#6f6f6f' fontWeight='500'
       fontSize='14px' >Cookies</Text></Box>
      <Box ><Text mt='10px' letterSpacing='0 !important' color='#6f6f6f' fontWeight='500' 
      fontSize='14px'>Regulatory information</Text></Box>
    
          
      </Center>
    </Box>
  )
}

export default Footer