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
  Image,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./_fonts.css";

export default function SelectAccountType() {
  const [email, setEmail] = useState("");
  const [isLarger] = useMediaQuery("(max-width: 400px)");
  const [show, setShow] = useState("no");
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    navigate("/signup");
  };

  const handleFirst = () => {
    setSecond(false);
    setThird(false);
    setFirst(true);
  };

  const handleSecond = () => {
    setSecond(true);
    setThird(false);
    setFirst(false);
  };

  const handleThird = () => {
    setSecond(false);
    setThird(true);
    setFirst(false);
  };

  return (
    <Flex
      bg={{ sm: "white", md: "#f4f4f4", lg: "#f4f4f4" }}
      minH={"100vh"}
      mt="-30px"
      align={"center"}
      justify={"center"}
    >
      <Stack spacing={4} maxW={"lg"} py={12} px={12} mt="-100px" width="110%">
        <Stack display="flex" justifyContent="center" alignItems="center">
          <Heading
            mb="40px"
            fontSize="36px"
            align="left"
            lineHeight="38px"
            fontFamily="'Circular-Book,Arial,Helvetica,sans-serif'"
            fontWeight="500"
          >
            I’d like to send money as:
          </Heading>
        </Stack>

        <Box rounded={"lg"} width="100%">
          <Stack spacing={8}>
            <Box display="flex">
              <FormControl id="email">
                <Box
                  cursor="pointer"
                  onClick={handleFirst}
                  width="100%"
                  backgroundColor="white"
                  height="60px"
                  display="flex"
                  alignItems={["center", "center", "center", "center"]}
                  justifyContent="space-between"
                  border={`${
                    first
                      ? "1px solid rgb(11, 95, 255)"
                      : "1px solid rgb(233, 233, 233)"
                  }`}
                  borderRadius="5px"
                >
                  <Box display="flex" ml="10px">
                    <Image
                      height="30px"
                      width="30px"
                      src="http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/whitelabel/CurrenciesDirectBlue/images/icon-profile.svg"
                    />
                    <Text
                      fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
                      color="#131415"
                      fontWeight="400"
                      ml="10px"
                    >
                      An Individual
                    </Text>
                  </Box>

                  <Box
                    display="flex"
                    alignItems={["center", "center", "center", "center"]}
                    mr="10px"
                  >
                    <RadioGroup maxW="260px" mt="5px">
                      <Radio
                        style={{
                          borderRadius: "50%",
                          backgroundColor: "white",
                          padding: "1px",
                          color: "blue",
                        }}
                        border={`${
                          first
                            ? "1px solid rgb(11, 95, 255)"
                            : "1px solid rgb(233, 233, 233)"
                        }`}
                        fontSize="16px"
                        value="no"
                        checked={show === "no"}
                        onChange={(e) => setShow(e.currentTarget.value)}
                      />
                    </RadioGroup>
                  </Box>
                </Box>

                <Box
                  onClick={handleSecond}
                  cursor="pointer"
                  width="100%"
                  backgroundColor="white"
                  height="60px"
                  display="flex"
                  alignItems={["center", "center", "center", "center"]}
                  justifyContent="space-between"
                  border={`${
                    second
                      ? "1px solid rgb(11, 95, 255)"
                      : "1px solid rgb(233, 233, 233)"
                  }`}
                  borderRadius="5px"
                  mt="10px"
                >
                  <Box display="flex" ml="10px">
                    <Image
                      height="30px"
                      width="30px"
                      src="http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/icon-company.svg"
                    />
                    <Text
                      fontWeight="400"
                      color="#131415"
                      fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
                      ml="10px"
                    >
                      A bussiness
                    </Text>
                  </Box>

                  <Box
                    display="flex"
                    alignItems={["center", "center", "center", "center"]}
                    mr="10px"
                  >
                    <RadioGroup maxW="260px" mt="5px">
                      <Radio
                        style={{
                          borderRadius: "50%",
                          backgroundColor: "white",
                          padding: "1px",
                          color: "blue",
                        }}
                        border={`${
                          first
                            ? "1px solid rgb(11, 95, 255)"
                            : "1px solid rgb(233, 233, 233)"
                        }`}
                        fontSize="16px"
                        value="no"
                        checked={show === "no"}
                        onChange={(e) => setShow(e.currentTarget.value)}
                      />
                    </RadioGroup>
                  </Box>
                </Box>

                <Box
                  mt="10px"
                  cursor="pointer"
                  onClick={handleThird}
                  width="100%"
                  backgroundColor="white"
                  height="60px"
                  display="flex"
                  alignItems={["center", "center", "center", "center"]}
                  justifyContent="space-between"
                  border={`${
                    third
                      ? "1px solid rgb(11, 95, 255)"
                      : "1px solid rgb(233, 233, 233)"
                  }`}
                  borderRadius="5px"
                >
                  <Box
                    display="flex"
                    ml="10px"
                    backgroundPosition="left 22px center"
                  >
                    <Image
                      height="30px"
                      width="30px"
                      src="http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/whitelabel/CurrenciesDirectBlue/images/icon-online-seller.svg"
                    />
                    <Text
                      fontWeight="400"
                      fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
                      color="#131415"
                      ml="10px"
                    >
                      Online Seller
                    </Text>
                  </Box>

                  <Box
                    display="flex"
                    alignItems={["center", "center", "center", "center"]}
                    mr="10px"
                  >
                    <RadioGroup maxW="260px" mt="5px">
                      <Radio
                        style={{
                          borderRadius: "50%",
                          backgroundColor: "white",
                          padding: "1px",
                          color: "blue",
                        }}
                        border={`${
                          first
                            ? "1px solid rgb(11, 95, 255)"
                            : "1px solid rgb(233, 233, 233)"
                        }`}
                        fontSize="16px"
                        value="no"
                        checked={third === "no"}
                        onChange={(e) => setThird(e.target.value)}
                      />
                    </RadioGroup>
                  </Box>
                </Box>
              </FormControl>
            </Box>
          </Stack>

          <Stack spacing={10} pt={2} mt="30px">
            <Button
              onClick={handleChange}
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
