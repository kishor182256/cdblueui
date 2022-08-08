import React from "react";
import {
  Code,
  Container,
  FormControl,
  FormLabel,
  Icon
} from "@chakra-ui/react";
import { Select, chakraComponents } from "chakra-react-select";
import {
  GiCoffeeBeans,
  GiChocolateBar,
  GiStrawberry,
  GiCherry
} from "react-icons/gi";

const eng= 'https://www.istockphoto.com/photos/england-flag'

const flavorOptions = [
  {
    value: "EN",
    label: "EN",
    icon: <Icon as={GiCoffeeBeans} color="orange.700" mr={2} h={5} w={5} />
  },
  {
    value: "FR",
    label: "FR",
    icon: <Icon as={GiChocolateBar} color="yellow.800" mr={2} h={5} w={5} />
  },
  {
    value: "SE",
    label: "SE",
    icon: <Icon as={GiStrawberry} color="red.500" mr={2} h={5} w={5} />
  },
  {
    value: "NO",
    label: "NO",
    icon: <Icon as={GiCherry} color="red.600" mr={2} h={5} w={5} />
  }
];

const customComponents = {
  Option: ({ children, ...props }) => (
    <chakraComponents.Option {...props}>
      {props.data.icon} {children}
    </chakraComponents.Option>
  )
};

const Selected = () => (
  <Container>
    <FormControl p={4}>
      
      <Select
        isMulti
        name="flavors"
        options={flavorOptions}
        placeholder="Select some flavors..."
        components={customComponents}
        bg='white'
      />
    </FormControl>
  </Container>
);

export default Selected;
