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
    CircularProgress,
    CircularProgressLabel,
  } from "@chakra-ui/react";
  import { useState } from "react";
import { MdAirlineSeatIndividualSuite } from "react-icons/md";
  import { Link } from "react-router-dom";
  import "./_fonts.css";
  
  
  
  export default function Loading() {
    const [email, setEmail] = useState("");
    const [isLarger] = useMediaQuery("(max-width: 400px)");
    const [value,setValue] = useState(1);
    return (
      <Flex
        bg={{ sm: "white", md: "#f4f4f4", lg: "#f4f4f4" }}
        minH={"100vh"} mt='-30px'
        align={"center"}
        justify={"center"}>
        <Stack spacing={4}  maxW={"lg"} py={12} px={12} mt='-100px' width="100%">
          <Stack  display='flex' justifyContent='center'
             alignItems='center'>
                <CircularProgress padding='50px' value={40} color='blue' isIndeterminate>
                 <CircularProgressLabel ><Text>Confirming its you</Text>
                    {
                        setInterval(()=>{
                          
                            <h3>{setValue((value+1))}</h3>
                          
                        },2000)
                    }</CircularProgressLabel>
                 </CircularProgress>
            </Stack>
            <Box   display='flex' justifyContent='center' 
             alignItems='center' width="100%">
            <Text  fontSize='22px'
              color="#6f6f6f" 
              lineHeight="1.6"
              fontFamily="Circular-Medium,Arial,Helvetica,sans-serif">
                  We are just verifying your details
                   </Text>
          </Box>
          <Box   display='flex' justifyContent='center' 
             alignItems='center'>
              <Text  fontSize='22px' mt='-15px'
              color="#6f6f6f" 
              lineHeight="1.6"
              fontFamily="Circular-Medium,Arial,Helvetica,sans-serif">
                   
                   this may take a minute!.
            </Text>
             </Box>
          
          
        </Stack>
      </Flex>
    );
  }
  