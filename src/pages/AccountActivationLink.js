import {
  Flex,
  Heading,
 
  Button,

  Stack,
  
  Box,
 
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import "./_fonts.css";





const AccountActivationLink = () => {
  const [isLarger] = useMediaQuery("(max-width: 700px)");

  return (
    <Box
      mt="-25px"
      justifyContent={["center", "center", "center", "center"]}
      alignItems={["center", "center", "center", "center"]}>
    
      <Flex
        flexDirection="column"
        height="100vh"
        backgroundColor={{ sm: "white", md: "#f4f4f4 !important" }}
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          // flexDir="column"
          mb="2"
          justifyContent={["center", "center", "center", "center"]}
          alignItems={["center", "center", "center", "center"]}
          marginTop={{ lg: "-100px", sm: "-80px" }}
          backgroundColor={{ sm: '"#f4f4f4"' }}
          width="100%"
        >
          <Box mt='-40px'
            justifyContent={["center", "center", "center", "center"]}
            alignItems={["center", "center", "center", "center"]}
          >
            <Box width='95%'
             mt={{sm:'60px',lg:'-35px'}}>
              <Heading
                fontSize="32px"
                display="flex"
                
                justifyContent="center"
                fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
                textAlign="center"
                lineHeight="38px" fontWeight='400'
              >
                Please check your inbox
              </Heading>
              <Heading
                fontSize="32px"
                display="flex"
                justifyContent="center"
                fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
                textAlign="center"
                lineHeight="38px" fontWeight='400'
              >
                for your activation link
              </Heading>
            </Box>
            <Box
              display="flex"
              maxW={isLarger ? "110%" : "80%"}
              ml={isLarger ? "-12.5%" : "10%"}
              mr={isLarger ? "-10.5%" : "10%"}
              alignItems="center"
              mt="20px"
              justifyContent="center"
            >
              <Flex>
                <Text
                  fontSize="16px"
                  textAlign="center"
                  letterSpacing="-0.5px"
                  ml="50px"
                  flexWrap="nowrap"
                  fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
                  color="#626262"
                  width="100%"
                >
                  We've sent an activation link to your email address
                  email@example.com
                </Text>
              </Flex>
            </Box>
            <Box
              display="flex"
              maxW={isLarger ? "110%" : "80%"}
              ml={isLarger ? "-12.5%" : "10%"}
              mr={isLarger ? "-10.5%" : "10%"}
              alignItems="center"
              flexWrap="wrap"
              justifyContent="center"
              mt="20px"
            >
              <Text
                fontSize="16px"
                textAlign="center"
                letterSpacing="-0.5px"
                ml="50px"
                fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
                color="#626262"
                width="100%"
              >
                Please click on the link inside this email to continue. If you
                do not see this
              </Text>
              <Text
                fontSize="16px"
                textAlign="center"
                letterSpacing="-0.5px"
                ml="50px"
                fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
                color="#626262"
                width="100%"
              >
                email, please check your email spam or junk folders.
              </Text>
            </Box>

            <Box
              display="flex"
              mt="20px"
              maxW={isLarger ? "110%" : "80%"}
              ml={isLarger ? "-12.5%" : "10%"}
              mr={isLarger ? "-10.5%" : "10%"}
              alignItems="center"
              flexWrap="wrap"
              justifyContent="center"
            >
              <Text
                fontSize="16px"
                textAlign="center"
                letterSpacing="-0.5px"
                ml="50px"
                fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
                color="#626262"
                width="100%"
              >
                If after 10 minutes you have still not received our email, click
                the button below
              </Text>
              <Text
                fontSize="16px"
                textAlign="center"
                letterSpacing="-0.5px"
                ml="50px"
                fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
                color="#626262"
                width="100%"
              >
                to send a new one.
              </Text>
            </Box>
          </Box>
           
          <Button
            width={isLarger?'95%':'50%'}
            fontSize="16px"
            mt="20px"
            height="50px"
           
            fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
            background="linear-gradient(95deg,#f03ea6 4.1%,#ff6b00 95%,#f03ea6 200%)"
            variant="primary"
          >
            Resend Email
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default AccountActivationLink;
