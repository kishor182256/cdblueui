import {
    Flex,
    Box,
    
    Stack,
  
    Heading,
    Text,
    useMediaQuery,
    Image,
    Button,
  } from "@chakra-ui/react";
  
  import "./_fonts.css";
  
  
  
  export default function MobileAppFlow() {
   
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
                {/* <Image src='http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/icon-mail.svg' /> */}
            <Heading
               fontWeight='medium' 
              fontSize="36px"
              align="left" mt='75px'
              lineHeight="38px"
              fontFamily= "Helvetica, Roboto, Arial, sans-serif">
              We've sent an SMS to
            </Heading>
            <Heading
               fontWeight='medium' 
              fontSize="36px"
              align="left"
              lineHeight="38px"
              fontFamily= "Helvetica, Roboto, Arial, sans-serif">
              +44 7944 123 456
            </Heading>
        <Image mt='10px' src='http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/icon-identity-sms-sent.svg' /> 

            </Stack>
            <Box   display='flex' justifyContent='center' 
             alignItems='center' width="120%">
            <Text  fontSize='15px' mr='30px'
              color="#6f6f6f" 
              lineHeight="1.6"
              fontFamily="Circular-Book,Arial,Helvetica,sans-serif">
          Now you can finish setting up your account on your
                            </Text>
          </Box>
          <Box   display='flex' justifyContent='center' 
             alignItems='center'>
              <Text  fontSize='15px' mt='-15px'
              color="#6f6f6f" ml='25px'
              lineHeight="1.6"
              fontFamily="Circular-Book,Arial,Helvetica,sans-serif">
                   
                   mobile. You can safely close this window.           </Text>
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
                     fontSize='16px' mt='20px' >Download our App</Heading>
                    {/* <Text color='#626262' font-size='14px !important' lineHeight='1.6'
                     fontFamily='Circular-Book,Arial,Helvetica,sans-serif'>
                        Enjoy 24/7 control over your transfers</Text> */}
                    <Box display='flex' padding='5px'>
                        <Image src='http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/cd-app-store.png'/>
                       <Image ml='10px' src='http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/cd-google-play.png'/></Box>
                    </Box>
                </Box>
                 
               </Box>
               
               
              </Box>
            </Stack>
            <Stack spacing={10} pt={2}>
              <Button
               variant='primary'
                width='full'
                mt='10px'
               
                borderRadius='30px'
                minH='50px'
                color={'white'}
                fontFamily='Circular-Book,Arial,Helvetica,sans-serif'
                background= 'linear-gradient(95deg,#f03ea6 4.1%,#ff6b00 95%,#f03ea6 200%)'
                >
                 Close this window
              </Button>
              
            
            
          </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  