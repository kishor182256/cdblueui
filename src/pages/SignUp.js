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
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { AiFillEye,AiFillEyeInvisible, AiOutlineCheckCircle } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCircle, faTimes } from '@fortawesome/free-solid-svg-icons'



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


  const handleChange = (event) => {
    setPassword(event.target.value);
    console.log(password);
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
          fontSize='32px' align='left' 
           fontFamily='Circular-Medium,Arial,Helvetica,sans-serif'>
          Create your login 
          </Heading>
          <Text fontSize='inherit' color='#626262'
          fontWeight='500' lineHeight='1.6'
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
                 
                  _focus={{backgroundColor:'white',
                  
                  transform:'translate(0, 12px) scale(0.75)'}}
                  focusBorderColor='none'
                  color='#4C4C4C'
                  bg='white'
                   placeholder='First and middle name'
                    _placeholder={{
                    color: '#626262',  
                    fontFamily:'Circular-Book,Arial,Helvetica,sans-serif'
                  }}
                  onChange={(e)=>setFirstName(e.target.value)}
                  value={firstname}
                 />
                  
                </FormControl>
                <FormControl id="LastName" >
                  <Input type="text" 
                   mt='10px'
                   onChange={(event)=>setLastName(event.target.value)}
                   color='#4C4C4C'
                   placeholder='LastName'
                   _focus={{backgroundColor:'white'}}
                   focusBorderColor='none'
                    _placeholder={{
                    color: '#626262',
                    fontFamily:'Circular-Book,Arial,Helvetica,sans-serif'
                  }}/>
                </FormControl>
              </Box>
              
            
            <FormControl id="email" >
             
              <Input type="email"
              _focus={{backgroundColor:'white'}}
              focusBorderColor='none'
               placeholder="Email Address"
               color="primary"
              _placeholder={{
                    color: '#626262',
                    fontSize:'16px',
                    fontFamily:'Circular-Book,Arial,Helvetica,sans-serif'
                  }} 
                onChange={(e)=>setEmail(e.target.value)}
                  value={email}/>
            </FormControl>
            <FormControl id="password" >
              <InputGroup>
              <Input
                    value={password}
                    color='black'
                    fontSize='16px'
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={handleChange}
                    _placeholder={{ color: '#626262',fontSize:'16px',
                    fontFamily:'Circular-Book,Arial,Helvetica,sans-serif' }}
                    _focus={{backgroundColor:'white'}}
                    focusBorderColor='none'
                    
                  />
                  <InputRightElement width="4.5rem">
                    <Button background='transparent' size='md'   onClick={handleShowClick}>
                      {showPassword ? <AiFillEye color='#626262' fontSize='20px' 
                       height='75px' width='50px'
                        cursor='pointer' /> : <AiFillEyeInvisible height='75px' color='#626262' fontSize='20px'  width='50px'
                        cursor='pointer'/>}
                    </Button>
                </InputRightElement>
              </InputGroup>
              {!password ?  <FormErrorMessage>Password is required.</FormErrorMessage> : null}
            </FormControl>
            <Text style={{fontSize:'16px',fontWeight:'500'}}>Your password must contain:</Text>
              <RadioGroup>
              <Stack direction='column'>
              <Box id='capital' display='flex' align='center'>
                {password.length>7? <FontAwesomeIcon icon={faCheck} color='green' />:
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
                   fontWeight='500'>at least 8 characters</Text>
              </Box>


              

              <Box id='number' display='flex' textAlign='center' justifyItems='center'>
                 {password.match(/[0-9]/)?<FontAwesomeIcon icon={faCheck}  color='green' />:
                 <FontAwesomeIcon icon={faCircle}
                 style={{border:'1px solid gray',borderRadius:'50%',backgroundColor:'white',padding: '0.5px'}}
                  />}
                  <Text ml='10px' letterSpacing='-0.5px' lineheight='1.5px' color='#757575'
                  position='relative'
                  padding='0'
                  overflow='hidden'
                  cursor='pointer'
                  fontSize='16px'
                   fontWeight='500'>at least 1 number</Text>
              </Box>

              <Box id='lower' display='flex' align='center'>
                {password.match(/[a-z]/)? <FontAwesomeIcon icon={faCheck} color='green' />:
                 <FontAwesomeIcon icon={faCircle} border='1px solid gray'
                  style={{border:'1px solid gray',borderRadius:'50%',backgroundColor:'white',padding: '0.5px'}}/>}
                  <Text ml='10px' letterSpacing='-0.5px' lineheight='1.5px' color='#757575'
                  position='relative'
                  padding='0'
                  overflow='hidden'
                  cursor='pointer'
                  fontSize='16px'
                   fontWeight='500'>a lower case character</Text>
              </Box>

              <Box id='capital' display='flex' align='center'>
                { password.match(/[A-Z]/)?<FontAwesomeIcon icon={faCheck}  color='green' />:
                 <FontAwesomeIcon icon={faCircle}
                 style={{border:'1px solid gray',borderRadius:'50%',backgroundColor:'white',padding: '0.5px'}} />}
                  <Text ml='10px' letterSpacing='-0.5px' lineheight='1.5px'
                  position='relative'
                  padding='0'
                  color='#757575'
                  overflow='hidden'
                  cursor='pointer'
                  fontSize='16px'
                   fontWeight='500'>a upper case character</Text>
              </Box>
              
             
             </Stack>
            </RadioGroup>
            </Stack>
            <Text pt={4} fontSize="17px"
             color='#393939'
             fontFamily='Circular-Bold'
              fontWeight="600">Were you referred to us?</Text>
              <Flex direction={{sm:'row'}}>
            <RadioGroup>
              <Stack direction='row' style={{display: 'flex',justifyContent: 'space-between'}}>
               <Radio
               style={{
               borderRadius: '50%',backgroundColor: 'white',padding: '0.5px',color:'blue'}}
                border='1px solid gray'
                value="no"
                checked={show === "no"}
                onChange={(e) => setShow(e.currentTarget.value)}
               >
                <Text style={{fontSize:'16px',fontWeight:'400'}} color='#757575'>
                  No</Text></Radio>
               <Radio
               colorScheme='blue'
               style={{border: '1px solid gray',
               borderRadius: '50%',backgroundColor: 'white',padding: '0.5px',color:'blue'}}
                value="yes"
                checked={show === "yes"}
                onChange={(e) => setShow(e.currentTarget.value)}
               ><Text style={{fontSize:'16px',fontWeight:'400'}}>Yes</Text></Radio>
                </Stack>
             </RadioGroup>
             </Flex>
             {show === "yes" &&<Stack >
             {/* <SlideFade in={isOpen} offsetY='20px'> */}
              <Text>Please enter your referral code, or the name of the person who referred you</Text>
              <Box>
                <FormControl id="firstName" isRequired>
                  <Input type="text"
                  _focus={{backgroundColor:'white'}}
                  focusBorderColor='none'
                   placeholder='Enter Referal code or name'
                   _placeholder={{
                    color: '#4C4C4C',
                  }}/>
                </FormControl>
              </Box>
              {/* </SlideFade> */}
            </Stack>}


            <Stack spacing={10} pt={2}>
              <Button
               variant='primary'
                width='full'
                // size="lg"
                opacity='0.5'
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