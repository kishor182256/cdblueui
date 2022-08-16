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

// const CFaUserAlt = chakra(FaUserAlt);
// const CFaLock = chakra(FaLock);

const App = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);
  const [isLarger] = useMediaQuery('(max-width: 700px)')

  return (
    <Box mt='-25px' 
      justifyContent={['center', 'center', 'center', 'center']} 
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
        
          <Box  justifyContent={['center', 'center', 'center', 'center']}
        alignItems={['center', 'center', 'center', 'center']}>
          <Box>
            <Heading 
           fontSize='32px' 
           display='flex'
           justifyContent='center'
           fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
            textAlign='center' lineHeight='38px'>
            Welcome to Currencies Direct</Heading></Box>
           <Box display='flex'
           maxW={isLarger?'110%':'80%'}
           ml={isLarger?'-12.5%':'10%'}
           mr={isLarger?'-10.5%':'10%'}
            alignItems='center' flexWrap='wrap'
           justifyContent='center'>
           <Text fontSize='13px' textAlign='center' 
           letterSpacing='-0.5px'  ml='50px'
           fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
           color='#626262' width='100%'>
           If you’re accessing our online services for the first time 
           (or have only usedour app in the past)
           please follow this link to{'  '} 
           <a style={{color:'#0b5fff',
            textDecorationLine:'underline'}}>activate your account</a>
           </Text>
           </Box>
           </Box>
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
                    _placeholder={{ color: '#626262',fontSize:'14px',
                    fontFamily:'Circular-Book,Arial,Helvetica,sans-serif' }} />
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
                    _placeholder={{ color: '#626262',fontSize:'14px',
                    fontFamily:'Circular-Book,Arial,Helvetica,sans-serif' }}/>
                   
                    
                 
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
                      {showPassword ? < AiFillEyeInvisible
                       color='#626262' fontSize='20px'/>
                       : <AiFillEye color='#626262'
                        fontSize='20px'/>
                       }
                    </Button>
                  </InputRightElement>
                </InputGroup>
                
                <Box display='flex' alignItems={['center', 'center', 'center', 'center']}>
                <Checkbox
                 mt='20px'
                 iconColor="#0b5fff"
                 size='lg'
   
                 padding='-10px'
                
                  border='1px  #f4f4f4' letterSpacing='-0.5px' lineheight='1.5'
                  fontSize='5px'  
                   textColor='#757575'/><Text 
                     mt='17px' padding='5px'
                    fontFamily='Circular-Book,Arial,Helvetica,sans-serif'>
                      Remember Me</Text></Box>
                </FormControl>
              <Button width='full' fontSize='16px'
                ml='30px' fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
               background= 'linear-gradient(95deg,#f03ea6 4.1%,#ff6b00 95%,#f03ea6 200%)'
               variant='primary'>
                Log in
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
       
        <Link color="#2199e8" to='/'  
        style={{color:"#0b5fff", fontFamily:'Circular-Book,Arial,Helvetica,sans-serif',
        cursor: "pointer", fontSize:'16px',
        fontWeight:"500 !important"}}>
        Forgot password?
        </Link>
      </Box>
      <Box display='flex' align='center' justifyContent='center' mt='15px'>
      <Text fontSize='16px' letterSpacing='0.5px'
       fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
       color='#626262'>Don't have an account?.</Text>
        <Link color="teal.500" to='/signup'  
        style={{color:"#0b5fff",cursor: "pointer", fontFamily:'Circular-Book,Arial,Helvetica,sans-serif',
        fontSize:"16px",fontWeight:"500 !important"}}>
          Sign Up
        </Link>
      </Box>
    </Flex>
    </Box>
    
  );
};

export default App;
