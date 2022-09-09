import { Box, Flex, Heading, Input, Stack, Text, useMediaQuery } from '@chakra-ui/react'
import { Button } from 'bootstrap';
import React from 'react';
import {GrAlert} from 'react-icons/gr'
import Selected from '../components/Select';

const SetUpSecurity = () => {
    const [isLarger] = useMediaQuery('(max-width: 700px)')

  return (
     
    <Flex justifyContent={['center', 'center', 'center', 'center']}
     bg={isLarger?'white':'#f4f4f4'}  flexDirection="column" height='100vh' 
    alignItems={['center', 'center', 'center', 'center']}>
    <Box mt='-60px'
     bg={isLarger?'white':'#f4f4f4'} maxW='80%'
      justifyContent={['center', 'center', 'center', 'center']}
     alignItems={['center', 'center', 'center', 'center']}>

              <Box borderLeft='5px solid #FA4D56' minH='60px' borderRadius='5px'
                  bg='white' boxShadow='0px 0px 16px rgb(0 0 0 / 10%)'>
                  <Box justifyContent={['center', 'center', 'center', 'center']}
                      alignItems={['center', 'center', 'center', 'center']}>
                      <Box><GrAlert style={{ color: '#FA4D56' }} /></Box>
                      <Box><Text display='inline-block' fontSize='14px'
                          fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
                      >Please enter a valid mobile number so we can send your PIN.</Text></Box>
                  </Box>
              </Box>
    </Box>
    {/* Section */}
    <Box maxH='max-content' mb='20px' >
       <Box> <Heading >
        Set up your security
        </Heading></Box>
       <Box>
        <Text>To keep your account secure,
            we sometimes send you a security code. Enter the mobile number you’d like us to use.
            </Text></Box> 
            <Box style={{display: 'flex', flexDirection: 'row'}}>
                <Selected borderRadius='none'/><Input marginLeft='40px'/></Box>
    </Box>
    </Flex>
    
  )
}

export default SetUpSecurity