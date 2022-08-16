import { Box, Center, Flex, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'


const Footer = () => {
  const [isLarger] = useMediaQuery('(max-width: 400px)')
  return (
    <Box bg='white'
      display={{md:'flex'}}
      maxWidth='100%'
      height='150%'
      padding='24px'
       bottom='150px'
      pt='24px'
      // marginBottom='12px'
      borderTop='1px solid #6f6f6f'
      
      flexDirection={['column', 'row', 'row', 'row']}
     
      letterSpacing='0.5px'
     >
     
      
      <Box display={['flex','flex','flex','flex','flex']}
       justifyContent={['center','center', 'center', 'center', 'center']}>
       
        <Text
         mt={['-10px','10px','10px','10px']}
          letterSpacing='0 !important' 
         color='#6f6f6f' 
         fontWeight='500' ml={['0','0','0','50px']}
         fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
         fontSize='13px'>Terms & conditions</Text></Box>

       <Box display={['flex','flex','flex','flex','flex']}
       justifyContent={['center','center', 'center', 'center', 'center']}>
        <Text mt={['18px','10px','10px','10px']} 
        letterSpacing='0 !important' 
        color='#6f6f6f' ml={{lg:'15px',md:'15px'}}
        fontWeight='500' 
        fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
        fontSize='13px'>Privacy policy</Text></Box>

       <Box display={['flex','flex','flex','flex','flex']}

       justifyContent={['center','center', 'center', 'center', 'center']}>
        <Text  mt={['18px','10px','10px','10px']} 
         letterSpacing='0 !important'
         ml={{lg:'15px',md:'15px'}}
       color='#6f6f6f' fontWeight='500' fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
       fontSize='13px' >Cookies</Text></Box>

       <Box display={['flex','flex','flex','flex','flex']}
       justifyContent={['center','center', 'center', 'center', 'center']} >
        <Text mt={['18px','10px','10px','10px']} 
        ml={{lg:'15px',md:'15px'}}
        letterSpacing='0 !important'
       color='#6f6f6f' fontWeight='500' fontFamily='Circular-Book,Arial,Helvetica,sans-serif' 
       fontSize='13px'>Regulatory information</Text></Box>    
      
    </Box>
  )
}

export default Footer