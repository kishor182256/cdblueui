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
  Text
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


import { AiFillEye,AiFillEyeInvisible } from "react-icons/ai";

// const CFaUserAlt = chakra(FaUserAlt);
// const CFaLock = chakra(FaLock);

const App = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Box mt='0'  justifyContent={['center', 'center', 'center', 'center']} 
        alignItems={['center', 'center', 'center', 'center']}>
    <Flex
      flexDirection="column"
    
      height="100vh"
      backgroundColor={{sm:'white',md:"#f4f4f4 !important"}}
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        // flexDir="column"
        mb="2"
        justifyContent={['center', 'center', 'center', 'center']}
        alignItems={['center', 'center', 'center', 'center']}
        marginTop={{lg:'-100px',sm:'-80px'}}
        backgroundColor={{sm:'"#f4f4f4"'}}
        width="100%"
      >
        
        
          <Box mr='10px'><Heading fontSize='24px' 
          fontFamily='Circular-Medium,Arial,Helvetica,sans-serif'
            textAlign='center' lineHeight='38px'
            >Welcome to Currencies Direct</Heading></Box>
        <Box mr='10px' display='block'>
          <Text fontSize='16px' textAlign='center' letterSpacing='-0.5px' fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
        color='#626262' width='100%'>
          If you’re accessing our online services for the first time (or have only used</Text></Box>
       
          <Text fontSize='16px'
          fontWeight='500' mr='10px'
           textAlign='center'
            color='#626262' fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
             letterSpacing='-0.5px'
              width='100%'>
            our app in the past) please follow this link to{' '}
            <Link  to='/'><Text color='#0b5fff'
            fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
            fontSize='16px' _hover={{
              textDecoration: 'underline',
            }}>
              activate your account
              </Text></Link> </Text>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
          <Stack
              spacing={4}
              p="1rem">
              
              
            
              <FormControl>
                <InputGroup>
                 
                  <Input type="email"  color='black'
                     focusBorderColor='none'
                     _focus={{backgroundColor:'white'}}
                    fontSize='16px' placeholder="Email address"
                     _placeholder={{ color: 'gray',transform:'scale(0.875)',
                     transition: 'transform 150ms ease-in-out',
                     fontFamily:'Circular-Book,Arial,Helvetica,sans-serif',
                     fontSize:'16px' }} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  
                  <Input
                    color='black'
                    fontSize='16px'
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    focusBorderColor='none'
                    _focus={{backgroundColor:'white'}}
                    _placeholder={{ color: 'gray',fontSize:'16px',
                    fontFamily:'Circular-Book,Arial,Helvetica,sans-serif' }}
                   
                    
                  />
                  <InputRightElement width="4.5rem">
                    <Button background='transparent'
                       height='50px' width='500px'
                       backgroundSize='24px'
                       backgroundPosition='center'
                       backgroundColor='transparent'
                       fontSize='16px'
                       cursor='pointer' 
                       color='gray'
                        onClick={handleShowClick}>
                      {showPassword ? < AiFillEyeInvisible color='#626262' fontSize='20px'/>
                       : <AiFillEye color='#626262' fontSize='20px'/>
                       }
                    </Button>
                  </InputRightElement>
                </InputGroup>
                
                
                <Checkbox
                 mt='20px'
                 iconColor="#0b5fff"
                 borderWidth='0.1px'
                 padding='10px'
                 fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
                  border='gray'
                  fontSize='16px'
                 
                   textColor='#757575'>Remember Me</Checkbox>
                  
                  
              </FormControl>
              <Button width='full'
                ml='30px'
               background= 'linear-gradient(95deg,#f03ea6 4.1%,#ff6b00 95%,#f03ea6 200%)'
               variant='primary'>
                Log in
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
       
        <Link color="#2199e8" to='/' style={{color:"#0b5fff",cursor: "pointer",fontWeight:"400 !important"}}>
        Forgot password?
        </Link>
      </Box>
      <Box display='flex' align='center' justifyContent='center' mt='15px'>
      <Text fontSize='16px' color='#626262'>Don't have an account?.</Text>
        <Link color="teal.500" to='/signup'  
        style={{color:"#0b5fff",cursor: "pointer",fontSize:"16px",fontWeight:"400 !important"}}>
          Sign Up
        </Link>
      </Box>
    </Flex>
    </Box>
    
  );
};

export default App;
