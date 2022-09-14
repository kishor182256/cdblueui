import {
    Flex,
    Box,
    FormControl,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useMediaQuery,
    Select,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import "./_fonts.css";
  import "./select.css";
import CountrySelect from "../components/CountrySelect";

  
  
  
  export default function EnterDetails() {
    const [email, setEmail] = useState("");
    const [isLarger] = useMediaQuery("(max-width: 400px)");
    const [visible,setVisible] = useState(false)

    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/setpreference');
    }
  
    return (
      <Flex
        bg={{ sm: "white", md: "#f4f4f4", lg: "#f4f4f4" }}
        height='100%'
         mt='-30px'
        align={"center"}
        justify={"center"}>
        <Stack spacing={4}  maxW={"lg"} py={12} px={12} mt='-100px' width="100%">
          <Stack  display='flex'
             >
            <Heading
               fontWeight='medium' 
              fontSize="36px"
              align="left"
              mt='80px'
              lineHeight="38px"
              fontFamily= "Helvetica, Roboto, Arial, sans-serif">
                 Enter your details
            </Heading></Stack>
            <Box   display='flex' 
              width="100%">
            <Text  fontSize='15px'
              color="#6f6f6f" 
              lineHeight="1.6"
              fontFamily="Circular-Book,Arial,Helvetica,sans-serif">
                  To create your account, we need to verify your identity. Your
                   </Text>
          </Box>
          <Box   display='flex' >
             
              <Text  fontSize='15px' mt='-15px'
              color="#6f6f6f" 
              lineHeight="1.6"
              fontFamily="Circular-Book,Arial,Helvetica,sans-serif">
                   
                   details are safe and we never share them.
            </Text>
             </Box>
          
          <Box rounded={"lg"} width="100%" >
            <Stack spacing={8}>
              <Box >
                <Box ><CountrySelect
                   iconColor="rgb(11, 95, 255)"
                   border='1px solid #e9e9e9'
                   
                   _focus={{backgroundColor:'white'}}
                   _hover={{ backgroundColor: "white" }}
                   focusBorderColor="none"
                    bg="white"
                    height="180px"
                    ml="20px"
                  /></Box>
                <FormControl id="email">
                  <Input
                  mt='20px'
                  width='100%'
                    type="email"
                    fontSize="14px"
                    fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
                    _focus={{ backgroundColor: "white" }}
                    focusBorderColor="none"
                    placeholder="Start typing your address to search"
                    color="#0a0a0a"
                    _placeholder={{
                      color: "#626262",
                      fontSize: "14px",
                      fontFamily: "Circular-Book,Arial,Helvetica,sans-serif",
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}/>

                    <Text color='rgb(11, 95, 255)'
                     onClick={()=>setVisible(true)}
                     fontWeight='400'
                    fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
                    >{!visible && <Text
                         _hover={{textDecoration:'underline'}}
                         style={{cursor:'pointer'}}
                        fontWeight='400'
                        fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
                         color='rgb(11, 95, 255)'> Enter address manually</Text>}</Text>

                    {visible&&<Box>
                
                        <Box mt='20px'><Input
                  width='100%'
                    type="email"
                    fontSize="14px"
                    fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
                    _focus={{ backgroundColor: "white" }}
                    focusBorderColor="none"
                    placeholder="Address line 1"
                    color="#0a0a0a"
                    _placeholder={{
                      color: "#626262",
                      fontSize: "14px",
                      fontFamily: "Circular-Book,Arial,Helvetica,sans-serif",
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}/></Box>
                    <Box mt='20px'>
                    <Input
                  width='100%'
                    type="email"
                    fontSize="14px"
                    fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
                    _focus={{ backgroundColor: "white" }}
                    focusBorderColor="none"
                    placeholder="Town/city"
                    color="#0a0a0a"
                    _placeholder={{
                      color: "#626262",
                      fontSize: "14px",
                      fontFamily: "Circular-Book,Arial,Helvetica,sans-serif",
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}/>
                    </Box>
                    <Box mt='20px'><Input
                    width='100%'
                    type="email"
                    fontSize="14px"
                    fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
                    _focus={{ backgroundColor: "white" }}
                    focusBorderColor="none"
                    placeholder="Country(optinal)"
                    color="#0a0a0a"
                    _placeholder={{
                      color: "#626262",
                      fontSize: "14px",
                      fontFamily: "Circular-Book,Arial,Helvetica,sans-serif",
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}/></Box>
                    <Box mt='20px'>
                    <Input
                    width='100%'
                    type="email"
                    fontSize="14px"
                    fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
                    _focus={{ backgroundColor: "white" }}
                    focusBorderColor="none"
                    placeholder="Post code"
                    color="#0a0a0a"
                    _placeholder={{
                      color: "#626262",
                      fontSize: "14px",
                      fontFamily: "Circular-Book,Arial,Helvetica,sans-serif",
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}/>
                    </Box>
                    </Box>}
                    <Box mt='30px'><Text>Date of birth</Text></Box>
                    <Box display='flex' flex='flx' justifyContent='space-evenly' mt='10px'>
                    <Input 
                     _focus={{ backgroundColor: "white" }}
                     focusBorderColor="none"
                     placeholder='DD'
                     _placeholder={{color:'gray',
                      fontSize:"16px",
                      fontFamily:"Circular-Book,Arial,Helvetica,sans-serif"}}
                     bg='white'
                     border='1px solid #e9e9e9'
                     maxW='150px'/>
                     <Input
                      _focus={{ backgroundColor: "none" }}
                      placeholder='MM'
                      focusBorderColor="none"
                      _placeholder={{color:'gray',
                      fontSize:"16px",
                      fontFamily:"Circular-Book,Arial,Helvetica,sans-serif"}}
                      bg='white'
                      border='1px solid #e9e9e9'
                      maxW='150px' ml='30px'/>
                     <Input maxW='150px'
                      _focus={{ backgroundColor: "white" }}
                      focusBorderColor="none"
                      placeholder='YYYY'
                      _placeholder={{color:'gray',
                      fontSize:"16px",
                      fontFamily:"Circular-Book,Arial,Helvetica,sans-serif"}}
                      bg='white'
                      border='1px solid #e9e9e9'
                      ml='30px'/></Box>
                     <Box mt='20px'>
                        <Select bg='white'
                         borderRadius='none'
                         focusBorderColor="none"
                         iconColor="rgb(11, 95, 255)"
                         _focus={{ backgroundColor: "white" }}
                         _hover={{ backgroundColor: "white" }}
                         height='60px'
                         fontSize="16px"
                         fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
                         border='1px solid black'
                         color='gray' >
                          <option style={{backgroundColor:'#FFFFFF',color:'gray'}} value=''>Occupation</option>
                          <option style={{backgroundColor:'#FFFFFF',color:'gray'}} value=''>Architect</option>
                          <option style={{backgroundColor:'#FFFFFF',color:'gray'}} value=''>Actor</option>
                          <option style={{backgroundColor:'#FFFFFF',color:'gray'}} value=''>Banker</option>
                          <option style={{backgroundColor:'#FFFFFF',color:'gray'}} value=''>Charity</option>
                          <option style={{backgroundColor:'#FFFFFF',color:'gray'}} value=''>Chemist</option>
                          <option style={{backgroundColor:'#FFFFFF',color:'gray'}} value=''>Coach</option>

                        </Select>
                     </Box>
                     <Box mt='20px'
                     
                     >
                        <Text color='rgb(11, 95, 255)'
                        style={{cursor: 'pointer'}}
                         onClick={()=>setVisible(!true)}
                     fontFamily='Circular-Book,Arial,Helvetica,sans-serif'>Why do we need this?</Text></Box>
                     {visible && <Box mt='20px'>
                        <Text  fontFamily='Circular-Book,Arial,Helvetica,sans-serif'>
                            We have to ask you this to comply with financial regulations.
                            </Text></Box>}
                </FormControl>
              </Box>
            </Stack>
  
            <Stack spacing={10} pt={2} mt='30px'>
              <Button
                onClick={handleClick}
                variant="primary"
                width="full"
                mt="10px"
                borderRadius="30px"
                minH="50px"
                color={"white"}
                fontFamily="Circular-Book, Arial, Helvetica, sans-serif"
                background="linear-gradient(95deg,#f03ea6 4.1%,#ff6b00 95%,#f03ea6 200%)">
                Continue
              </Button>
            </Stack>
            
          </Box>
        </Stack>
      </Flex>
    );
  }
  