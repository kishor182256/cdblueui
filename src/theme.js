import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const replaceExsiting = {
  variants: {
    filled: {
      field: {
        borderColor:'#e9e9e9',      
        borderWidth:"1px",
        
        backgroundColor:"white",
        borderRadius:"4px",
        height:'60px'
      },
     
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: "none",
      },
    },
  },
};

const theme = extendTheme(
  {
    

    fonts: {
      heading: `Montserrat, ${base.fonts.heading} `,
      body: "Inter",
    },
    components: {
      Button: {
        variants: {
          primary: (props) => ({ 
            backgroundColor: 'gray',
            fontSize: "20px",
            borderRadius:"20px",
            bgGradient:'linear(95deg, #f03ea6 ,#ff6b00,#f03ea6 )',
            
          }),

        },
      },

      Text: {
        baseStyle: props => ({
          color:'#6f6f6f',
          // fontSize:"12px",
          // fontFamily:" Helvetica, Roboto, Arial, sans-serif",
          // letterD: '-0.5px',
          letterSpacing: '-0.5px',
        })
      },


      ListItem: {
        baseStyle: props => ({
          color:"red",
          fontSize:"50px",
          _hover: {
            color: 'green',
          }
        })
      },


      Heading: {
        baseStyle: props => ({
          color:"#121212",
          fontSize:"32px",
          fontFamily:'Circular-Medium,Arial,Helvetica,sans-serif',
          lineHeight:"35px",
         
        })
      },
      
      layerStyles: {
        base: {
          bg: 'gray.50',
          border: '2px solid',
          borderColor: 'gray.500',
        },
        selected: {
          bg: 'teal.500',
          color: 'teal.700',
          borderColor: 'orange.500',
        },
      },
      Input: { ...replaceExsiting },
      Select: {
        baseStyle: {
          control: {
            borderColor:'blue',
            _hover: {
              backgroundColor: 'red',
            },
          },          
        }, 
      },
      option:{
        ...replaceExsiting
      },
    
      Radio: {
        baseStyle: {
          control: {
            
            borderColor:'gray',
            border:'1px solid gray',
            color:'#757575'
            
          },
         
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select", "Textarea"],
  })
);

export default theme;