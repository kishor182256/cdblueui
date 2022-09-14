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
  Checkbox,
  MenuItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CountrySelect from "../components/CountrySelect";
import  CountrySelector  from "../components/CountrySelect";
import "./_fonts.css";

export default function SetPreferences() {
  const [email, setEmail] = useState("");
  const [isLarger] = useMediaQuery("(max-width: 400px)");
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/loader");
  };

  return (
    <Flex
      bg={{ sm: "white", md: "#f4f4f4", lg: "#f4f4f4" }}
      height="100%"
      mt="-30px"
      align={"center"}
      justify={"center"}
    >
      <Stack spacing={4} maxW={"lg"} py={12} px={12} mt="-100px" width="100%">
        <Stack display="flex">
          <Heading
            fontWeight="medium"
            fontSize="36px"
            align="left"
            mt="80px"
            lineHeight="38px"
            fontFamily="Helvetica, Roboto, Arial, sans-serif"
          >
            Set your preferences
          </Heading>
        </Stack>
        <Box display="flex" width="100%">
          <Text
            fontSize="15px"
            color="#6f6f6f"
            lineHeight="1.6"
            fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
          >
            Now, we’ll set up your account in the way that works best for you.
          </Text>
        </Box>
        <Box display="flex">
          <Text
            fontSize="15px"
            mt="-15px"
            color="#6f6f6f"
            lineHeight="1.6"
            fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
          >
            Then you’ll have access to expert advice if you need it.
          </Text>
        </Box>

        <Box rounded={"lg"} width="100%">
          <Stack spacing={8}>
            <Box>
              <Box display="flex" justifyContent="space-between" >
                <Box>
                  <Text>From</Text>
                  <CountrySelect  border='1px solid #e9e9e9' 
                  bg="white" height="60px"
                  iconColor="rgb(11, 95, 255)"
                  _focus={{backgroundColor:'white'}}
                  _hover={{ backgroundColor: "white"}}
                  focusBorderColor="none"
                    width='210px !important' />
                </Box>
                <Box ml="5px"
                 >
                  <Text>To</Text>
                 
                  <CountrySelect
                   iconColor="rgb(11, 95, 255)"
                   border='1px solid #e9e9e9'
                   width='210px !important'
                   _focus={{backgroundColor:'white'}}
                   _hover={{ backgroundColor: "white" }}
                   focusBorderColor="none"
                    bg="white"
                    height="160px"
                    ml="20px"
                  />
                    
                  
                </Box>
              </Box>
              <FormControl id="email">
                <Box mt="10px">
                  <Text>In a year, I estimate I could transfer ...</Text>
                </Box>
                <Box mt="10px">
                  <Select
                    bg="white"
                    borderRadius="none"
                    focusBorderColor="none"
                    iconColor="rgb(11, 95, 255)"
                    _focus={{ backgroundColor: "white" }}
                    _hover={{ backgroundColor: "white" }}
                    height="60px"
                    fontSize="16px"
                    fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
                    border="1px solid black"
                    color="#626262"
                  >
                    <option
                      style={{ backgroundColor: "#FFFFFF", color: "#626262" }}
                      value=""
                    >
                      Select Amount
                    </option>
                    <option
                      style={{ backgroundColor: "#FFFFFF", color: "#626262" }}
                      value=""
                    >
                      Under-2,000
                    </option>
                    <option
                      style={{ backgroundColor: "#FFFFFF", color: "#626262" }}
                      value=""
                    >
                      2,000-5,000
                    </option>
                    <option
                      style={{ backgroundColor: "#FFFFFF", color: "#626262" }}
                      value=""
                    >
                      5,000--10,000
                    </option>
                    <option
                      style={{ backgroundColor: "#FFFFFF", color: "#626262" }}
                      value=""
                    >
                      10,000-25,000
                    </option>
                    <option
                      style={{ backgroundColor: "#FFFFFF", color: "#626262" }}
                      value=""
                    >
                      25,000-50,000
                    </option>
                  </Select>
                </Box>

                <Box
                  mt="20px"
                  display="flex"
                  justifyContent={["center", "center", "center", "center"]}
                >
                  <Box mt="6px">
                    <Checkbox
                      size="lg"
                      bg="white"
                      iconColor="#0b5fff"
                      height="20px"
                    />
                  </Box>
                  <Box mt="5px">
                    <Text
                      fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
                      ml="10px"
                    >
                      I agree to the terms and privacy notices in order to
                      process my registration and that the information shared is
                      my own.
                    </Text>
                  </Box>
                </Box>
              </FormControl>
            </Box>
          </Stack>

          <Stack spacing={10} pt={2} mt="30px">
            <Button
              onClick={handleClick}
              variant="primary"
              width="full"
              mt="10px"
              borderRadius="30px"
              minH="50px"
              color={"white"}
              fontFamily="Circular-Book, Arial, Helvetica, sans-serif"
              background="linear-gradient(95deg,#f03ea6 4.1%,#ff6b00 95%,#f03ea6 200%)"
            >
              Continue
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
