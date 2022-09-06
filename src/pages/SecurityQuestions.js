import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Checkbox,
  Text,
  useMediaQuery
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import './_fonts.css';


import { AiFillEye,AiFillEyeInvisible } from "react-icons/ai";



const App = () => {

  const [isLarger] = useMediaQuery('(max-width: 700px)')

  return (
    <Box mt='-25px'  width='100%'
      justifyContent={['center', 'center', 'center', 'center']} 
        alignItems={['center', 'center', 'center', 'center']}
        >
    <Flex
      flexDirection="column"
      width='100%'
      height="100vh"
      backgroundColor={{sm:'white',md:"#f4f4f4 !important"}}
      justifyContent="center"
      alignItems="center"
    >
      <Stack 
       spacing={4}
        mb="2"
        justifyContent={['center', 'center', 'center', 'center']}
        alignItems={['center', 'center', 'center', 'center']}
        marginTop={{lg:'-100px',sm:'-80px'}}
        backgroundColor={{sm:'"#f4f4f4"'}}
        minW='468px' width='20%'
      >
        
          <Box  justifyContent={['center', 'center', 'center', 'center']}
         alignItems={['center', 'center', 'center', 'center']}>
          <Box >
            <Heading 
           fontSize='32px' 
           display='flex' fontWeight='500'
           justifyContent='center' color='#121212'
           fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
            textAlign='center' lineHeight='38px'>
            Answer your security questions to reset your password</Heading></Box>
           
           </Box>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
          <Stack
              spacing={4}
              p="1rem"> 
              <FormControl>
                <InputGroup>                 
                  <Input type="email"  color='#626262'
                     focusBorderColor='none' width='100%'
                     fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
                     _focus={{backgroundColor:'white'}}
                    fontSize='16px' placeholder="What is your favorite children book?"
                    _placeholder={{ color: '#626262',fontSize:'14px',
                    fontFamily:'Circular-Book,Arial,Helvetica,sans-serif' }} />
                </InputGroup>
              </FormControl>
              <FormControl space={12}>
                <InputGroup>
                  
                  <Input
                    color='#626262'
                    fontSize='16px' fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
                    placeholder="What is the name of the first app ?"
                    focusBorderColor='none'
                    _focus={{backgroundColor:'white'}}
                    _placeholder={{ color: '#626262',fontSize:'14px',
                    fontFamily:'Circular-Book,Arial,Helvetica,sans-serif' }}/>
                   
                    
                 
                   <InputRightElement width="4.5rem">
                    <Button background='transparent'
                       height='50px' width='500px'
                       backgroundSize='24px'
                       backgroundPosition='center'
                       backgroundColor='transparent'
                       fontSize='16px'  marginTop='30px !important'
                       cursor='pointer' 
                       color='gray'>
                       
                    </Button>
                  </InputRightElement>
                </InputGroup>
                
               
                </FormControl>
                </Stack>
                <Box display='flex' align='center' ml='-15px' mt='25px'
                 justifyContent={['center', 'center', 'center', 'center']}>
                <Button width='full' fontSize='16px' height='50px' 
                ml='30px' fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
               background= 'linear-gradient(95deg,#f03ea6 4.1%,#ff6b00 95%,#f03ea6 200%)'
               variant='primary'>
                Login & reset password
              </Button>
                </Box>
                
              
            
           
          </form>
        </Box>
      </Stack>
      
      <Box display='flex' align='center' justifyContent='center' mt='5px'>
      <Text fontSize='16px' letterSpacing='0.5px'
       fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
       color='#626262'>Or reset your password with your{' '}</Text>
        <Link color="teal.500" to='/forgotpassword'  
        style={{color:"#0b5fff",cursor: "pointer", fontFamily:'Circular-Book,Arial,Helvetica,sans-serif',
        fontSize:"16px",fontWeight:"500 !important"}}>
          {' '}email address
        </Link>
      </Box>
      
    </Flex>
    </Box>
    
  );
};

export default App;
