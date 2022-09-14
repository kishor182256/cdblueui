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
import { useEffect } from "react";
  import { useState } from "react";
import { MdAirlineSeatIndividualSuite } from "react-icons/md";
  import { Link, Navigate, useNavigate } from "react-router-dom";
  import "./_fonts.css";
  
  
  
  export default function Loading() {
    const [email, setEmail] = useState("");
    const [isLarger] = useMediaQuery("(max-width: 400px)");
    const [progress, setProgress] = useState(10);
    const navigate = useNavigate()

    console.log(progress);

   

    useEffect(() =>{
      if(progress===100)
      
      navigate('/identity')
      
  },[progress]);

    
    return (
      <Flex
        bg={{ sm: "white", md: "#f4f4f4", lg: "#f4f4f4" }}
        minH={"100vh"} mt='-30px'
        align={"center"}
        justify={"center"}>
        <Stack spacing={4}  maxW={"lg"} py={12} px={12} mt='-100px' width="100%">
          <Stack  display='flex' justifyContent='center'
             alignItems='center'>
                <CircularProgress size='250px' thickness='3px' 
                padding='50px' value={40}  color='blue' isIndeterminate>
                 <CircularProgressLabel
                  fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
                  fontWeight='400'
                  padding='50px'
                 fontSize='32px'
                 color='#003060'
                  >Confirming <br></br> its you
                    <Box><Text color='rgb(11, 95, 255)'>{setInterval(() => {
                     setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
                               }, 1500)
    
                    }%</Text></Box></CircularProgressLabel>
                 </CircularProgress>
            </Stack>
            <Box   display='flex' justifyContent='center' 
             alignItems='center' width="100%">
            <Text  fontSize='22px'
              color="#6f6f6f" 
              fontWeight='400'
              lineHeight="1.6"
              fontFamily="Circular-Book,Arial,Helvetica,sans-serif">
                  We are just verifying your details
                   </Text>
          </Box>
          <Box   display='flex' justifyContent='center' 
             alignItems='center'>
              <Text  fontSize='22px' mt='-15px'
              color="#6f6f6f" 
              lineHeight="1.6" fontWeight='400'
              fontFamily="Circular-Book,Arial,Helvetica,sans-serif">
                   
                   this may take a minute!.
            </Text>
             </Box>
          
          
        </Stack>
      </Flex>
    );
  }
  