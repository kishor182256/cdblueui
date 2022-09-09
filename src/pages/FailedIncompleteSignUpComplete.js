import {
    Flex,
    Box,
    
    Stack,
  
    Heading,
    Text,
    useMediaQuery,
    Image,
  } from "@chakra-ui/react";
  
  import "./_fonts.css";
  
  
  
  export default function FailedSignUpInComplete() {
   
    const [isLarger] = useMediaQuery("(max-width: 400px)");
  
    return (
      <Flex
        bg={{ sm: "white", md: "#f4f4f4", lg: "#f4f4f4" }}
        minH={"100vh"} mt='-30px'
        align={"center"}
        justify={"center"}>
        <Stack spacing={4}  maxW={"lg"} py={12} px={12} mt='-100px' width="110%">
          <Stack  display='flex' justifyContent='center'
             alignItems='center'>
                <Image src='http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/icon-mail.svg' />
            <Heading
               fontWeight='medium' 
              fontSize="34px"
              align="left"
              lineHeight="38px"
              fontFamily= "Helvetica, Roboto, Arial, sans-serif">
               Welcome to Currencies Direct
            </Heading></Stack>
            <Box   display='flex' justifyContent='center' 
             alignItems='center' width="120%">
            <Text  fontSize='15px'
              color="#6f6f6f" 
              lineHeight="1.6"
              fontFamily="Circular-Book,Arial,Helvetica,sans-serif">
To complete your registration please check your emails and provide your                              </Text>
          </Box>
          <Box   display='flex' justifyContent='center' 
             alignItems='center'>
              <Text  fontSize='15px' mt='-15px'
              color="#6f6f6f" 
              lineHeight="1.6"
              fontFamily="Circular-Book,Arial,Helvetica,sans-serif">
                   
                   documentation within 72 hours.            </Text>
             </Box>
          
          <Box rounded={"lg"} width="100%" >
            
  
            <Stack spacing={10} pt={2} mt='30px'>
              <Box
                variant="primary"
                width="450px"
                height='130px'
                mt="10px"
                borderRadius='4px'
                border='1px solid #e6e6e6'
                minH="100px"
                boxShadow='0px 0px 20px rgb(0 0 0 / 8%)'            
                background="white">
               <Box display='flex'>
                <Box display='flex'>
                    <Image src='http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/app-img.svg'/>
                    <Box ml='10px'>
                    <Heading
                    fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
                     fontSize='16px' mt='20px' >Get the app</Heading>
                    <Text color='#626262' font-size='14px !important' lineHeight='1.6'
                     fontFamily='Circular-Book,Arial,Helvetica,sans-serif'>
                        Enjoy 24/7 control over your transfers</Text>
                    <Box display='flex' padding='5px'>
                        <Image src='http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/cd-app-store.png'/>
                       <Image ml='10px' src='http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/cd-google-play.png'/></Box>
                    </Box>
                </Box>
                 
               </Box>
               
               
              </Box>
            </Stack>
           
          </Box>
        </Stack>
      </Flex>
    );
  }
  