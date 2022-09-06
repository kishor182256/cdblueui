import React from 'react';
import { Box, chakra, Flex, Hide, Icon, Image, Link, Select, Text, useMediaQuery } from '@chakra-ui/react'
import { useHistory ,useLocation } from 'react-router-dom'
import NewStepup from './NewStepup';
import Flags from 'country-flag-icons/react/3x2'
import { MdClose } from 'react-icons/md';
import Flag from 'national-flag-icons';
import FlagIcon from './FlagIcon';
import { useState } from 'react';
import {GiSouthAfricaFlag} from 'react-icons/gi'
import Selected from './Select';

const image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9OToTXpv2cSRsI7rQgoB-Fk9r0uYRlHEUDCEKXNFd&s'
const eng='https://www.istockphoto.com/photos/england-flag';
var jsonData= [{
  image:
  'http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg',name:'ENG'
},
{image:
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-SDrIAhKOhGH_dIDxZjwAiq_kEQLSHEcjEg&usqp=CAU',
name:'FRC'},
{image:'https://media.istockphoto.com/vectors/flag-of-united-kingdom-vector-id500425531?k=20&m=500425531&s=612x612&w=0&h=VhGis_9niYQ6anEszEQWVjxmczn5KrZKHe_VKZTX7SM=',name:'UK'}]

const images = chakra(Image, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "src",
      "alt",
      "quality",
      "placeholder",
      "blurDataURL",
      "loader ",
    ].includes(prop),
});
const Header = () => {
  const location = useLocation()
   const [isLarger] = useMediaQuery('(max-width: 350px)')
   
   const [countries] = useState([
    { code: 'ax', title: 'Greece'},
    { code: 'ba', title: 'United Kingdom'},
    { code: 'ax', title: 'United States'}
  ]);
   
  return (
  
     <Box style={{marginTop:'0',
     display: 'flex',
     backgroundColor:'#FFFFFF',
     width:'100%',alignItems:'center',
     justifyContent:`${isLarger ?   'space-between':'space-between'}`,
     height:'auto',
     clear:'both',
    
      marginLeft:`${isLarger? '10px':'auto'}`,
      marginRight:'auto'}}>
        
      {!isLarger ?<Box mb='50px' ml='50px'><Image src='./ico_CD_large.svg' alt="sunset"
        marginBottom='15px' z-index= '-1'  mb='2000px'
         width='124px' height='36px' align='center'
         display= 'block' objectFit='cover'
         margin='23px 0 0'/></Box>:<Box mb='20px'><Image src='./c-d-logo-icon.svg' alt="sunset"
         marginBottom='20px' z-index= '-1' mb='20px'
          width='36px' height='36px' align='center'
          display= 'block' objectFit='cover'
          margin='23px 0 0'/></Box>}
      {location.pathname === '/signup' ? <NewStepup/> : ''}
      <Box style={{display: 'flex',alignItems:'center'}}>
      {location.pathname === '/signup' || '/forgotPassword' ?<Box padding='10px'>
      
      <MdClose color='#0a0a0a'
       style={{display: 'flex', fontWeight:'bold',
       lineHeight:'1.5', fontSize:'24px',  height:'24px', width:'24px',
      alignItems:'center' ,justifyContent:'center',marginRight:'15px'}}/>
      </Box>:
      <Box padding='10px' mb='10px' ml='10px'>
         <Selected/>
        </Box>}
      </Box>
    </Box>
   
  )
}

export default Header