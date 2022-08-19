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
import "./_fonts.css";



export default function Signup() {
  const [email, setEmail] = useState("");
  const [isLarger] = useMediaQuery("(max-width: 400px)");

  return (
    <Flex
      bg={{ sm: "white", md: "#f4f4f4", lg: "#f4f4f4" }}
      minH={"100vh"}
      align={"center"}
      justify={"center"}>
      <Stack spacing={4}  maxW={"lg"} py={6} px={6}>
        <Stack  display='flex' justifyContent='center'
           alignItems='center'>
          <Heading
            fontSize="32px"
            align="left"
            lineHeight="32px"
            fontFamily="Circular-Book,Arial,Helvetica,sans-serif">
               Forgotten password
          </Heading></Stack>
          <Box   display='flex' justifyContent='center' 
           alignItems='center'>
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
        
        <Box rounded={"lg"}>
          <Stack spacing={8}>
            <Box >
              <FormControl id="email">
                <Input
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

          <Stack spacing={10} pt={2}>
            <Button
              variant="primary"
              width="full"
              mt="10px"
              borderRadius="30px"
              minH="50px"
              color={"white"}
              fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
              background="linear-gradient(95deg,#f03ea6 4.1%,#ff6b00 95%,#f03ea6 200%)">
              Send me a link
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
