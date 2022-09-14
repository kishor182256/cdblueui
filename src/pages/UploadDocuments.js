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
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./_fonts.css";

export default function UploadDocuments() {
  const [email, setEmail] = useState("");
  const [isLarger] = useMediaQuery("(max-width: 400px)");
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);


  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signupcomplete");
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
            One last thing...
          </Heading>
        </Stack>
        <Box display="flex" width="100%">
          <Text
            fontSize="15px"
            color="#6f6f6f"
            lineHeight="1.6"
            fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
          >
            Just so we know it’s really you, please provide:
          </Text>
        </Box>
        <Box display="flex">
          <Box bg="white" height="90px !important" 
          borderRadius="5px"
          width='100%'>
            <Box height='30px' mt='10px' ml='8px'>
              <Text fontFamily="Circular-Book,Arial,Helvetica,sans-serif">
              Proof of identity (e.g. passport, driving licence)
              </Text>
            </Box>
            <Box ml='8px'>
              <Text fontFamily="Circular-Book,Arial,Helvetica,sans-serif">
                Proof of address (e.g. bank statement, utility bill)
              </Text>
            </Box>
          </Box>
        </Box>

        <Box rounded={"lg"} width="100%">
          <Stack spacing={8}>
            <Box>
              <Box display="flex">
                <Box>
                  <Text>
                    We have to ask for this because we’re a regulated financial
                  </Text>
                  <Box display="flex">
                    <Text>organisation.</Text>
                    <Text> See our document requirements</Text>
                  </Box>
                </Box>
              </Box>
              <FormControl id="email">
                <Box>
                  <Text>Proof of identity</Text>
                </Box>
                 <Select
                 onChange={()=>setVisible1(true)}
                 border='1px solid gray'
                 bg='white'
                 height='60px'
                  mt="20px"
                  width="100%"
                  type="email"
                  fontSize="14px"
                  fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
                  _focus={{ backgroundColor: "white" }}
                  focusBorderColor="none"
                  placeholder="Select a document type"
                  color="#0a0a0a"
                  _placeholder={{
                    color: "#626262",
                    fontSize: "14px",
                    fontFamily: "Circular-Book,Arial,Helvetica,sans-serif",
                  }}
                  
                  value={email}
                >
                  <option
                  onChange={()=>setVisible(true)}
                   style={{ backgroundColor: "#FFFFFF", color: "#626262" }}
                  >PassPort</option>
                  <option
                   onChange={()=>setVisible(true)}
                   style={{ backgroundColor: "#FFFFFF", color: "#626262" }}
                  >Driving Licence</option>
                </Select>
                {visible1 && <> <Box border='3px dashed lightgray'
                padding='10px'
                 borderRadius='5px' mt='30px'>
                  <Text>Upload a file of the of your Bank Statement.Must be less than 3 months old.
                  <form action='.' enctype="multipart/form-data">
                  <input type='file' aria-label="cbshbs"  onChange={()=>setVisible(true)}/>
                
              </form>
                  </Text>
                  </Box>
                  
                  </>}

<Box>
                  <Text>Proof of address</Text>
                </Box>
                 <Select
                 onChange={()=>setVisible(true)}
                 border='1px solid gray'
                 style={{ backgroundColor: "#FFFFFF", color: "#626262" }}
                 bg='white'
                 height='60px'
                  mt="20px"
                  width="100%"
                  type="email"
                  fontSize="14px"
                  fontFamily="Circular-Book,Arial,Helvetica,sans-serif"
                  _focus={{ backgroundColor: "white" }}
                  focusBorderColor="none"
                  placeholder="Select a document type"
                  color="#0a0a0a"
                  _placeholder={{
                    color: "#626262",
                    fontSize: "14px",
                    fontFamily: "Circular-Book,Arial,Helvetica,sans-serif",
                  }}
                 
                  value={true}
                >
                  <option
                  onChange={()=>setVisible(true)}
                   style={{ backgroundColor: "#FFFFFF", color: "#626262" }}
                  >Utility Bill</option>
                  <option
                   onChange={()=>setVisible(true)}
                   style={{ backgroundColor: "#FFFFFF", color: "#626262" }}
                  >Bank statement</option>

                </Select>
                {visible && <> <Box border='3px dashed lightgray'
                padding='10px'
                 borderRadius='5px' mt='30px'>
                  <Text>Upload a file of the of your Bank Statement.Must be less than 3 months old.
                  <form action='.' enctype="multipart/form-data">
                  <input type='file' aria-label="cbshbs"  onChange={()=>setVisible(true)}/>
                
              </form>
                  </Text>
                  </Box>
                  
                  </>}
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
             Submit Documents
            </Button>
          </Stack>
        </Box>
        <Box>
          <Heading fontFamily='Circular-Bold' fontSize='16px'>Don’t have time now?</Heading>
        </Box>
        <Box>
          <Text>No problem. You can come back later using your email and</Text>
          <Text>password on our website or mobile app.</Text>
        </Box>
      </Stack>
    </Flex>
  );
}
