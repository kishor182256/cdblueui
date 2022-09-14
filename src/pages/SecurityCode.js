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
  HStack,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import { useState } from "react";
import { GrAlert } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./_fonts.css";

export default function SecurityCode() {
  const [email, setEmail] = useState("");
  const [isLarger] = useMediaQuery("(max-width: 400px)");

  return (
    <Flex
      bg={{ sm: "white", md: "#f4f4f4", lg: "#f4f4f4" }}
      minH={"100vh"}
      mt="-30px"
      align={"center"}
      justify={"center"}
    >
      <Stack spacing={4} maxW={"lg"} py={12} px={12} mt="-100px" width="100%">
        <Stack display="flex" justifyContent="center" alignItems="center">
          <Box
            borderLeft="5px solid #FA4D56"
            minH="60px"
            borderRadius="5px"
            bg="white"
            boxShadow="0px 0px 16px rgb(0 0 0 / 10%)"
          >
            <Box
              justifyContent={["center", "center", "center", "center"]}
              alignItems={["center", "center", "center", "center"]}
            >
              <Box>
                <GrAlert style={{ color: "#FA4D56" }} />
              </Box>
              <Box>
                <Text
                  display="inline-block"
                  fontSize="14px"
                  fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
                >
                  Please enter a valid mobile number so we can send your PIN.
                </Text>
              </Box>
            </Box>
          </Box>
        </Stack>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Heading 
          fontWeight='400'
          fontFamily="Circular-Book, Arial, Helvetica, sans-serif" >
            We've sent your security code by SMS to +44 324234234</Heading>
        </Box>
        
         
       

        <Box rounded={"lg"} width="100%">
          <Stack spacing={8}>
            <Box>
              <FormControl id="email">
              <HStack justifyContent='space-around'
   display='flex'>
  <PinInput defaultValue='234' width="100%"
  justifyContent='space-around' 
   display='flex'>
    <PinInputField bg='white' height='60px ' border='1px solid rgb(233, 233, 233) !important '
     minW='60px !important'/>
    <PinInputField bg='white' height='60px ' border='1px solid rgb(233, 233, 233) !important'
     minW='60px !important'  />
    <PinInputField bg='white' height='60px ' border='1px solid rgb(233, 233, 233) !important'
     minW='60px !important'/>
    <PinInputField bg='white' height='60px '  border='1px solid rgb(233, 233, 233) !important'
    minW='60px !important' />
    <PinInputField  bg='white' height='60px ' border='1px solid rgb(233, 233, 233) !important'
     minW='60px !important'/>
  </PinInput>
</HStack>
              </FormControl>
            </Box>
          </Stack>

          <Stack spacing={10} pt={2} mt="30px">
            <Button
              variant="primary"
              width="full"
              mt="10px"
              borderRadius="30px"
              minH="50px"
              color={"white"}
              fontFamily="Circular-Book, Arial, Helvetica, sans-serif"
              background="linear-gradient(95deg,#f03ea6 4.1%,#ff6b00 95%,#f03ea6 200%)"
            >
              Send me a link
            </Button>
          </Stack>
          <Box
            display="flex"
            align="center"
            width="100%"
            height="100%"
            mt="50px"
            justifyContent={["center", "center", "center", "center"]}
          >
            <Link to="/password-forgotten-security-questions">
              <Text
                fontSize="16px"
                color="#2199e8"
                fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
              >
                Or verify your identity with your security answers.
              </Text>
            </Link>
          </Box>
        </Box>
      </Stack>
    </Flex>
  );
}
