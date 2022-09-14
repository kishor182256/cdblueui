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
  } from "@chakra-ui/react";
  import { useState } from "react";
import { GrAlert } from "react-icons/gr";
  import { Link, useNavigate } from "react-router-dom";
  import "./_fonts.css";
  import ReactPhoneInput from "react-phone-input-2";
import CountrySelect from "../components/CountrySelect";

  
  
  
  export default function SecurityQuestion() {
    const [email, setEmail] = useState("");
    const [isLarger] = useMediaQuery("(max-width: 400px)");

    const [phone,setPhone] = useState('')

   const  handleOnChange = ()=> {
      
      setPhone({ phone: phone }, () => {
        console.log(phone)
      });
    };

    const navigate = useNavigate();

    const handleClick = ()=> {
       navigate('/enterdetails')
    }
  
    return (
      <Flex
        bg={{ sm: "white", md: "#f4f4f4", lg: "#f4f4f4" }}
        minH={"100vh"} mt='-30px'
        align={"center"}
        justify={"center"}>
        <Stack spacing={4}  maxW={"lg"} py={12} px={12} mt='-100px' width="100%">
          <Stack  display='flex' justifyContent='center'
             alignItems='center'>
                <Box borderLeft='5px solid #FA4D56'  minH='60px' borderRadius='5px' width='110%'
                 bg='white !important' boxShadow='0px 0px 16px rgb(0 0 0 / 10%)'>
                    <Box justifyContent={['center', 'center', 'center', 'center']}
              alignItems={['center', 'center', 'center', 'center']}>
              <Box display='flex' mt='20px' ml='15px'><Box mt='3px'><GrAlert style={{color:'#FA4D56'}}/></Box>
            <Box mb='10px'><Text display='inline-block' fontSize='14px'
            fontFamily='Circular-Book,Arial,Helvetica,sans-serif' ml='10px' 
         >Please enter a valid mobile number so we can send your PIN.</Text></Box></Box>
         </Box>
                 </Box>
           </Stack>
            <Box   display='flex' justifyContent='center'  flexDirection='column'
             alignItems='center' width="100%">
               <Box width='100%'>
                <Heading
                fontWeight='300'
                fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
                >Set up your security</Heading></Box> 
             <Text  fontSize='15px'
              color="#6f6f6f" 
              lineHeight="1.6"
              fontFamily="Circular-Book,Arial,Helvetica,sans-serif">
                  To keep your account secure,
                   we sometimes send you a security code. Enter the mobile number you’d like us to use.
                   </Text>
          </Box>
          
          
          <Box rounded={"lg"} width="100%"  >
            <Stack spacing={8} display='flex'>
              <Box display='flex' >
                <FormControl id="email">
                  <Box><CountrySelect/></Box>
                  <Box><Input
                  mt='20px'
                    width='100%'
                    type="number"
                    fontSize="14px"
                    fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
                    _focus={{ backgroundColor: "white" }}
                    focusBorderColor="none"
                    placeholder="Mobile Number"
                    color="#0a0a0a"
                    _placeholder={{
                      color: "#626262",
                      fontSize: "14px",
                      fontFamily: "Circular-Book,Arial,Helvetica,sans-serif",
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}/></Box>
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
                minH="50px" fontWeight='200'
                color={"white"}
                fontFamily="Circular-Book, Arial, Helvetica, sans-serif"
                background="linear-gradient(95deg,#f03ea6 4.1%,#ff6b00 95%,#f03ea6 200%)">
                Confirm my mobile
              </Button>
            </Stack>
            
          </Box>
        </Stack>
      </Flex>
    );
  }
  