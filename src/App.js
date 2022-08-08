import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <Box bg={['white','white','black']}>
    <Header/>
    <Routes>
     <Route exact path="/" element={<Login/>}/>
     <Route exact path="/signup" element={<SignUp/>}/>
    </Routes>
    <Footer/>
</Box>
    
  )
}

export default App