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
import { Link } from "react-router-dom";
import "./_fonts.css";



export default function Signup() {
  const [email, setEmail] = useState("");
  const [isLarger] = useMediaQuery("(max-width: 400px)");

  return (
    <Flex
      bg={{ sm: "white", md: "#f4f4f4", lg: "#f4f4f4" }}
      minH={"100vh"} mt='-30px'
      align={"center"}
      justify={"center"}>
      <Stack spacing={4}  maxW={"lg"} py={12} px={12} mt='-100px' width="100%">
        <Stack  display='flex' justifyContent='center'
           alignItems='center'>
          <Heading
             fontWeight='medium' 
            fontSize="36px"
            align="left"
            lineHeight="38px"
            fontFamily= "Helvetica, Roboto, Arial, sans-serif">
               Forgotten password
          </Heading></Stack>
          <Box   display='flex' justifyContent='center' 
           alignItems='center' width="100%">
          <Text  fontSize='15px'
            color="#6f6f6f" 
            lineHeight="1.6"
            fontFamily="Circular-Book,Arial,Helvetica,sans-serif">
                 Please enter your email address below
                 </Text>
        </Box>
        <Box   display='flex' justifyContent='center' 
           alignItems='center'>
            <Text  fontSize='15px' mt='-15px'
            color="#6f6f6f" 
            lineHeight="1.6"
            fontFamily="Circular-Book,Arial,Helvetica,sans-serif">
                 
                 and we'll send a link to reset your password.
          </Text>
           </Box>
        
        <Box rounded={"lg"} width="100%" >
          <Stack spacing={8}>
            <Box >
              <FormControl id="email">
                <Input
                width='100%'
                  type="email"
                  fontSize="14px"
                  fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
                  _focus={{ backgroundColor: "white" }}
                  focusBorderColor="none"
                  placeholder="Email Address"
                  color="#0a0a0a"
                  _placeholder={{
                    color: "#626262",
                    fontSize: "14px",
                    fontFamily: "Circular-Book,Arial,Helvetica,sans-serif",
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}/>
              </FormControl>
            </Box>
          </Stack>

          <Stack spacing={10} pt={2} mt='30px'>
            <Button
              variant="primary"
              width="full"
              mt="10px"
              borderRadius="30px"
              minH="50px"
              color={"white"}
              fontFamily="Circular-Book, Arial, Helvetica, sans-serif"
              background="linear-gradient(95deg,#f03ea6 4.1%,#ff6b00 95%,#f03ea6 200%)">
              Send me a link
            </Button>
          </Stack>
          <Box display='flex' align='center'
           width='100%' height='100%' mt='50px'
           justifyContent={['center', 'center', 'center', 'center']}>
            <Link to='/password-forgotten-security-questions'>
          <Text fontSize='16px' color='#2199e8'
           fontFamily='Circular-Book,Arial,Helvetica,sans-serif'>Or verify your identity with your security answers.</Text></Link>
          </Box>
        </Box>
      </Stack>
    </Flex>
  );
}
