import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  RadioGroup,
  Radio,
  Slide,
  useDisclosure,
  SlideFade,
  FormErrorMessage,
  Divider,
  useMediaQuery,
  Collapse,
  Fade,
  ScaleFade,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { AiFillEye,AiFillEyeInvisible, AiOutlineCheckCircle } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import './_fonts.css';
import { Transition } from 'react-transition-group';
import { Navigate, useNavigate } from 'react-router-dom';

const styles = {
  transition:'transition: all 0.8s ease-in-out 0.1s'
}

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);
  const [show, setShow] = useState("no");
  const [password, setPassword] = useState('');
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
   console.log(password);
   const { isOpen, onToggle } = useDisclosure()
   const [isLarger] = useMediaQuery('(max-width: 400px)')
   const [collapse, setcollapse] = useState(false);

   const navigate = useNavigate();

   const handleToggle = (e) => {
    setShow(e.target.value);
     setcollapse(!collapse);
    onToggle();
  }
   

  const handleChange = (event) => {
    setPassword(event.target.value);
    console.log(password);
  }

  const handleClick =() =>{
      navigate('/set-up-security')
  }

  return (
    <Flex
      bg={{sm:'white',md:'#f4f4f4',lg:'#f4f4f4'}}
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      mt={isLarger? '-44px' : 'auto'}
      
    
     >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} >
        <Stack  >
          <Heading 
          fontSize='32px' align='left' lineHeight='32px'
           fontFamily='Circular-Book,Arial,Helvetica,sans-serif'>
          Create your login 
          </Heading>
          <Text  color='#6f6f6f'
           lineHeight='1.6'
           fontFamily='Circular-Book,Arial,Helvetica,sans-serif'>
          It only takes a couple of minutes to create an account.
          Get started by entering your email address and a memorable password.
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          
         >
          <Stack spacing={4}>
          
              <Box>
                <FormControl id="FirstName and middle name" >
                  <Input type="text" 
                  fontSize='14px'
                  fontWeight='500'
                  fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
                  _focus={{backgroundColor:'white'}}
                  focusBorderColor='none'
                  color='#0a0a0a'
                  bg='white'
                   placeholder='First and middle name'
                    _placeholder={{
                    color: '#626262',  
                    fontSize:'14px',
                    fontFamily:'Circular-Book,Arial,Helvetica,sans-serif'
                  }}
                  onChange={(e)=>setFirstName(e.target.value)}
                  value={firstname}
                 />
                  
                </FormControl>
                <FormControl id="LastName" >
                  <Input type="text" 
                   mt='10px'
                   fontWeight='500'
                   fontSize='12px'
                   color='#0a0a0a'
                   fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
                   onChange={(event)=>setLastName(event.target.value)}
                   
                   placeholder='LastName'
                   _focus={{backgroundColor:'white'}}
                   focusBorderColor='none'
                    _placeholder={{
                    color: '#626262',
                    fontSize:'14px',
                    fontFamily:'Circular-Book,Arial,Helvetica,sans-serif'
                  }}/>
                </FormControl>
              </Box>
              
            
            <Box mt='80px'>
            <FormControl id="email" >
             
              <Input type="email"
              fontSize='14px'
              fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
              _focus={{backgroundColor:'white'}}
              focusBorderColor='none'
               placeholder="Email Address"
               color='#0a0a0a'
              _placeholder={{
                    color: '#626262',
                    fontSize:'14px',
                    fontFamily:'Circular-Book,Arial,Helvetica,sans-serif'
                  }} 
                onChange={(e)=>setEmail(e.target.value)}
                  value={email}/>
            </FormControl>
            <FormControl id="password" >
              <InputGroup>
              <Input
                    mt='8px'
                    value={password}
                    color='#0a0a0a'
                    fontSize='16px'
                    fontWeight='500'
                    fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
                    type={showPassword ? "text" : "password"}
                    placeholder="Create Password"
                    onChange={handleChange}
                    _placeholder={{ color: '#626262',fontSize:'14px',
                    fontFamily:'Circular-Book,Arial,Helvetica,sans-serif' }}
                    _focus={{backgroundColor:'white'}}
                    focusBorderColor='none'
                    
                  />
                
                <InputRightElement mt='8px'>
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
             
            </FormControl>
            </Box>
            <Text style={{fontSize:'16px',
            fontWeight:'500',
            fontFamily:'Circular-Book,Arial,Helvetica,sans-serif'}}>
              Your password must contain:
              </Text>
              <RadioGroup>
              <Stack direction='column'>
              <Box id='capital' display='flex' align='center' justify-content='center'>
                {password.length>7?
                 <FontAwesomeIcon icon={faCheck} fontSize='10px' 
                 color='green' style={{border:'1px solid green',borderRadius:'50%',padding: '5px'}}
                  borderWidth='1px'
                  borderRadius='50%' />:
                 <FontAwesomeIcon icon={faCircle}
                 style={{border:'1px solid gray',borderRadius:'50%', 
                 backgroundColor:'white',
                 padding: '0.2px'}} />}
                 <Text ml='10px' letterSpacing='-0.5px' lineheight='1.5px'
                  position='relative'
                  color='#757575'
                  overflow='hidden'
                  cursor='pointer'
                  fontSize='16px'
                  fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
                   fontWeight='500'>at least 8 characters</Text>
              </Box>


              

              <Box id='number' display='flex' textAlign='center' justifyItems='center'>
                 {password.match(/[0-9]/)?
                 <FontAwesomeIcon icon={faCheck} fontSize='10px'
                 style={{border:'1px solid green',borderRadius:'50%',padding: '5px'}}  color='green' />:
                 <FontAwesomeIcon icon={faCircle}
                 style={{border:'1px solid gray',borderRadius:'50%',backgroundColor:'white',padding: '0.5px'}}
                  />}
                  <Text ml='10px' letterSpacing='-0.5px' lineheight='1.5px' color='#757575'
                  position='relative'
                  padding='0'
                  overflow='hidden'
                  cursor='pointer'
                  fontSize='16px'
                  fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
                   fontWeight='500'>at least 1 number</Text>
              </Box>

              <Box id='lower' display='flex' align='center'>
                {password.match(/[a-z]/)?
                 <FontAwesomeIcon icon={faCheck} fontSize='10px'
                style={{border:'1px solid green',borderRadius:'50%',padding: '5px'}} color='green' />:
                 <FontAwesomeIcon icon={faCircle} border='1px solid gray'
                  style={{border:'1px solid gray',borderRadius:'50%',backgroundColor:'white',padding: '0.5px'}}/>}
                  <Text ml='10px' letterSpacing='-0.5px' lineheight='1.5px' color='#757575'
                  position='relative'
                  padding='0'
                  overflow='hidden'
                  cursor='pointer'
                  fontSize='16px'
                  fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
                   fontWeight='500'>a lower case character</Text>
              </Box>

              <Box id='capital' display='flex' align='center'>
                { password.match(/[A-Z]/)?<FontAwesomeIcon icon={faCheck} fontSize='10px' fontWeight='700'
                style={{border:'1px solid green',borderRadius:'50%',padding: '5px'}}
                 color='green' />:
                 <FontAwesomeIcon icon={faCircle}
                 style={{border:'1px solid gray',borderRadius:'50%',backgroundColor:'white',padding: '0.5px'}} />}
                  <Text ml='10px' letterSpacing='-0.5px' lineheight='1.5px'
                  position='relative'
                  padding='0'
                  // margin='0'
                  color='#757575'
                  overflow='hidden'
                  cursor='pointer'
                  fontSize='16px'
                  fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
                   fontWeight='500'>a upper case character</Text>
              </Box>
              
             
             </Stack>
            </RadioGroup>
            </Stack>
            <Text pt={4} fontSize="17px"
             color='#393939' letterSpacing='0'
              fontFamily='Circular-Bold'
              fontWeight="600">Were you referred to us?</Text>
              <Flex direction={['row','column','column','column']}>
            <RadioGroup maxW='260px' mt='5px'>
              <Stack 
              direction={['column', 'row','row', 'row']}
              style={{display: 'flex',
              justifyContent: 'space-between'}}>
               <Radio
               style={{
               borderRadius: '50%',
               backgroundColor: 'white',
               padding: '1px',color:'blue'}}
                border='1px solid gray' fontSize='16px'
                value="no"
                checked={show === "no"}
                onChange={(e) => setShow(e.currentTarget.value)}
               >
                <Text mr='30px'
                 style={{fontSize:'.875rem',
                 fontWeight:'400'}} color='#757575'>
                  No</Text></Radio>
               <Radio
               
               colorScheme='blue'
               style={{border: '1px solid gray',
               borderRadius: '50%',backgroundColor: 'white',padding: '0.5px',color:'blue'}}
                value="yes"
                checked={show === "yes"}
                onChange={handleToggle}
               ><Text style={{fontSize:'.875rem',fontWeight:'400'}}>Yes</Text></Radio>
                </Stack>
             </RadioGroup>
             </Flex>
             
             {show === "yes" &&<Stack  transition='all 0.8s ease-in-out 0.1s'>
              
             
              <Text fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
               mt='8px'>Please enter your referral code, or the name of the person who referred you</Text>
              <Box>
              
                <FormControl id="firstName" isRequired >
                
                <Input type="text"
                  color='#393939' position='inherit' fontSize='16px'
                  fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
                  _focus={{backgroundColor:'white'}}
                  focusBorderColor='none'
                   placeholder='Enter Referal code or name'
                   _placeholder={{
                    color: '#4C4C4C',
                    fontFamily:'Circular-Book,Arial,Helvetica,sans-serif',
                    fontSize:'14px',
                    letterSpacing:'-0.05em',
                    fontWeight:'200'
                  }}/>
                  
                </FormControl>
                
                </Box>
                
              
               
              
            </Stack>}
            

            <Stack spacing={10} pt={2}>
              <Button
               onClick={handleClick}
               variant='primary'
                width='full'
                mt='10px'
                opacity='0.5'
                borderRadius='30px'
                minH='50px'
                color={'white'}
                fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
                background= 'linear-gradient(95deg,#f03ea6 4.1%,#ff6b00 95%,#f03ea6 200%)'
                >
                Continue
              </Button>
              
            
            
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}